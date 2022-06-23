FROM node:14-slim

ENV LC_ALL=C
ENV DEBIAN_FRONTEND=noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN=true

RUN apt-get update -y \
 && apt-get install -y --no-install-recommends \
            tzdata \
            ca-certificates \
            openjdk-8-jre-headless \
            unzip \
            bash \
            gnupg \
            xvfb \
            xfonts-100dpi \
            xfonts-75dpi \
            xfonts-scalable \
            xfonts-cyrillic \
            wget

ARG CHROME_VERSION="google-chrome-stable=98.0.4758.102-1"
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update -qqy \
  && apt-get -qqy install \
    ${CHROME_VERSION:-google-chrome-stable}
#   && rm /etc/apt/sources.list.d/google-chrome.list \
#   && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# RUN export DISPLAY=:99.0
# RUN Xvfb :99 -shmem -screen 0 1366x768x16 &

WORKDIR /app

# COPY config ./config
# COPY data/${ENV} ./data
# COPY helpers ./helpers
# COPY pageobjects ./test/pageobjects/
COPY urls.js ./
COPY test ./test
COPY jsconfig.json package.json package-lock.json ./

RUN npm ci \
 && DEBUG=selenium-standalone:* ./node_modules/.bin/selenium-standalone install \
 && chmod +x /app/node_modules/selenium-standalone/.selenium/chromedriver/latest-x64/chromedriver

ENTRYPOINT ["/usr/local/bin/npm", "run", "test"]
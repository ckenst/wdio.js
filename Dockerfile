FROM node:16
ADD . /app
WORKDIR /app
RUN npm i
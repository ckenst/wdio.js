# WebDriverIO

Examples of [webdriver.io](http://webdriver.io/) in action.


## Running with Selenium Standalone:

Note: This works by default if you don't have any other Selenium or ChromeDriver libraries installed (especially the selenium-standalone library)

1. Start up the docker image for [Selenium Standalone Container](https://github.com/SeleniumHQ/docker-selenium):

`docker run -d -p 4444:4444 --shm-size="2g" selenium/standalone-chrome:4.0.0-rc-2-prerelease-20210923`

2. Run all of the tests

`npx wdio run ./wdio.conf.js`
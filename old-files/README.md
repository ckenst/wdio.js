# README

These files were from my pre-v7 upgrade. They don't work / run anymore. 

That's ok since these files were created using the sync method built into WebDriverIO which is going to be phased out: https://webdriver.io/blog/2021/07/28/sync-api-deprecation.

So all of these files have been moved here for posterity. 

## Running

1. `ENV=qa|dev|staging` + `npm run test` will run every test
2. `npm test -- --spec test/elementActions.test.js` <aka path of test> will run just the file you pass it
3. Details are missing on how to run the dockerized version of the browsers. 
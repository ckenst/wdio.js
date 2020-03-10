const internetPage = require("../pages/internet.page");

describe("Interacting with elements", function() {
  it("Get text for element", () => {
    browser.url("/");
    let text = $("h2").getText(); //direct
    let text1 = internetPage.subHeading.getText(); //using page object to store locators
    let text2 = internetPage.pageFooter.getText();
    console.log(text, "\n", text1, "\n", text2);
    internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });

  it('Is footer displayed?', () => {
    console.log(internetPage.pageFooter.isDisplayed());
  });

  it('Does the header exist?', () => {
    console.log(internetPage.pageHeader.isExisting());
  });

  it('Is footer in viewport?', () => {
    console.log(internetPage.pageFooter.isDisplayedInViewport());
  })

  it('Click Element', () => {
    internetPage.clickOnLInk();
  })
});

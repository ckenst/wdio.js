const internetPage = require("../pages/internet.page");

describe("Interacting with elements", function() {
  it("Get text for element", () => {
    browser.url("/");
    let text = $("h2").getText(); //direct
    let text1 = internetPage.subHeading.getText(); //using page object to store locators
    let text2 = internetPage.pageFooter.getText();
    // console.log(text, "\n", text1, "\n", text2);
    internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });
});

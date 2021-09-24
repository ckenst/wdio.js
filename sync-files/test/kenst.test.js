describe("kenst.com loads", function() {
  it("with the right size", () => {
    let size = browser.getWindowSize();
    console.log("size is" + size); //this returns an object that I'm not sure how to read, lol
  });

  it("with the right title", () => {
    browser.url("https://www.kenst.com/");
    let text = browser.getTitle();
    console.log("text is ", text);
    assert.equal("Chris Kenst - Software Testing Techniques and Automation Strategies", text);
  });

  it("has the right url", () => {
    console.log("hello friend");
    expect(browser.getUrl()).equals("https://www.kenst.com/");
  });
});

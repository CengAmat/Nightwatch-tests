module.exports = {
  after: function (browser) {
    console.log("I am done.");
  },
  "Demo test": function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("[data-nw=name-input]")
      .setValue("[data-nw=name-input]", "Pierre")
      .weirdPause(browser.globals.timeToWait)
      .assert.textContains("[data-nw=welcome-message]", "Welcome Pierre !")
      .end();
  },
};

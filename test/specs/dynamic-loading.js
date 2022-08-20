
describe('Dynamic loading page', () =>{
it('wait for the hidden element to show',() =>{

    const btnStart = $("#start button");
    const textFinish = $("#finish h4");

    btnStart.click();
    // browser.pause (5000) explicit wait for 5 seconds

    textFinish.waitForDisplayed(); // implicit wait
    //textFinish.waitForDisplayed({reverse: true}) //it will wait for a particular element to disappear

    expect(textFinish.getText()).toEqual("Hello World");

});
}
);
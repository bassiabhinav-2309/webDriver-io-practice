

const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
   
    get flashAlert () {
        return $('#flash');
    }
    get btnLogout () {
        return $('a[href="/logout"]');
    }

}

module.exports = new SecurePage();

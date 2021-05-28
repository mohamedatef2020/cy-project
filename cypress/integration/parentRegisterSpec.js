const homePage = require('../models/homePageModel');
const registerPage = require('../models/registerPageModel');

describe('Test registration as a parent', () => {
    it('Should navigate fill the data for registration and click register successfully ', () => {
        //this test is not finished as captcha needs dev access so I stopped at the register button
        cy.visit("/");

        homePage.actions.clickRegister();
        registerPage.actions.clickParent();
        registerPage.actions.fillData();
        registerPage.actions.clickRegister();

        registerPage.assertions.assertErrorDisplayed();
        
    });
  });
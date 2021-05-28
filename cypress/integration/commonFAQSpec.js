const commonQuestionsPage = require('../models/commonQuestionsPageModel');
const homePage = require('../models/homePageModel');
const commonQuestions = require('../testData/commonQuestions');

describe('Test Common Questions Page', () => {
    it('Should display correct page title', () => {
      cy.visit("/");

      homePage.actions.openHelpMenu();
      homePage.actions.chooseCommonQuestions();

      commonQuestionsPage.assertions.assertTitleEquals(commonQuestions.pageTitle);
    });
  });

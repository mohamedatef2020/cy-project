const commonQuestionsPage = require('../models/commonQuestionsPageModel');
const homePage = require('../models/homePageModel');
const commonQuestions = require('../testData/commonQuestions');

describe('Test Common Questions Page', () => {
  before('navigate to page', () => {
    cy.visit("/");
    homePage.actions.openHelpMenu();
    homePage.actions.chooseCommonQuestions();
  })

  it('Should display correct page title', () => {
    commonQuestionsPage.assertions.assertRedirectionToFAQPage();
    commonQuestionsPage.assertions.assertTitleEquals(commonQuestions.pageTitle);
  });

  commonQuestions.questions.forEach((question, index) => {
    it(`Should display question no. ${index+1} and its answer properly`, () => {
      commonQuestionsPage.assertions.assertQuestionEquals(question.questionText, index+1);       
    })
  })
});

// Answers requires more time to collect their selectors so I stopped after questions as a POC
// using percy for visual testing would be more efficient
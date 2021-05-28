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

    commonQuestions.questions.forEach((question, index) => {
      it(`Should display question no. ${index+1} and its answer properly`, () => {
        commonQuestionsPage.assertions.assertQuestionEquals(question.questionText, index+1);
        commonQuestionsPage.actions.viewAnswer(index+1);
        commonQuestionsPage.actions.hideAnswer(index+1);        
      })
    })
  });

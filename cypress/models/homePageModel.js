const selectors = {
        helpMenu: '[data-cy="HELP_MENU"]',
        commonQuestionsBTN: '[data-cy="faq-menuItem"]',
    };

const actions = {
        openHelpMenu: () => cy.get(selectors.helpMenu).click(),
        chooseCommonQuestions: () => cy.get(selectors.commonQuestionsBTN).click(),

    };

const assertions = {
        
    }


module.exports = {
    actions,
    assertions,
};

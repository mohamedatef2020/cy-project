const selectors = {
        registerBTN: '.e1a5eqzl0',
        helpMenu: '[data-cy="HELP_MENU"]',
        commonQuestionsBTN: '[data-cy="faq-menuItem"]',
    };

const actions = {
        clickRegister: () => cy.clickBTN(selectors.registerBTN),
        openHelpMenu: () => cy.clickBTN(selectors.helpMenu),
        chooseCommonQuestions: () => cy.clickBTN(selectors.commonQuestionsBTN),

    };

const assertions = {
        
    }


module.exports = {
    actions,
    assertions,
};

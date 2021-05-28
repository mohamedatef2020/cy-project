const registrationData = require('../testData/registration');

const selectors = {
    parentBTN: '#roles > :nth-child(1) > .css-ubxa2z',
    firstName: '[data-cy=firstName-input]',
    lastName: '[data-cy=lastName-input]',
    phoneNumber: '[data-cy=mobileNumber-input]',
    male: '#gender > :nth-child(1) > .css-ubxa2z',
    password: '[data-cy=password-input]',
    passwordConfirmation: '[data-cy=passwordConfirmation-input]',
    ageRangeList: '[data-cy=ageRange-input]',
    agreeToTerms: '[data-cy="termsAndConditionsCheck-input"]',
    registerBTN: '[data-cy=submitButton]',
    captchaError: '.css-27004v.e11pp5v84'
};

const actions = {
    clickParent: () => cy.clickBTN(selectors.parentBTN),
    fillData: () => {
        cy.get(selectors.firstName).type(registrationData.firstName);
        cy.get(selectors.lastName).type(registrationData.lastName);
        cy.get(selectors.phoneNumber).type(registrationData.phoneNumber);
        cy.clickBTN(selectors.male);
        cy.get(selectors.ageRangeList).select('أقل من 25 سنة');
        cy.get(selectors.password).type(registrationData.password);
        cy.get(selectors.passwordConfirmation).type(registrationData.passwordConfirmation);
        cy.get(selectors.agreeToTerms).click({force: true});
    },
    clickRegister: () => cy.clickBTN(selectors.registerBTN),
};

const assertions=  {
    assertErrorDisplayed: () => cy.get(selectors.captchaError).should("be.visible"),
};

module.exports = {
    actions,
    assertions,
} 

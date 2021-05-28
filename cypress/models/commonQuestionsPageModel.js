const selectors = {
    pageTitle: '.css-bm95t9.e19vwfi40',
    question:  index => `:nth-child(${index}) > .Collapsible__trigger > .css-olkrgj`,
};

const actions = {

};

const assertions=  {
    assertRedirectionToFAQPage: () => cy.assertRedirectionTo('https://www.ta3limy.com/faq'),
    assertTitleEquals: title => cy.get(selectors.pageTitle).should("have.text", title),
    assertQuestionEquals: (title, index) => cy.get(selectors.question(index)).should("have.text", title),

};

module.exports = {
    actions,
    assertions,
} 

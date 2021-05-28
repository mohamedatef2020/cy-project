const selectors = {
    pageTitle: '.css-bm95t9.e19vwfi40',
    // question: '.css-13dahp2.e19vwfi43:nth-child(1)'
    question:  index => `:nth-child(${index}) > .Collapsible__trigger > .css-olkrgj`,
};

const actions = {
    viewAnswer: index => cy.get(selectors.question(index)).click(),
    hideAnswer: index => cy.get(selectors.question(index)).click(),
};

const assertions=  {
    assertTitleEquals: title => cy.get(selectors.pageTitle).should("have.text", title),
    assertQuestionEquals: (title, index) => cy.get(selectors.question(index)).should("have.text", title),

};

module.exports = {
    actions,
    assertions,
} 

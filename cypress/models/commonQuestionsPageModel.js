const selectors = {
    pageTitle: '.css-bm95t9.e19vwfi40',
};

const actions = {

};

const assertions=  {
    assertTitleEquals: title => cy.get(selectors.pageTitle).should("have.text", title),
};

module.exports = {
    actions,
    assertions,
} 

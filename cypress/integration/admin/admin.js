/* eslint-disable */
describe('Music', () => {
    beforeEach(() => {
        cy.visit('/admin/music')
        cy.fixture("music").as("music")
    })
 
    // it('Basic', () => {
    //     cy.get('[data-test="admin music"]').should('be.visible');
    //     cy.get('[data-test="admin music"]').contains('AdminMusic');
    // });

    it('Add a music', function () {
        // NAME
        cy
            .get('input[data-test="music form name"]')
            .type(this.music.name)
            .should('have.value', this.music.name)

        // ARTIST
        cy
            .get('input[data-test="music form artist"]')
            .type(this.music.artist)
            .should('have.value', this.music.artist)

        cy
            .get('input[data-test="music form file"]')
            .should('be.visible')
        
        cy
            .get('[data-test="music form submit"]')
            .click()
        
        cy
            .get('input[data-test="music form name"]')
            .should('have.value', '')

        cy
            .get('input[data-test="music form artist"]')
            .should('have.value', '')

        cy
            .get('input[data-test="music form file"]')
            .should('have.value', '')

    });
})

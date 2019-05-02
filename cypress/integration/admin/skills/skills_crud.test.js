describe('Skills_add', () => {
    let id = null
    const now = Date.now().toString()
    let name = ''
    beforeEach(() => {
        cy.fixture("skills").as("skills")
    })

    it ('add_a_skill', function () {
        name = this.skills.sample.name + now.slice(-4)

        cy.visit('/admin/skills')

        // NAME
        cy
            .get('input[data-test="skills form name"]')
            .clear()
            .type(name)
            .should('have.value', name)
        // LEVEL
        cy
            .get('input[data-test="skills form level"]')
            .clear()
            .type(this.skills.sample.level)
            .should('have.value', this.skills.sample.level)
        
        // TYPE [1: Programming, 2: Framework/Others]
        cy
            .get('select[data-test="skills form type"]')
            .select(this.skills.sample.type)
        
        // SUBMIT
        cy
            .get('button[data-test="skills form submit"]')
            .click()
            .wait(2000)

        // FORM SHOULD RESET ITS VALUE
        cy
            .get('input[data-test="skills form name"]')
            .should('have.value', '')
        cy
            .get('input[data-test="skills form level"]')
            .should('have.value', '0')
        cy
            .get('select[data-test="skills form type"]')
            .should('have.value', '')
        
        // Should have success message appear
        cy
            .get('[data-test="skills add"]')
            .contains(`Successfully added ${name}`)
        
        // Table should have the inserted value
        cy
            .get('[data-test="skills table"]')
            .contains(name)
        
        // GET THE INSERTED ID OF THE FILE
        cy
            .get('[data-test="skills table id"]')
            .last()
            .then(el => {
                id = el.text()
            })
    })
    it ('update_a_skill', function () {
        const new_name = 'testName'
        // CLICK EDIT BUTTON FROM TABLE
        cy
            .get(`button[data-test="skills table update-${id}"]`)
            .click()
            .wait(200)
        // CHANGE THE NAME
        cy
            .get('input[data-test="skills update name"]')
            .clear()
            .type(new_name)
            .should('have.value', new_name)
        // SUBMIT FORM
        cy
            .get('[data-test="skills update submit"]')
            .click()
            .wait(2000)
        
        // TABLE SHOULD CONTAIN THE NEW NAME
        cy
            .get(`[data-test="skills table row-${id}"]`)
            .contains(new_name)
    })

    it ('remove_a_skill', function () {
        // CLICK DELETE BUTTON FROM TABLE
        cy
            .get(`button[data-test="skills table delete-${id}"]`)
            .click()
            .wait(200)

        cy
            .get('[data-test="skills"]')
            .contains(`Successfully deleted ID: ${id}`)
        
        cy
            .get(`[data-test="skills table row-${id}"]`)
            .should('not.exist')
    })
})
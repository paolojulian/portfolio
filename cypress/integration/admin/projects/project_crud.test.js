describe('add_update_then_remove_project', () => {
    let id = null
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('add_a_project', function () {
        const now = Date.now().toString()
        const { projectName, description, tool, existing, projectType, link, sourceCode } = this.projects.sample
        const name = projectName + now.slice(-4)
        const descriptionSliced = description.length > 10
                ? description.slice(0, 10) + '...'
                : description
        cy.visit('/admin/projects')

        // IMAGE
        cy
            .upload_file('images/sample_image.png', 'input[data-test="project form image"]')

        // NAME
        cy
            .get('input[data-test="project form name"]')
            .clear()
            .type(name)
            .should('have.value', name)
        
        // DESCRIPTION
        cy
            .get('textarea[data-test="project form description"]')
            .type(description)
            .should('have.value', description)
        
        // TOOL
        cy
            .get('input[data-test="project form tool"]')
            .type(tool)
            .should('have.value', tool)

        // EXISTING
        cy
            .get('input[data-test="project form existing"]')
            .check()

        // PROJECT TYPE
        cy
            .get('select[data-test="project form projectType"]')
            .select(projectType)
            .should('have.value', projectType)
        
        // SUBMIT
        cy
            .get('[data-test="project form submit"]')
            .click()
            .wait(2000)
        
        // SHOULD FINISH SUCCESSFULLY
        cy
            .contains('Project Added Successfully')
        // RESET FORM
        cy.get('input[data-test="project form name"]')
            .should('have.value', '')
        cy.get('textarea[data-test="project form description"]')
            .should('have.value', '')
        cy.get('input[data-test="project form tool"]')
            .should('have.value', '')
        cy.get('input[data-test="project form existing"]')
            .should('have.value', 'on')
        cy.get('select[data-test="project form projectType"]')
            .should('have.value', '')
        
        // SHOULD DISPLAY ON THE LIST
        cy
            .get('table[data-test="project table"]')
            .contains(name)
            .contains(descriptionSliced)
            .contains(tool)
            .contains(existing ? "1" : "0")
            .contains(projectType ? "Personal" : "Company")
        
        // GET THE INSERTED ID OF THE FILE
        cy
            .get('[data-test="project table id"]')
            .last()
            .then(el => {
                id = el.text()
            })
    })

    it ('update_the_inserted_file', function () {
        const new_description = 'New Description'
        // Click the update button for the selected project
        cy
            .get(`[data-test="project table update-${id}"]`)
            .click()

        // Clear and enter the new description of the project
        cy
            .get('[data-test="project update description"]')
            .clear()
            .type(new_description)
            .should('have.value', new_description)
        
        // Submit the update
        cy
            .get('button[data-test="project update submit"]')
            .click()
            .wait(2000)
        
        // Close modal after update
        cy
            .get('[data-test="modal close"]')
            .should('not.exist')
        
        // Table list should contain new description
        cy
            .get(`[data-test="project table row-${id}"]`)
            .contains(new_description.slice(0, 10))
    })

    it ('delete_the_inserted_file', function () {
        cy
            .get(`[data-test="project table delete-${id}"]`)
            .click()
            .wait(200)
        
        cy
            .get('div[data-test="project list"]')
            .contains('Project was successfully deleted!')

        cy
            .get(`[data-test="project table row-${id}"]`)
            .should('not.exist')
    })
})

// describe('add_invalid_project')
// describe('add_invalid_image')
// describe('add_blank_fields_and_submit')
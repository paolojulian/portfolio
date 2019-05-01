const URL = require('../../APIRoutes')
const router = require('./router')
const CodingModel = require('../models/coding.model')

/**
 * /coding/skills/languages
 */
router.get(URL.coding.languages, (req, res) => {
    req.getConnection((connectionErr, db) => {
        let query = "SELECT * FROM coding WHERE codingType = 1"
        db.query(query, (error, languages) => {
            if (error) {
                return res.JSONerror()
            }
            return res.JSONsuccess(languages)
        })
    })
})
/**
 * /coding/skills/frameworks
 */
router.get(URL.coding.frameworks, (req, res) => {
    req.getConnection((connectionErr, db) => {
        let query = "SELECT * FROM coding WHERE codingType = 2"
        db.query(query, (error, frameworks) => {
            if (error) {
                return res.JSONerror()
            }
            return res.JSONsuccess(frameworks)
        })
    })
})
/**
 * /coding/projects/company
 */
router.get(URL.coding.companyProjects, (req, res) => {
    req.getConnection((connectionErr, db) => {
        let query = "SELECT * FROM coding_projects WHERE projectType = 1"
        db.query(query, (error, companyProjects) => {
            if (error) {
                return res.JSONerror()
            }
            return res.JSONsuccess(companyProjects)
        })
    })
})
/**
 * /coding/projects/personal
 */
router.get(URL.coding.personalProjects, (req, res) => {
    req.getConnection((connectionErr, db) => {
        let query = "SELECT * FROM coding_projects WHERE projectType = 2"
        db.query(query, (error, personalProjects) => {
            if (error) {
                return res.status(503)
            }
            return res.JSONsuccess(personalProjects)
        })
    })
})

// coding/projects
router.get(URL.coding.projects, (req, res) => {
    req.getConnection((connectionErr, db) => {
        const codingModel = new CodingModel.Project(db)
        codingModel.getProjects()
            .then(data => res.JSONsuccess(data))
            .catch(err => {
                // eslint-disable-next-line
                console.error(err)
                res.JSONerror(err)
            })
    })
})

/**
 * ADD A PROJECT
 * coding/projects
 */
router.post(URL.coding.projects, (req, res) => {
    const item = req.body
    req.getConnection((connectionErr, db) => {
        if (connectionErr) return res.JSONerror(connectionErr);
        const codingModel = new CodingModel.Project(db)
        const project = {
            name: item.name,
            description: item.description,
            tool: item.tool,
            imagePath: item.imagePath,
            existing: item.existing == 'true' ? 1: 0,
            projectType: item.projectType,
        }
        codingModel.addProject(project)
            .then(() => res.JSONcreated())
            .catch(err => {
                // eslint-disable-next-line
                console.error(err)
                return res.JSONerror(err)
             })
    })
})

/**
 * DELETE A PROJECT
 * coding/projects/:projectID
 */
router.delete(URL.coding.projectDetails, (req, res) => {
    const projectID = req.params.projectID
    // Get db connection
    req.getConnection(async (error, db) => {
        if (error) return res.JSONerror();

        const projectModel = new CodingModel.Project(db)

        projectModel.deleteProject(projectID)
                    .then(() => res.JSONdeleted())
                    .catch(err => {
                        // eslint-disable-next-line
                        console.trace(err)
                        return res.JSONerror()
                    })
    })

})

module.exports = router

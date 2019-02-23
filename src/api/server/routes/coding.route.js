const URL = require('../../APIRoutes')
const router = require('./router')
const JsonResponse = require('./json')

/**
 * /coding/skills/languages
 */
router.get(URL.coding.languages, (req, res) => {
    let db = req.db

    let query = "SELECT * FROM coding WHERE codingType = 1"
    db.query(query, (error, languages) => {
        if (error) {
            return res.status(503)
        }
        return res.status(200).json(new JsonResponse(true, languages))
    })
})
/**
 * /coding/skills/frameworks
 */
router.get(URL.coding.frameworks, (req, res) => {
    let db = req.db

    let query = "SELECT * FROM coding WHERE codingType = 2"
    db.query(query, (error, frameworks) => {
        if (error) {
            return res.status(503)
        }
        return res.status(200).json(new JsonResponse(true, frameworks))
    })
})
/**
 * /coding/projects/company
 */
router.get(URL.coding.companyProjects, (req, res) => {
    let db = req.db

    let query = "SELECT * FROM coding_projects WHERE projectType = 1"
    db.query(query, (error, companyProjects) => {
        if (error) {
            return res.status(503)
        }
        return res.status(200).json(new JsonResponse(true, companyProjects))
    })
})
/**
 * /coding/projects/personal
 */
router.get(URL.coding.personalProjects, (req, res) => {
    let db = req.db

    let query = "SELECT * FROM coding_projects WHERE projectType = 2"
    db.query(query, (error, personalProjects) => {
        if (error) {
            return res.status(503)
        }
        return res.status(200).json(new JsonResponse(true, personalProjects))
    })
})

module.exports = router

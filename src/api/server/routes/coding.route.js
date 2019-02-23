const URL = require('../../APIRoutes')
const router = require('./router')

/** MODELS */
const Coding = require('../models/coding.model')

router.get('/api/coding/create-table', (req, res) => {
    Coding.createTables()
        .then(() => {
            res.status(200)
                .json({ message: 'Creation Success' })
        })
        .catch(error => {
            res.status(503)
                .json({ error })
        })
})
/**
 * /coding/skills/languages
 */
router.get(URL.coding.languages, (req, res) => {
    Coding.getLanguages()
        .then((languages) => {
            res.status(200).json(languages)
        })
        .catch(() => res.status(503))
})
/**
 * /coding/skills/frameworks
 */
router.get(URL.coding.frameworks, (req, res) => {
    Coding.getFrameworks()
        .then((frameworks) => {
            res.status(200).json(frameworks)
        })
        .catch(() => res.status(503))
})
/**
 * /coding/projects/company
 */
router.get(URL.coding.companyProjects, (req, res) => {
    Coding.getCompanyProjects()
        .then((companyProjects) => {
            res.status(200).json(companyProjects)
        })
        .catch(() => res.status(503))
})
/**
 * /coding/projects/personal
 */
router.get(URL.coding.personalProjects, (req, res) => {
    Coding.getPersonalProjects()
        .then((personalProjects) => {
            res.status(200).json(personalProjects)
        })
        .catch(() => res.status(503))
})

module.exports = router

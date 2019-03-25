const JsonResponse = require('./routes/json')

const responses = (req, res, next) => {
    res.JSONsuccess = data => res.status(200).json(new JsonResponse(true, data))
    res.JSONcreated = data => res.status(201).json(new JsonResponse(true, data))

    res.JSON404 = () => res.status(404).json('404')
    res.JSONunauthorized = () => res.status(401).json('Unauthorized')
    res.JSONunavailable = () => res.status(503).json('Service Unavailable')
    res.JSONerror = () => res.status(500).json('Server Error')
    res.JSONincomplete = () => res.status(422).json('Incomplete Parameter')

    next()
}

module.exports = responses
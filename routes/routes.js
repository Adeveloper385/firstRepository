const express = require('express')
const router = express.Router()
const getController = require('../controllers/getController')
const getIdController = require('../controllers/getIdController')
const postController = require('../controllers/postController')
const deleteController = require('../controllers/deleteController')
const putController = require('../controllers/putController')

// GET Routes
router.get('/', getController) 

router.get('/:id', getIdController ) 

//POST Route
router.post('/', postController)

//PUT Route
router.put('/:id', putController)

//DELETE route
router.delete('/:id', deleteController)

module.exports = router

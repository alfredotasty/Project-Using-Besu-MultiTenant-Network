const express = require("express")
const { storeValue } = require("../controllers/interact")

const interactRoutes = express.Router()

interactRoutes.post('/storeValue',storeValue)


module.exports = interactRoutes;
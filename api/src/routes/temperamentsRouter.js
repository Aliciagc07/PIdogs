const { Router } = require('express');
const temperamentsRouter = Router();

// import hadlers
const getTemperamentsHandler = require('../handlers/temperaments/getTemperamentsHandler');

// use handlers
temperamentsRouter.get("/", getTemperamentsHandler);

module.exports = temperamentsRouter;
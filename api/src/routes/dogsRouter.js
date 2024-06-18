const { Router } = require('express');
const dogsRouter = Router();

// import hadlers
const getDogsHandler = require('../handlers/dogs/getDogsHandler');
const getDogsByIdHandler = require('../handlers/dogs/getDogsByIdHandler');
const postDogsHandler = require('../handlers/dogs/postDogsHandler');


// use handlers
//Obtener los perritos
dogsRouter.get("/", getDogsHandler);
//Obtener el perrito por ID
dogsRouter.get("/:id", getDogsByIdHandler);
//Crear un perrito
dogsRouter.post("/", postDogsHandler);

module.exports = dogsRouter;
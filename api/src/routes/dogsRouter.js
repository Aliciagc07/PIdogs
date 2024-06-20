const { Router } = require('express');
const dogsRouter = Router();

// import hadlers
const getDogsHandler = require('../handlers/dogs/getDogsHandler');
const getDogByIdHandler = require('../handlers/dogs/getDogByIdHandler');
const postDogsHandler = require('../handlers/dogs/postDogsHandler');


// use handlers
//Obtener los perritos
dogsRouter.get("/", getDogsHandler);
//Obtener el perrito por ID
dogsRouter.get("/:id", getDogByIdHandler);
//Crear un perrito
dogsRouter.post("/", postDogsHandler);

module.exports = dogsRouter;
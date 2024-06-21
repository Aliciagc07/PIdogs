const { Dog, Temperament } = require('../../db');

const postDogsController = async ({ name, image, height, weight, life_span, temperaments }) => {
    // Creamos el perrito
    const newDog = await Dog.create({
        name,
        image,
        height,
        weight,
        life_span
    });

    await newDog.addTemperaments(temperaments);

    return newDog;
}

module.exports = postDogsController;
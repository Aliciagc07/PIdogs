const { Dog, Temperament } = require('../../db');

const getDogsDBController = async () => {
    const allDogsBD = await Dog.findAll(
        {
            include: [
                {
                    model: Temperament,
                    attributes: ["name"],
                    through: { attributes: [] }
                }
            ]
        }
    );
    return allDogsBD;
}


module.exports = getDogsDBController;
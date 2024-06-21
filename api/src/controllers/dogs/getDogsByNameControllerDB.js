const { Dog, Temperament } = require('../../db');

const getDogsByNameControllerDB = async (name) => {
    const allDogsDB = await Dog.findAll(
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

    const allDogsDBFilter = allDogsDB.length !== 0 ? allDogsDB.filter((dog) => dog.name.toLowerCase().startsWith(name.toLowerCase())) : [];


    return allDogsDBFilter;
}


module.exports = getDogsByNameControllerDB;
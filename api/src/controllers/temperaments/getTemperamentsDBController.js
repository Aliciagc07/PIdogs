const { Dog, Temperament } = require('../../db');

const getTemperamentsDBController = async (allTemperamentsAPI) => {
    // Inserta todos los temperament en la BDD si no existen
    for (const temperament of allTemperamentsAPI) {
        await Temperament.findOrCreate(
            {
                where: { name: temperament.name }
            }
        );
    }
    const temperamentDB = await Temperament.findAll({});
    return temperamentDB;
}


module.exports = getTemperamentsDBController;
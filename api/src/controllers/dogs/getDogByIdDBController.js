const { Dog, Temperament } = require('../../db');

const getDogByIdDBController = async (id) => {
    //Obtiene el perrito por id de la base de datos
    const dogByIdBD = await Dog.findOne(
        {
            where: { id: id },
            include:
            {
                model: Temperament,
                attributes: ["name"],
                through: { attributes: [] }
            }
        }
    );
    return dogByIdBD;
}


module.exports = getDogByIdDBController;
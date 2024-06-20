//importamos los controllers
//controllers para obtener todos los perritos
const getDogsApiController = require('../../controllers/dogs/getDogsApiController');
const getDogsDBController = require('../../controllers/dogs/getDogsDBContoller');

//controlles para obtener los perritos por nombre
const getDogsByNameControllerAPI = require('../../controllers/dogs/getDogsByNameControllerAPI');
const getDogsByNameControllerDB = require('../../controllers/dogs/getDogsByNameControllerDB');

// handler getDogsHandler
const getDogsHandler = async (req, res) => {
    const { name } = req.query;
    console.log(name)
    try {
        if (name) {
            const dogsByNameAPI = await getDogsByNameControllerAPI(name);
            const dogsByNameDB = await getDogsByNameControllerDB(name);
            const dogByName = [...dogsByNameDB, ...dogsByNameAPI]
            res.status(200).json(dogByName);
        } else {
            //trae los datos de la api
            const allDogsApi = await getDogsApiController();
            //trae los datos de la bd
            const allDogsDB = await getDogsDBController();
            // Juntamos los perritos de la api y de la bd
            const allDogs = [...allDogsDB, ...allDogsApi];
            res.status(200).json(allDogs);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getDogsHandler;
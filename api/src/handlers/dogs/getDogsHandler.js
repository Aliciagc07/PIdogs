//importamos los controllers
const getDogsApiController = require('../../controllers/dogs/getDogsApiController');
const getDogsDBController = require('../../controllers/dogs/getDogsDBContoller');

// handler getDogsHandler
const getDogsHandler = async (req, res) => {
    try {
        const dogs = await getDogsApiController();
        res.status(200).json(dogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getDogsHandler;
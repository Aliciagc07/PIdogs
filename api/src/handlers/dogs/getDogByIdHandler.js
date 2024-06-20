//importamos los controllers
const getDogByIdApiController = require('../../controllers/dogs/getDogByIdApiController');
const getDogByIdDBController = require('../../controllers/dogs/getDogByIdDBController');

// handler getDogsHandler
const getDogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        if (isNaN(id)) {
            const dogByIdDB = await getDogByIdDBController(id);
            res.status(200).json(dogByIdDB);
        } else {
            const dogByIdApi = await getDogByIdApiController(id);
            res.status(200).json(dogByIdApi);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getDogByIdHandler;
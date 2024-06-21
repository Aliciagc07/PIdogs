//importamos los controllers
const postDogsController = require('../../controllers/dogs/postDogsController');

// handler getDogsHandler
const postDogsHandler = async (req, res) => {
    //obtenemos los datos del perrito por body
    const dog = req.body;
    try {
        const response = await postDogsController(dog);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = postDogsHandler;
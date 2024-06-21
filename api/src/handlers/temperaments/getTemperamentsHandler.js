//importamos los controllers
const getTemperamentsApiController = require('../../controllers/temperaments/getTemperamentsApiController');
const getTemperamentsDBController = require('../../controllers/temperaments/getTemperamentsDBController');


// handler getTemperamentsHandler
const getTemperamentsHandler = async (req, res) => {
    try {
        // Obtener datos de la API
        const allTemperamentsAPI = await getTemperamentsApiController();
        // Enviar datos de la API a la BD
        const allTemperamentsDB = await getTemperamentsDBController(allTemperamentsAPI);
        res.status(200).json(allTemperamentsDB);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getTemperamentsHandler;
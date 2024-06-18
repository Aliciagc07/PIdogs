//importamos los controllers


// handler getTemperamentsHandler
const getTemperamentsHandler = async (req, res) => {
    try {
        res.status(200).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getTemperamentsHandler;
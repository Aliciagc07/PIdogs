//importamos los controllers

// handler getDogsHandler
const getDogsByIdHandler = async (req, res) => {
    try {
        res.status(200).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getDogsByIdHandler;
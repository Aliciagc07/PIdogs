const axios = require('axios');
const { API_KEY } = process.env;

const getDogsApiController = async () => {
    console.log(process.env.API_KEY);
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`)).data;
    const infoApiFilter = await infoApi.map((dog) => {
        return {
            id: dog.id,
            image: dog.image?.url,
            name: dog.name,
            height: dog.height?.metric,
            weight: dog.weight?.metric,
            life_span: dog.life_span,
            temperament: dog.temperament
        }
    });
    return infoApiFilter;
}


module.exports = getDogsApiController;
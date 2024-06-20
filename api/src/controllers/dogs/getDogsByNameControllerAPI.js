const axios = require('axios');
// const { API_KEY } = process.env;

const getDogsByNameControllerAPI = async (name) => {
    console.log(name);
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    const infoApiFilter = await infoApi.map((dog) => {
        return {
            id: dog.id,
            image: dog.image?.url,
            name: dog.name,
            height: dog.height?.metric,
            weight: dog.weight?.metric,
            life_span: dog.life_span
        }
    });
    return infoApi;
}


module.exports = getDogsByNameControllerAPI;
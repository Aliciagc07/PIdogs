const axios = require('axios');
// const { API_KEY } = process.env;

const getDogByApiController = async (id) => {
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`)).data;
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

    const dogByID = infoApiFilter.find((dog) => {
        return dog.id = id;
    })

    return dogByID;
}


module.exports = getDogByApiController;
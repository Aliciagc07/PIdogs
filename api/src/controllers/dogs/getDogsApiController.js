const axios = require('axios');
const { API_KEY } = process.env;

const getDogsApiController = async () => {
    const infoApi = (await axios.get('https://api.thedogapi.com/v1/images/search?limit=5&api_key=live_Fas2dr32kngvGtvWRnitvK1jMMhUNhN6QnsMwXF4Cm1uTrvAHzdxfgdOWt8IzkSg')).data;
    const infoApiFilter = infoApi.map((dog => {
        //const breed = dog.breeds[0];
        return {
            id: dog.breeds.id,
            image: dog.url,
            name: dog.breeds.name,
            height: dog.breeds.height,
            weight: dog.breeds.weight,
            life_span: dog.breeds.life_span
        }
    }))
    return infoApiFilter;


}


module.exports = getDogsApiController;
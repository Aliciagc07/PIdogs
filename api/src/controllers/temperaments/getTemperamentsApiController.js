const axios = require('axios');
// const { API_KEY } = process.env;

const getTemperamentsApiController = async () => {
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`)).data;
    const infoApiFilter = await infoApi.map((dog) => {
        return {
            name: dog.temperament,
        }
    });

    // Obtiene todos los temperamentos en un array
    const allTemperaments = infoApiFilter.flatMap(temperament => temperament.name?.split(', '));

    // Eliminar duplicados
    const uniqueTemperaments = [...new Set(allTemperaments)];

    // Eliminar valores nulos
    const uniqueTemperamentsNull = uniqueTemperaments.filter((temp) => temp != null);

    // Ordenarlos temperamentos
    const uniqueTemperamentsOrden = uniqueTemperamentsNull.sort();

    // Agrega un id a cada temperamento
    const temperamentsWithId = uniqueTemperamentsOrden.map((temp, index) => {
        return { id: index + 1, name: temp };
    });


    return temperamentsWithId;
}


module.exports = getTemperamentsApiController;
const axios = require('axios');

const getLugarLatLng = async( dir ) => {
    
    // Se prepara direccion para el manejo de los espacios en las ciudades.
    const encodedUrl = encodeURI( dir );

    // Se instancia el Axios
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'X-RapidAPI-Key': 'af1a96b0d9mshe1dc19fafa8609dp1db929jsne0f3f43b4d77'}
    });

    // Peticion GET a City Locations
    const resp = await instance.get();

    if ( resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
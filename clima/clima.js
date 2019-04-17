const axios = require('axios');

const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=43299c87d881c867d1dabac1e99a4b6c`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://numbersapi.p.rapidapi.com/5/math',
  params: {fragment: 'true', json: 'true'},
  headers: {
    'X-RapidAPI-Key': 'b63a07b796msh2cafcc3cee1aedep14571fjsnb209a2f1602d',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
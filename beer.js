const axios = require('axios');
const cheerio = require('cheerio');
const breweryapi = 'http://api.brewerydb.com/v2/';
var brewtoken = process.env.BREWERYDB_TOKEN;

const fetchBeer = () => {
  return axios.get(breweryapi+'/beer/random/?key='+brewtoken)
    .then((response) => {
      console.log(response.data);
      //const $ = cheerio.load(response.data.name);
      //return `http:${$('.cartoon img')[0].attribs['data-original']}`;
      return response.data;
    })
};

module.exports = {
  fetchBeer,
};
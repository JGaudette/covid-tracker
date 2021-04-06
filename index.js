const axios = require('axios');
const url = 'https://www.vaccinespotter.org/api/v0/states/MA.json';
const dayjs = require('dayjs');
const twilioUtils = require('./twilioUtils');

require('dotenv').config();

async function update(){
  let resp = await axios.get(url);
  let data = resp.data.features;

  let sites_available = data.filter( e => e.properties.appointments_available );
  let sites_total = data.length;
  

  console.log("" + dayjs().format('YYYY-MM-DD HH:mm:ss') + ": " + sites_total + " sites: " + sites_available.length + " available");

  for(let i=0; i<sites_available.length; i++){
    let site = sites_available[i].properties;

    let msg = "vaccine available: " + site.provider_brand + ' in ' + site.name + ' - ' + site.url;

    let numbers = process.env.NOTIFY_NUMBER.split(',');
    for(let j=0; j<numbers.length; numbers++){
      twilioUtils.sendSMS(number, msg);
    }
  }

  return sites_available;
}


update();

setInterval( update, 1000 * 60 * 10 );

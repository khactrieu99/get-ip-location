'use strict';

const axios = require('axios');

module.exports = async function getIpLocation(IPAddress) {
    let json = await axios.get(`http://api.ipstack.com/${IPAddress}?access_key=4fee19b6856f0adfdc6d41ee1bd453e1&fields=region_name`)
    return json['data']['region_name']
};
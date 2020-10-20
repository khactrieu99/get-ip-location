
# Get IP region name

This package is used to get the region name of the provided IP address

# Install

``` bash

$ npm install get-ip-region-name

```

# Example Usage

``` javascript
const getIpLocation = require('get-ip-region-name')

// this function return a promise
const ipData = await getIpLocation('115.79.192.144');
console.log(ipData);

```
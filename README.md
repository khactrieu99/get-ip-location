
# Get IP Location

This package is used to get the location (region name) of the provided IP address

# Install

``` bash

$ npm install get-ip-location

```

# Example Usage

``` javascript
const getIpLocation = require('get-ip-location')

// this function return a promise
getIpLocation('115.79.192.144')
    .then(region_name => {
        // do whatever you want with the region name here
        
        console.log(region_name)
        
    })
    .catch(err => Error(err))

```
'use strict';

const api_key = '950452be7c381abbd03d9d27c787bb50';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

// Fetch data from the server using 'url' and passes the result in JSON data to a 'callback' function along with an optional parameter if has 'optionalParameter'

const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data,optionalParam))
}

export {imageBaseUrl, api_key, fetchDataFromServer}
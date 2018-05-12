const fetch = require('node-fetch');
const path = require('path');

const timeout = require('./timeout');

require('dotenv').config();

//require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SEARCH_PARAMS = {
    location: '43.6275,-89.7710',
    radius: '15000',
    type: 'restaurant'
}

const API_KEY = process.env.PLACES_API_KEY;

function objectFilter(obj, allowed) {
    return Object.keys(obj)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = obj[key];
            return obj;
        }, {})
}

async function apiRequest(URL) {
    try {
        const response = await fetch(URL);
        const parsedResponse = await response.json();
        if (parsedResponse.status !== 'OK') throw new Error(`Request to Places API failed. Status: ${parsedResponse.status || 'none'}. Error: ${parsedResponse.error_message || 'none'}`);
        return {
            ok: true,
            data: parsedResponse,
        };
    } catch (error) {
        return {
            ok: false,
            error: error.toString() 
        };
    }

}

async function getRestaurantList() {
    let restaurants = [];

    const searchURL = buildSearchURL(SEARCH_PARAMS);
    let response = await apiRequest(searchURL);

    let done = false;

    while (!done) {
        if (!response.ok) {
            const { error } = response;
            return {
                ok: false,
                error,
            };
        }

        restaurants = restaurants.concat(response.data.results);

        const { next_page_token } = response.data;

        if (next_page_token) {
            const nextPageURL = buildSearchURL(SEARCH_PARAMS, next_page_token);
            await timeout(2000);
            response = await apiRequest(nextPageURL);
        } else {
            done = true;
        }
    }

    //the properties I want from the API response
    const desiredItems = [
        'name',
        'place_id', 
        'id',
    ];

    // retain only desiredItems
    const filteredRestaurants = restaurants.map(r => {
        return Object.keys(r)
            .filter(key => desiredItems.includes(key))
            .reduce((obj, key) => {
                obj[key] = r[key];
                return obj;
            }, {});
    });

    return {
        ok: true,
        data: filteredRestaurants,
    };

}

async function getRestaurantDetails(placeID) {
    const URL = buildDetailsURL(placeID);
    const response = await apiRequest(URL);

    if (!response.ok) {
        return {
            ok: false,
            error: response.error,
        }
    }

    const desiredItems = [
        'id',
        'place_id',
        'name',
        'formatted_address',
        'url',
        'website',
        'opening_hours'

    ]

    const data = Object.keys(response.data.result)
        .filter(key => desiredItems.includes(key))
        .reduce((obj, key) => {
            if (key === 'opening_hours') {
                delete response.data.result[key].open_now;
                obj[key] = JSON.stringify(response.data.result[key]);
            } else {
                obj[key] = response.data.result[key]
            }

            return obj;
        }, {});

    return {
        ok: true,
        data,
    }
    
}

async function getRestaurants(list) {
    // the list of restaurants can be supplied as this functions argument
    // if none is provided, make a request to Google's API
    if (!list) {
        const listResponse = await getRestaurantList();
        // return the error object from listResponse if unsuccessful
        if (!listResponse.ok) return listResponse;

        list = listResponse.data;
    }

    const restaurantPromises = list.map(async r => {
        const detailsResponse = await getRestaurantDetails(r.place_id);
        if (!detailsResponse.ok) return;
        return detailsResponse.data;
    })

    const restaurants = await Promise.all(restaurantPromises);

    if (restaurants.some(r => r === undefined)) {
        return {
            ok: false,
            error: 'Some details requests failed. Possible poor internet connection',
        }
    }

    return {
        ok: true,
        data: restaurants,
    };
}

function buildSearchURL(params, nextPageToken) {
    if (nextPageToken) {
        return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${nextPageToken}&key=${API_KEY}`
    } else {
        return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${params.location}&radius=${params.radius}&type=${params.type}&key=${API_KEY}`

    }
}

function buildDetailsURL(placeID) {
    return `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&key=${API_KEY}`
}

module.exports = getRestaurants;

//(async () => {
//    try {
//        const restaurants = await getRestaurants();
//        console.log(restaurants.data.map(r => r.name));
//    } catch (err) {
//        console.log(err);
//    }
//})();

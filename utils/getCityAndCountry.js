import { API_KEY } from '@env';

const BASE_URL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}`;

console.log(API_KEY);

export const getCityAndCountry = async (latitude, longitude) => {
    try {
        const response = await fetch(
            `${BASE_URL}&q=${latitude},${longitude}`,
        );
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
    }
};

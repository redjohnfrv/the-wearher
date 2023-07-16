import axios from 'axios';
import { geolocation } from '../constants';

export const getWeatherData = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `${baseUrl}?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${apiKey}`;

    return axios.get(url).then((response) => response.data);
};

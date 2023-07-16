import axios from 'axios';
import { geolocation } from '../constants';

export const getWeatherData = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
        .get(
            `${baseUrl}?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${apiKey}`
        )
        .then((response) => {
            // TODO delete this log
            console.log(response.data);

            return response.data;
        })
        .catch((error) => {
            /// TODO make a error toast
            console.error(error);
        });
};

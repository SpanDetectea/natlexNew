import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
});

export const weatherApi = {
    getWeatherData(city = 'Moscow', days = '7') {
        return instance.get(`/forecast.json?key=14d0fbe1d6974f89826193116231104&q=${city}&days=${days}&aqi=no&alerts=no`).then(response => response.data.forecast.forecastday);
    }
}
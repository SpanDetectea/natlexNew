import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
});

export const weatherApi = {
    getWeatherData(city = 'Moscow', days = '7') {
        return instance.get(`/forecast.json?key=b981956399fc444dbdf162056222809&q=${city}&days=${days}&aqi=no&alerts=no`).then(response => response.data);
    }
}
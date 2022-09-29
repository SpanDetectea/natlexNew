import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    headers: {
        // 'X-API-KEY': '2db36e01-65c5-4c85-bcc8-42996fbff616', //gmail
        // 'X-API-KEY': 'b981956399fc444dbdf162056222809', //yandex
    }
});

export const weatherApi = {
    getWeatherData(city = 'Moscow', days = '7') {
        return instance.get(`/forecast.json?key=b981956399fc444dbdf162056222809&q=${city}&days=${days}&aqi=no&alerts=no`).then(response => response.data);
    }
}
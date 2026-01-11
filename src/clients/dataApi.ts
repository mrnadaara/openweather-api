import axios from "axios";
import { openWeatherApiKey, openWeatherDataApiUrl } from "../config";
import { CurrentWeather } from "../interfaces/weather";

const openWeatherDataApiClient = axios.create({
    baseURL: openWeatherDataApiUrl,
    params: {
        appid: openWeatherApiKey,
        units: "metric"
    }
});

export const getWeatherForLatLon = async (lat: number, lon: number) => {
    const { data: { name, main, weather } } = await openWeatherDataApiClient.get<CurrentWeather>("", {
        params: { lat, lon }
    });
    return {
        name,
        temp: main.temp,
        feelsLike: main.feels_like,
        minTemp: main.temp_min,
        maxTemp: main.temp_max,
        humidity: main.humidity,
        description: weather[0].description
    }
}

export const getWeatherForLatLonHTML = async (lat: number, lon: number) => {
    const { data } = await openWeatherDataApiClient.get("", {
        params: { lat, lon, mode: "html" }
    });
    return data;
}

export const getWeatherForLatLonXML = async (lat: number, lon: number) => {
    const { data } = await openWeatherDataApiClient.get("", {
        params: { lat, lon, mode: "xml" }
    });
    return data;
}
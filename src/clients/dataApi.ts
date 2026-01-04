import axios from "axios";
import { openWeatherApiKey, openWeatherDataApiUrl } from "../config";

export const getWeatherForLatLon = async (lat: number, lon: number) => {
    const { data } = await axios.get(`${openWeatherDataApiUrl}?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`);
    return {
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        humidity: data.main.humidity,
        description: data.weather[0].description
    }
}
import axios from "axios";
import { openWeatherApiKey, openWeatherGeoApiUrl } from "../config";

export const getLatLonForCity = async (city: string, code?: string) => {
    const response = await axios.get(`${openWeatherGeoApiUrl}?q=${city},${code}&appid=${openWeatherApiKey}`);
    console.log(response.data)
    return response.data[0]
};
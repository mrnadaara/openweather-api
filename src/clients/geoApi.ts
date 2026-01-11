import axios from "axios";
import { openWeatherApiKey, openWeatherGeoApiUrl } from "../config";
import { Geocode } from "../interfaces/geocode";
import { Coord } from "../interfaces/geocode";

const openWeatherGeoApiClient = axios.create({
    baseURL: openWeatherGeoApiUrl,
    params: {
        appid: openWeatherApiKey
    }
});

export const getLatLonForCity = async (city: string, code?: string): Promise<Coord> => {
    const { data: [item] } = await openWeatherGeoApiClient.get<Geocode[]>("", {
        params: {
            q: `${city},${code}`
        }
    });
    if (!item) return;
    return {
        lat: item.lat,
        lon: item.lon
    }
};
import { Coord } from "./geocode";

interface WeatherCondition {
    main: string;
    description: string;
}

interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface CurrentWeather {
    coord: Coord;
    weather: WeatherCondition[];
    main: WeatherMain;
    visibility: number;
    wind: Wind;
    rain: { "1h": number; };
    clouds: { all: number; };
    name: string;
}
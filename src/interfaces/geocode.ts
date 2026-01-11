export interface Coord {
    lon: number;
    lat: number;
}

export interface Geocode extends Coord {
    name: string;
    local_names: Record<string, string>;
    country: string;
    state: string;
}
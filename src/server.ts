import express from "express";
import { serverPort } from "./config";
import { getLatLonForCity } from "./clients/geoApi";
import { getWeatherForLatLon } from "./clients/dataApi";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    if (!req.query || !req.query.city) {
        return res.status(400).json("Please provide the name of a city")
    }
    const optionalCode = req.query.code ? req.query.code.toString() : undefined;
    const geoCodeRes = await getLatLonForCity(req.query.city.toString(), optionalCode);
    if (!geoCodeRes) {
        return res.status(400).json("Could not retrieve requested city")
    }
    const weatherDataRes = await getWeatherForLatLon(geoCodeRes.lat, geoCodeRes.lon)
    res.json(weatherDataRes);
});

app.listen(serverPort, () => {
    console.log(`Server is running at port ${serverPort}`)
})

export default app;
// Interfaces generadas a partir del JSON de Open-Meteo
// Herramienta: https://transform.tools/json-to-typescript
// La interfaz "Root" fue renombrada a "OpenMeteoResponse"

export interface OpenMeteoResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: Current;
    hourly: Hourly;
}

// Datos por hora (listas paralelas: hourly.time[i] corresponde a hourly.temperature_2m[i])
export interface Hourly {
    time: string[];
    temperature_2m: number[];
    wind_speed_10m: number[];
}

export interface CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    wind_speed_10m: string;
}

export interface Current {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
}

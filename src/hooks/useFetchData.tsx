import { useState, useEffect } from 'react';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

// Tabla que asocia cada ciudad (valor del selector) con sus coordenadas
const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
    guayaquil: { latitude: -2.1962, longitude: -79.8862 },
    quito: { latitude: -0.1807, longitude: -78.4678 },
    manta: { latitude: -0.9677, longitude: -80.7089 },
    cuenca: { latitude: -2.9006, longitude: -79.0045 },
};

// Ahora el hook recibe la ciudad elegida como parámetro
export default function useFetchData(selectedOption: string | null): OpenMeteoResponse | undefined {
    // Estado que almacena la respuesta de la API (undefined hasta obtener datos)
    const [data, setData] = useState<OpenMeteoResponse | undefined>(undefined);

    // useEffect: se vuelve a ejecutar cada vez que cambia la ciudad seleccionada
    useEffect(() => {
        // Si aun no hay ciudad elegida, usamos Guayaquil por defecto
        const cityConfig =
            selectedOption != null ? CITY_COORDS[selectedOption] : CITY_COORDS.guayaquil;

        // Construimos la URL con las coordenadas de la ciudad elegida
        const url =
            `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}` +
            '&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m' +
            '&hourly=temperature_2m,wind_speed_10m' + // datos por hora para tabla y grafico
            '&timezone=America%2FChicago';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result: OpenMeteoResponse = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, [selectedOption]); // <-- la dependencia: re-ejecuta cuando cambia la ciudad

    return data;
}

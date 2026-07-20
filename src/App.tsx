    import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import useFetchData from './hooks/useFetchData';

function App() {
    // Estado que guarda la ciudad elegida (vive en el padre: "lifting state up")
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    // El hook recibe la ciudad y trae los datos del clima de esa ciudad
    const dataFetcherOutput = useFetchData(selectedOption);

    // Datos por hora para la tabla y el grafico (primeras 24 horas)
    const hourlyLabels = dataFetcherOutput?.hourly?.time.slice(0, 24) ?? [];
    const hourlyTemp = dataFetcherOutput?.hourly?.temperature_2m.slice(0, 24) ?? [];
    const hourlyWind = dataFetcherOutput?.hourly?.wind_speed_10m.slice(0, 24) ?? [];

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={5} sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>

                {/* Encabezado */}
                <Grid size={{ xs: 12, md: 12 }}>
                    <HeaderUI />
                </Grid>

                {/* Alertas (ancho completo, segun guia 12) */}
                <Grid size={{ xs: 12, md: 12 }}>
                    <AlertUI description="No se preveen lluvias" />
                </Grid>

                {/* Selector */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <SelectorUI onOptionSelect={setSelectedOption} />
                </Grid>

                {/* Indicadores (agrupados en una sola celda md:9, segun guia 12) */}
                <Grid size={{ xs: 12, md: 9 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <IndicatorUI
                                title="Temperatura (2m)"
                                description={
                                    dataFetcherOutput?.current
                                        ? `${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`
                                        : 'Cargando...'
                                }
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <IndicatorUI
                                title="Temperatura aparente"
                                description={
                                    dataFetcherOutput?.current
                                        ? `${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`
                                        : 'Cargando...'
                                }
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <IndicatorUI
                                title="Velocidad del viento"
                                description={
                                    dataFetcherOutput?.current
                                        ? `${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`
                                        : 'Cargando...'
                                }
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <IndicatorUI
                                title="Humedad relativa"
                                description={
                                    dataFetcherOutput?.current
                                        ? `${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`
                                        : 'Cargando...'
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Gráfico */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper sx={{ p: 2 }}>
                        <ChartUI labels={hourlyLabels} values1={hourlyTemp} values2={hourlyWind} />
                    </Paper>
                </Grid>

                {/* Tabla */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper sx={{ p: 2 }}>
                        <TableUI labels={hourlyLabels} values1={hourlyTemp} values2={hourlyWind} />
                    </Paper>
                </Grid>

                {/* Información adicional */}
                <Grid size={{ xs: 12, md: 12 }}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                        Información adicional (próximamente)
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}

export default App;

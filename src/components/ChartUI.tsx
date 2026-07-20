import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

// Props: las mismas tres listas paralelas que la tabla
interface ChartUIProps {
    labels: string[];
    values1: number[];
    values2: number[];
}

export default function ChartUI({ labels, values1, values2 }: ChartUIProps) {
    return (
        <>
            <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                Datos Climáticos Horarios
            </Typography>
            <LineChart
                height={300}
                series={[
                    { data: values1, label: 'Temperatura (°C)' },
                    { data: values2, label: 'Viento (km/h)' },
                ]}
                xAxis={[{ scaleType: 'point', data: labels }]}
            />
        </>
    );
}

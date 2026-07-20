import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

// Props: tres listas paralelas (hora, temperatura, viento)
interface TableUIProps {
    labels: string[];
    values1: number[];
    values2: number[];
}

// Une las tres listas en el formato de filas que espera DataGrid
function combineArrays(labels: string[], values1: number[], values2: number[]) {
    return labels.map((label, index) => ({
        id: index,
        label: label,
        value1: values1[index],
        value2: values2[index],
    }));
}

// Definicion de las columnas de la tabla
const columns: GridColDef[] = [
    { field: 'label', headerName: 'Hora', width: 160 },
    { field: 'value1', headerName: 'Temperatura (°C)', width: 160 },
    { field: 'value2', headerName: 'Viento (km/h)', width: 160 },
];

export default function TableUI({ labels, values1, values2 }: TableUIProps) {
    const rows = combineArrays(labels, values1, values2);

    return (
        <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

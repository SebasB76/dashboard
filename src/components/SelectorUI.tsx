import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// El selector recibe del padre una funcion para avisarle la ciudad elegida
interface SelectorProps {
    onOptionSelect: (option: string) => void;
}

export default function SelectorUI({ onOptionSelect }: SelectorProps) {
    // Hook useState: guarda la ciudad seleccionada (para el texto local)
    const [cityInput, setCityInput] = useState('');

    // Evento onChange: actualiza el estado local y avisa al padre
    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedValue = event.target.value;
        setCityInput(selectedValue);   // actualiza el estado local
        onOptionSelect(selectedValue); // avisa al padre (App) la ciudad elegida
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select
                labelId="city-select-label"
                id="city-simple-select"
                label="Ciudad"
                value={cityInput}
                onChange={handleChange}
            >
                <MenuItem disabled value="">
                    <em>Seleccione una ciudad</em>
                </MenuItem>
                <MenuItem value={'guayaquil'}>Guayaquil</MenuItem>
                <MenuItem value={'quito'}>Quito</MenuItem>
                <MenuItem value={'manta'}>Manta</MenuItem>
                <MenuItem value={'cuenca'}>Cuenca</MenuItem>
            </Select>

            {cityInput && (
                <p>
                    Información del clima en{' '}
                    <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                        {cityInput}
                    </span>
                </p>
            )}
        </FormControl>
    );
}

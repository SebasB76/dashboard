import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IndicatorConfig {
    title: string;
    description: string;
}

export default function IndicatorUI(config: IndicatorConfig) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {config.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {config.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

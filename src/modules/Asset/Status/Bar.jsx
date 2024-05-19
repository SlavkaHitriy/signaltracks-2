import { Box } from '@mui/material';

export const Bar = ({ percent, bgcolor }) => {
    return (
        <Box
            sx={{
                width: 5,
                flexShrink: 0,
                height: `${percent}%`,
                bgcolor: bgcolor || 'secondary.main',
            }}
        />
    );
};

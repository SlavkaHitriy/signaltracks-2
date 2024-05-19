import { Box, Stack, Typography } from '@mui/material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';

export const Tag = ({ text, textSize = 14, borderColor = 'secondary.main', status, textColor = 'primary.main' }) => {
    return (
        <Stack
            direction={'row'}
            gap={1}
            px={1}
            py={'3px'}
            borderRadius={'6px'}
            border={'2px solid'}
            borderColor={borderColor}
            alignItems={'center'}
        >
            <Typography color={textColor} fontSize={textSize}>
                {text}
            </Typography>
            {status && <ColorStatus code={status} />}
        </Stack>
    );
};

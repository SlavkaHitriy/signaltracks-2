import { Box, CircularProgress, Stack, Typography } from '@mui/material';

export const DefaultCircularProgress = ({ size = 70, color = '#0062FF', title, text, value, fontSize = 24 }) => {
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.replace('#', ''), 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255].join(', ');
    };

    return (
        <Stack direction={'row'} alignItems={'center'} gap={2}>
            <Box sx={{ position: 'relative', display: 'inline-flex', zIndex: 3 }}>
                <CircularProgress
                    size={size}
                    variant='determinate'
                    value={value}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex: 1,
                        pointerEvents: 'none',
                        '*': {
                            strokeWidth: '2px',
                        },
                        svg: {
                            '& > *': {
                                color: color || 'secondary.main',
                                strokeLinecap: 'round',
                            },
                        },
                    }}
                />
                <CircularProgress
                    size={size}
                    variant='determinate'
                    value={100}
                    sx={{
                        pointerEvents: 'none',
                        '*': {
                            strokeWidth: '2px',
                        },
                        svg: {
                            '& > *': {
                                color: `rgba(${hexToRgb(color)}, 0.1)`,
                            },
                        },
                    }}
                />
                <Box
                    sx={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        fontSize={fontSize}
                        fontWeight={500}
                        sx={{
                            verticalAlign: 'middle',
                        }}
                    >
                        {`${Math.round(value)}%`}
                    </Typography>
                </Box>
            </Box>
            {(title || text) && (
                <Stack gap={0.5}>
                    {text && (
                        <Typography fontWeight={500} fontSize={14}>
                            {text}
                        </Typography>
                    )}
                    {title && (
                        <Typography fontSize={14} color={'#809FB8'}>
                            {title}
                        </Typography>
                    )}
                </Stack>
            )}
        </Stack>
    );
};

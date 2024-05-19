import { Box, Stack, Typography } from '@mui/material';

export const TripsItem = ({ color = 'secondary.main' }) => {
    return (
        <Box
            component={'button'}
            display={'flex'}
            type={'button'}
            direction={'row'}
            gap={2}
            alignItems={'center'}
            py={1}
            px={1.5}
            sx={{
                cursor: 'pointer',
                border: '2px dashed transparent',
                '&:focus': {
                    borderColor: 'secondary.main',
                },
            }}
        >
            <Box
                sx={{
                    width: 25,
                    height: 25,
                    border: '2px solid #DBDBDC',
                    borderRadius: '50%',
                    position: 'relative',
                    bgcolor: 'common.white',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor: color,
                    },
                }}
            />
            <Stack gap={1}>
                <Typography fontSize={12} fontWeight={500}>
                    2800 West Broadway Dr. Houston, TX 77336-3312
                </Typography>
                <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                    <Typography fontSize={12}>06-10-2023 1:23AM</Typography>
                    <Typography fontSize={12}>5hrs 48m</Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

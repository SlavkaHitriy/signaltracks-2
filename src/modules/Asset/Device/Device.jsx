import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AccessTimeFilled, CheckCircle } from '@mui/icons-material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { DefaultInput } from '@/ui/DefaultInput/index.js';

export const Device = () => {
    return (
        <>
            <Stack mb={2} direction={'row'} gap={6}>
                <Stack gap={1}>
                    <Typography>20.5</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Speed
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography>68.5 °F</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Temp
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Stack direction={'row'} gap={2}>
                        <Typography>05 hrs 56 m</Typography>
                        <AccessTimeFilled />
                    </Stack>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Trip Duration
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography>In Transit</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Movement
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography>2800 West Broadway Dr. Houston, TX 77336-3312</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Last Updated: 02/23/2024 1:56PM CST
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                flex={1}
                sx={{
                    border: '1px solid #E2E2EA',
                    borderRadius: '8px 0 0 0',
                    borderRight: 'none',
                    borderBottom: 'none',
                }}
                mb={-3}
                width={'calc(100% + 24px)'}
                overflow={'hidden'}
                bgcolor={'#F5F7FB'}
                p={3}
                position={'relative'}
            >
                <Box maxWidth={200} mb={4}>
                    <DefaultSelect defaultValue={'808654 (primary)'} name={'device'} />
                </Box>
                <Box>
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            '& > div': {
                                '& > div': {
                                    borderRight: '1px solid #E2E2EA',
                                    pl: 3,
                                    pr: 6,
                                },
                                '&:first-child': {
                                    '& > div': {
                                        pl: 0,
                                    },
                                },
                                '&:last-child': {
                                    '& > div': {
                                        borderRight: 'none',
                                        pr: 0,
                                    },
                                },
                            },
                        }}
                    >
                        <Grid item xs={5}>
                            <Stack height={'100%'}>
                                <Stack direction={'row'} gap={3} justifyContent={'space-between'} mb={4}>
                                    <Typography fontSize={14}>THRESHOLDS</Typography>
                                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                                        <CheckCircle
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                color: 'green.main',
                                            }}
                                        />
                                        <Typography fontSize={14}>Receive Alerts</Typography>
                                    </Stack>
                                </Stack>
                                <Stack gap={2} mb={8}>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Stack gap={0.5} width={90} flexShrink={0}>
                                            <Typography fontSize={14}>Temperature</Typography>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Unit: °F)
                                            </Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={3}>
                                            <DefaultInput fixedValue={'Min:'} name={'minTemperature'} />

                                            <DefaultInput fixedValue={'Max:'} name={'maxTemperature'} />
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Stack gap={0.5} width={90} flexShrink={0}>
                                            <Typography fontSize={14}>Speed</Typography>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Unit: mph)
                                            </Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={3}>
                                            <DefaultInput fixedValue={'Min:'} name={'minSpeed'} />
                                            <DefaultInput fixedValue={'Max:'} name={'maxSpeed'} />
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack mt={'auto'} gap={3}>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Device State
                                        </Typography>
                                        <Typography fontSize={14}>Online</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Serial Number
                                        </Typography>
                                        <Typography fontSize={14}>809765</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Tracker Type
                                        </Typography>
                                        <Typography fontSize={14}>Yabby3</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Battery (V)
                                        </Typography>
                                        <Typography fontSize={14}>5.45</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Firmware
                                        </Typography>
                                        <Typography fontSize={14}>12.34.3</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            HW Version
                                        </Typography>
                                        <Typography fontSize={14}>HW 4.543.</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={5}>
                            <Stack height={'100%'}>
                                <Stack direction={'row'} gap={3} justifyContent={'space-between'} mb={4}>
                                    <Typography fontSize={14}>BILLING ACTIVATION</Typography>
                                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                                        <CheckCircle
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                color: 'green.main',
                                            }}
                                        />
                                        <Typography fontSize={14}>Enabled</Typography>
                                    </Stack>
                                </Stack>
                                <Typography fontSize={14} mb={8}>
                                    Manage device billing status. hen the device is disabled location and sensor data will not
                                    update.
                                </Typography>
                                <Stack mt={'auto'} gap={3}>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Identifier
                                        </Typography>
                                        <Typography fontSize={14}>351901934084645</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Activated
                                        </Typography>
                                        <Typography fontSize={14}>11/04/23 1:13PM</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Days Active
                                        </Typography>
                                        <Typography fontSize={14}>105 days 9 hrs</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Latitude
                                        </Typography>
                                        <Typography fontSize={14}>42.4832317</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Longitude
                                        </Typography>
                                        <Typography fontSize={14}>-82.9420268</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Altitude(m)
                                        </Typography>
                                        <Typography fontSize={14}>55.23</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </>
    );
};

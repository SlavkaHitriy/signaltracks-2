import { Box, Grid, Stack, Typography } from '@mui/material';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import React, { useState } from 'react';
import { tabs } from '@/modules/Devices/data/tabs.js';
import { Tabs } from '@/ui/Tabs/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';

export const DeviceDetailsModal = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    return (
        <Stack gap={3}>
            <Stack direction={'row'} gap={3} maxWidth={500}>
                <DefaultInput helperText='Serial Number' name={'deviceDetails.serialNumber'} />
                <DefaultInput helperText='Device Type' name={'deviceDetails.deviceType'} />
            </Stack>
            <Stack direction={'row'} gap={3}>
                <Stack gap={1}>
                    <Typography color={'#A8A8A7'} fontSize={12}>
                        Battery
                    </Typography>
                    <Box
                        sx={{
                            py: 0.5,
                            px: 3,
                            border: '1px solid #24D5AA',
                            borderRadius: '5px',
                        }}
                    >
                        <Typography fontSize={14}>4.443</Typography>
                    </Box>
                </Stack>
                <Stack gap={1}>
                    <Typography color={'#A8A8A7'} fontSize={12}>
                        Status
                    </Typography>
                    <Box
                        sx={{
                            py: 0.5,
                            px: 3,
                            border: '1px solid #24D5AA',
                            borderRadius: '5px',
                        }}
                    >
                        <Typography fontSize={14}>Online</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Box>
                <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleTabChange} />
            </Box>
            <Stack gap={3} maxWidth={400}>
                {activeTab === tabs[0].value && (
                    <>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>358447171060198</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            IMEI
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>89882280666123826657</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            ICCID
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>SIGNAL TRACKS</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Vendor
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>Shipment 14 March 2024</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Batch String
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#F6F8FA',
                                borderRadius: '10px',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>07-07-2023 06:31:59</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Last Connected
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>85.2</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Product
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>1.7</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Firmware
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>33.7476884</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Last Latitude
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>-84.764517</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Last Longitude
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>None</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Linked Asset
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )}
                {activeTab === tabs[1].value && (
                    <>
                        <DefaultSelect
                            defaultValue={'6 Hours'}
                            name={'deviceDetails.expiration'}
                            helperText={'Select Expiration'}
                        />
                        <Typography fontSize={14} color={'#A0A3A6'}>
                            * Higher intervals will reduce battery life.
                        </Typography>
                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#F6F8FA',
                                borderRadius: '10px',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>07-07-2023 06:31:59</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Last Connected
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>07-07-2023 12:31:59</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Next Communication
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>Pending</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Operation Status
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500} fontSize={18}>
                                            8 hrs 23 mins
                                        </Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Next Transmission
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )}
                {activeTab === tabs[2].value && (
                    <>
                        <DefaultSelect
                            defaultValue={'6 Hours'}
                            name={'deviceDetails.interval'}
                            helperText={'Select Reporting Interval'}
                        />
                        <Typography fontSize={14} color={'#A0A3A6'}>
                            * Higher intervals will reduce battery life.
                        </Typography>
                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#F6F8FA',
                                borderRadius: '10px',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>07-07-2023 06:31:59</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Last Connected
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>07-07-2023 12:31:59</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Next Communication
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>Pending</Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Operation Status
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500} fontSize={18}>
                                            8 hrs 23 mins
                                        </Typography>
                                        <Typography fontSize={12} color={'#A0A3A6'}>
                                            Next Transmission
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )}
            </Stack>
        </Stack>
    );
};

import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import { AccessTimeFilled, Add } from '@mui/icons-material';
import React, { useState } from 'react';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { DefaultToggle } from '@/ui/DefaultToggle/DefaultToggle.jsx';
import { Tabs } from '@/ui/Tabs/index.js';
import { toolsTabs } from '@/modules/Asset/data/toolsTabs.jsx';
import { Map } from '@/components/Map/Map.jsx';

export const LocationsMap = () => {
    const [activeTab, setActiveTab] = useState(toolsTabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Stack mb={2} direction={'row'} gap={12} alignItems={'center'}>
                <Stack direction={'row'} gap={2}>
                    <ButtonBase
                        sx={{
                            py: 1,
                            px: 2,
                            border: '1px solid #E2E2EA',
                            borderRadius: '8px',
                        }}
                    >
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Typography color={'#44444F'}>Add Geofence</Typography>
                            <Add
                                sx={{
                                    color: 'secondary.main',
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        </Stack>
                    </ButtonBase>
                    <ButtonBase
                        sx={{
                            py: 1,
                            px: 2,
                            border: '1px solid #E2E2EA',
                            borderRadius: '8px',
                        }}
                    >
                        <Typography color={'#44444F'}>Share Location</Typography>
                    </ButtonBase>
                </Stack>
                <Stack direction={'row'} gap={6}>
                    <Stack direction={'row'} gap={3} alignItems={'center'}>
                        <Typography fontSize={36}>5.5</Typography>
                        <Box>
                            <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography fontWeight={700}>Hrs</Typography>
                                <Box
                                    sx={{
                                        width: 20,
                                        height: 10,
                                        borderRadius: '8px',
                                        bgcolor: 'secondary.main',
                                    }}
                                />
                            </Stack>
                            <Typography fontSize={14} color={'#696974'}>
                                Avg. Active Time
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} gap={3} alignItems={'center'}>
                        <Typography fontSize={36}>14.5</Typography>
                        <Box>
                            <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography fontWeight={700}>Hrs</Typography>
                                <Box
                                    sx={{
                                        width: 20,
                                        height: 10,
                                        borderRadius: '8px',
                                        bgcolor: 'orange.main',
                                    }}
                                />
                            </Stack>
                            <Typography fontSize={14} color={'#696974'}>
                                Avg. Idle Time
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                flex={1}
                direction={'row'}
                sx={{
                    border: '1px solid #E2E2EA',
                    borderRadius: '8px 0 0 0',
                    borderRight: 'none',
                    borderBottom: 'none',
                }}
                mb={-3}
                width={'calc(100% + 24px)'}
            >
                <Stack gap={3} p={3} borderRight={'1px solid #E2E2EA'} width={360} flexShrink={0}>
                    <Typography fontSize={18}>Location Details</Typography>
                    <Stack gap={1}>
                        <Typography fontSize={12}>188 Avenue A, New York, NY 10009</Typography>
                        <Typography fontSize={12} color={'#A0A3A6'}>
                            Last Updated: 02/23/2024 1:56PM CST
                        </Typography>
                        <Box px={2} py={1} ml={-1} width={'calc(100% + 16px)'} bgcolor={'#F6F8FA'} borderRadius={'12px'}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Stack direction={'row'} gap={2}>
                                            <Typography fontWeight={500}>05 hrs 56 m</Typography>
                                            <AccessTimeFilled />
                                        </Stack>
                                        <Typography fontSize={13} color={'#A0A3A6'}>
                                            Trip Duration
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>In Transit</Typography>
                                        <Typography fontSize={13} color={'#A0A3A6'}>
                                            Movement
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>20.5</Typography>
                                        <Typography fontSize={13} color={'#A0A3A6'}>
                                            Speed
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>68.5 °F</Typography>
                                        <Typography fontSize={13} color={'#A0A3A6'}>
                                            Temp
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack gap={0.5}>
                                        <Typography fontWeight={500}>10 m</Typography>
                                        <Typography fontSize={13} color={'#A0A3A6'}>
                                            Altitude
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                    <Typography fontSize={18}>Geofences</Typography>
                    <Stack gap={1}>
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Typography width={80} flexShrink={0} color={'#A0A3A6'} fontSize={12}>
                                Fence Name
                            </Typography>
                            <DefaultInput placeholder={'Enter name...'} name={'fenceName'} />
                        </Stack>
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Typography width={80} flexShrink={0} color={'#A0A3A6'} fontSize={12}>
                                Select Tool
                            </Typography>
                            <Stack
                                flex={1}
                                sx={{
                                    height: 40,
                                    border: '1px solid #E2E2EA',
                                    borderRadius: '6px',
                                }}
                            >
                                <Tabs data={toolsTabs} setActiveTab={handleChangeTab} activeTab={activeTab} inline small />
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Typography width={80} flexShrink={0} color={'#A0A3A6'} fontSize={12}>
                                Alerts
                            </Typography>
                            <Stack
                                direction={'row'}
                                gap={1}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                flex={1}
                                sx={{
                                    height: 40,
                                    border: '1px solid #E2E2EA',
                                    borderRadius: '6px',
                                    pl: 2,
                                    pr: 1,
                                }}
                            >
                                <Typography fontSize={14}>Activate Alerts</Typography>
                                <DefaultToggle name={'alerts'} />
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Typography width={80} flexShrink={0} color={'#A0A3A6'} fontSize={12}>
                                Send To
                            </Typography>
                            <DefaultSelect
                                sx={{
                                    minWidth: 'unset',
                                    flex: 1,
                                    '.MuiInputBase-root': {
                                        height: 40,
                                    },
                                }}
                                defaultValue={'All Users'}
                                name={'sendTo'}
                            />
                        </Stack>
                        <Stack direction={'row'} gap={1} justifyContent={'flex-end'}>
                            <ButtonBase
                                sx={{
                                    py: 1,
                                    px: 3,
                                    border: '1px solid #E2E2EA',
                                    bgcolor: '#EFEFEF',
                                    borderRadius: '5px',
                                }}
                            >
                                <Typography fontSize={14} fontWeight={700}>
                                    Cancel
                                </Typography>
                            </ButtonBase>
                            <ButtonBase
                                sx={{
                                    py: 1,
                                    px: 3,
                                    border: '1px solid #E2E2EA',
                                    bgcolor: '#FCFCFE',
                                    borderRadius: '5px',
                                }}
                            >
                                <Typography fontSize={14} fontWeight={700}>
                                    Save
                                </Typography>
                            </ButtonBase>
                        </Stack>
                    </Stack>
                </Stack>
                <Map />
            </Stack>
        </>
    );
};

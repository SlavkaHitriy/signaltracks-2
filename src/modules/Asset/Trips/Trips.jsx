import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Tabs } from '@/ui/Tabs/index.js';
import { Map } from '@/components/Map/Map.jsx';
import { Datepicker } from '@/ui/Datepicker/index.js';
import { TripsItem } from '@/modules/Asset/Trips/TripsItem.jsx';
import { playTabs } from '../data/playTabs.jsx';

export const Trips = () => {
    const [activeTab, setActiveTab] = useState(playTabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Stack mb={2} direction={'row'} gap={12} alignItems={'center'}>
                <Stack direction={'row'} gap={2}>
                    <Datepicker />
                    <Datepicker />
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
                width={'calc(100% + 24px)'}
            >
                <Box py={3} borderRight={'1px solid #E2E2EA'} width={360} flexShrink={0}>
                    <Typography px={1.5} fontSize={18} mb={2}>
                        Trips
                    </Typography>
                    <Stack position={'relative'} gap={1}>
                        <Box
                            sx={{
                                position: 'absolute',
                                width: 1,
                                height: 'calc(100% - 40px)',
                                pointerEvents: 'none',
                                left: 25.5,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                borderLeft: '2px dashed #DBDBDC',
                            }}
                        />
                        <TripsItem color={'orange.main'} />
                        <TripsItem />
                        <TripsItem />
                        <TripsItem />
                        <TripsItem />
                        <TripsItem color={'orange.main'} />
                    </Stack>
                </Box>
                <Map />
            </Stack>
            <Stack
                borderLeft={'1px solid #E2E2EA'}
                borderTop={'1px solid #E2E2EA'}
                px={3}
                py={4}
                direction={'row'}
                gap={6}
                alignItems={'center'}
                width={'calc(100% + 24px)'}
                mb={-3}
            >
                <Tabs data={playTabs} activeTab={activeTab} setActiveTab={handleChangeTab} inline />
                <Stack gap={2} flex={1}>
                    <Stack direction={'row'} position={'relative'} alignItems={'center'}>
                        <Box
                            sx={{
                                width: 15,
                                height: 15,
                                flexShrink: 0,
                                borderRadius: '50%',
                                bgcolor: 'common.white',
                                border: '2px solid #2C2E30',
                            }}
                        />
                        <Box flex={1} borderBottom={'2px dashed #DBDBDC'} />

                        <Box
                            sx={{
                                width: '15%',
                                height: 10,
                                borderRadius: '8px',
                                bgcolor: 'orange.main',
                                position: 'absolute',
                                left: '10%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        />
                        <Box
                            sx={{
                                width: '10%',
                                height: 10,
                                borderRadius: '8px',
                                bgcolor: 'secondary.main',
                                position: 'absolute',
                                left: '30%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        />
                        <Box
                            sx={{
                                width: '10%',
                                height: 10,
                                borderRadius: '8px',
                                bgcolor: 'secondary.main',
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        />
                        <Box
                            sx={{
                                width: '5%',
                                height: 10,
                                borderRadius: '8px',
                                bgcolor: 'secondary.main',
                                position: 'absolute',
                                left: '80%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        />
                    </Stack>
                    <Stack direction={'row'} gap={1} justifyContent={'space-between'} px={3}>
                        <Typography color={'#92929D'} fontSize={12}>
                            6am
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            8am
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            10am
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            12pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            2pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            4pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            6pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            8pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            10pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            12pm
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            2am
                        </Typography>
                        <Typography color={'#92929D'} fontSize={12}>
                            4am
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

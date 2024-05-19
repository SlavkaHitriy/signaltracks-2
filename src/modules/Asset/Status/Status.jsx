import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { AccessTimeFilled, ArrowForwardIos } from '@mui/icons-material';
import React, { useState } from 'react';
import { Tabs } from '@/ui/Tabs/index.js';
import { statusTabs } from '@/modules/Asset/data/statusTabs.js';
import { Datepicker } from '@/ui/Datepicker/index.js';
import { dateTabs } from '@/modules/Asset/data/dateTabs.js';
import { DateTable } from '@/modules/Asset/Status/DateTable.jsx';
import { Bar } from '@/modules/Asset/Status/Bar.jsx';
import { internalSensorsTabs } from '@/modules/Asset/data/internalSensorsTabs.js';
import { InternalTemperature } from '@/modules/Asset/Status/InternalTemperature.jsx';

export const Status = () => {
    const [activeTab, setActiveTab] = useState(statusTabs[0].value);
    const [activeDateTab, setActiveDateTab] = useState(dateTabs[0].value);
    const [activeSensorsTab, setActiveSensorsTab] = useState(internalSensorsTabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    const handleChangeDateTab = (tab) => {
        setActiveDateTab(tab);
    };

    const handleChangeSensorsTab = (tab) => {
        setActiveSensorsTab(tab);
    };

    return (
        <Stack gap={4}>
            <Stack direction={'row'} gap={6}>
                <Stack gap={1}>
                    <Typography fontWeight={500}>20.5</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Speed
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography fontWeight={500}>68.5 °F</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Temp
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Stack direction={'row'} gap={2}>
                        <Typography fontWeight={500}>05 hrs 56 m</Typography>
                        <AccessTimeFilled />
                    </Stack>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Trip Duration
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography fontWeight={500}>In Transit</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Movement
                    </Typography>
                </Stack>
                <Stack gap={1}>
                    <Typography fontWeight={500}>2800 West Broadway Dr. Houston, TX 77336-3312</Typography>
                    <Typography fontSize={13} color={'#A0A3A6'}>
                        Last Updated: 02/23/2024 1:56PM CST
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Tabs data={statusTabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
            </Box>
            {activeTab === statusTabs[0].value && (
                <>
                    <Stack direction={'row'} gap={3}>
                        <Box>
                            <Datepicker />
                        </Box>
                        <Box>
                            <Tabs data={dateTabs} activeTab={activeDateTab} setActiveTab={handleChangeDateTab} inline />
                        </Box>
                    </Stack>
                    <Stack direction={'row'} gap={6}>
                        <DateTable />
                        <Stack width={260} flexShrink={0} gap={3}>
                            <Stack gap={3}>
                                <Stack direction={'row'} gap={3} alignItems={'center'}>
                                    <Typography fontSize={36}>10.5</Typography>
                                    <Stack>
                                        <Stack direction={'row'} gap={3} alignItems={'center'}>
                                            <Typography fontWeight={700}>Hrs</Typography>
                                            <ArrowForwardIos
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    transform: 'rotate(-90deg)',
                                                    color: 'green.main',
                                                }}
                                            />
                                        </Stack>
                                        <Typography fontSize={14} color={'#696974'}>
                                            Average Active Time
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack height={100} direction={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
                                    <Bar percent={80} bgcolor={'#F1F1F5'} />
                                    <Bar percent={60} />
                                    <Bar percent={70} bgcolor={'#F1F1F5'} />
                                    <Bar percent={40} />
                                    <Bar percent={30} bgcolor={'#F1F1F5'} />
                                    <Bar percent={50} bgcolor={'#F1F1F5'} />
                                    <Bar percent={80} />
                                    <Bar percent={20} bgcolor={'#F1F1F5'} />
                                    <Bar percent={10} bgcolor={'#F1F1F5'} />
                                    <Bar percent={90} />
                                    <Bar percent={50} bgcolor={'#F1F1F5'} />
                                    <Bar percent={40} />
                                    <Bar percent={80} bgcolor={'#F1F1F5'} />
                                    <Bar percent={30} />
                                    <Bar percent={80} bgcolor={'#F1F1F5'} />
                                    <Bar percent={90} bgcolor={'#F1F1F5'} />
                                    <Bar percent={100} />
                                    <Bar percent={30} bgcolor={'#F1F1F5'} />
                                </Stack>
                            </Stack>
                            <Stack gap={3}>
                                <Stack direction={'row'} gap={3} alignItems={'center'}>
                                    <Typography fontSize={36}>14.5</Typography>
                                    <Stack>
                                        <Stack direction={'row'} gap={3} alignItems={'center'}>
                                            <Typography fontWeight={700}>Hrs</Typography>
                                            <ArrowForwardIos
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    transform: 'rotate(90deg)',
                                                    color: 'red.main',
                                                }}
                                            />
                                        </Stack>
                                        <Typography fontSize={14} color={'#696974'}>
                                            Average Idle Time
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack height={100} direction={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
                                    <Bar percent={80} bgcolor={'#F1F1F5'} />
                                    <Bar percent={60} bgcolor={'orange.main'} />
                                    <Bar percent={70} bgcolor={'#F1F1F5'} />
                                    <Bar percent={40} bgcolor={'orange.main'} />
                                    <Bar percent={30} bgcolor={'#F1F1F5'} />
                                    <Bar percent={50} bgcolor={'#F1F1F5'} />
                                    <Bar percent={80} bgcolor={'orange.main'} />
                                    <Bar percent={20} bgcolor={'#F1F1F5'} />
                                    <Bar percent={10} bgcolor={'#F1F1F5'} />
                                    <Bar percent={90} bgcolor={'orange.main'} />
                                    <Bar percent={50} bgcolor={'#F1F1F5'} />
                                    <Bar percent={40} bgcolor={'orange.main'} />
                                    <Bar percent={80} bgcolor={'#F1F1F5'} />
                                    <Bar percent={30} bgcolor={'orange.main'} />
                                    <Bar percent={80} bgcolor={'#F1F1F5'} />
                                    <Bar percent={90} bgcolor={'#F1F1F5'} />
                                    <Bar percent={100} bgcolor={'orange.main'} />
                                    <Bar percent={30} bgcolor={'#F1F1F5'} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </>
            )}
            {activeTab === statusTabs[1].value && (
                <>
                    <Stack direction={'row'} gap={3}>
                        <Box>
                            <Datepicker />
                        </Box>
                        <Box>
                            <Tabs
                                data={internalSensorsTabs}
                                activeTab={activeSensorsTab}
                                setActiveTab={handleChangeSensorsTab}
                                inline
                            />
                        </Box>
                    </Stack>
                    <Stack direction={'row'} gap={6} alignItems={'center'}>
                        <Box flex={1}>
                            <InternalTemperature />
                        </Box>
                        <Stack width={260} flexShrink={0} gap={3}>
                            <Typography fontSize={20} fontWeight={500}>
                                Avg. Readings
                            </Typography>
                            <Stack gap={1}>
                                <Typography>68.5 °F</Typography>
                                <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography color={'#92929D'} fontSize={14}>
                                        Minimum
                                    </Typography>
                                    <LinearProgress
                                        sx={{
                                            width: 150,
                                            flexShrink: 0,
                                            borderRadius: '3px',
                                            height: 10,
                                            bgcolor: '#EFEFEF',

                                            '.MuiLinearProgress-bar': {
                                                borderRadius: '3px',
                                                bgcolor: 'secondary.main',
                                            },
                                        }}
                                        variant={'determinate'}
                                        value={20}
                                    />
                                </Stack>
                            </Stack>
                            <Stack gap={1}>
                                <Typography>88.5 °F</Typography>
                                <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography color={'#92929D'} fontSize={14}>
                                        Average
                                    </Typography>
                                    <LinearProgress
                                        sx={{
                                            width: 150,
                                            flexShrink: 0,
                                            borderRadius: '3px',
                                            height: 10,
                                            bgcolor: '#EFEFEF',

                                            '.MuiLinearProgress-bar': {
                                                borderRadius: '3px',
                                                bgcolor: 'green.main',
                                            },
                                        }}
                                        variant={'determinate'}
                                        value={20}
                                    />
                                </Stack>
                            </Stack>
                            <Stack gap={1}>
                                <Typography>168.5 °F</Typography>
                                <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography color={'#92929D'} fontSize={14}>
                                        Maximum
                                    </Typography>
                                    <LinearProgress
                                        sx={{
                                            width: 150,
                                            flexShrink: 0,
                                            borderRadius: '3px',
                                            height: 10,
                                            bgcolor: '#EFEFEF',

                                            '.MuiLinearProgress-bar': {
                                                borderRadius: '3px',
                                                bgcolor: 'red.main',
                                            },
                                        }}
                                        variant={'determinate'}
                                        value={20}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </>
            )}
        </Stack>
    );
};

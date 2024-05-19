import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Dropdown } from '@/ui/Dropdown/index.js';
import { SearchInput } from '@/components/SearchInput/index.js';
import { Link } from 'react-router-dom';
import { ArrowBackIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';
import { Groups } from '@/modules/Asset/Groups.jsx';
import { tabs } from './data/tabs.js';
import { Tabs } from '@/ui/Tabs/index.js';
import { Status } from '@/modules/Asset/Status/Status.jsx';
import { LocationsMap } from '@/modules/Asset/LocationsMap/LocationsMap.jsx';
import { Trips } from '@/modules/Asset/Trips/Trips.jsx';
import { Events } from '@/modules/Asset/Events/Events.jsx';
import { Details } from '@/modules/Asset/Details/Details.jsx';
import { Device } from '@/modules/Asset/Device/Device.jsx';
import { FormikProvider, useFormik } from 'formik';

export const Asset = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const formik = useFormik({
        initialValues: {
            fenceName: '',
            alerts: true,
            sendTo: '',
            device: '',
            minTemperature: '',
            maxTemperature: '',
            minSpeed: '',
            maxSpeed: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validateOnChange: false,
    });

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <FormikProvider value={formik}>
            <Stack width={'100%'}>
                <Stack p={3} gap={2}>
                    <Stack direction={'row'} gap={4} justifyContent={'space-between'} alignItems={'center'}>
                        <SearchInput />
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Box width={32} height={32} bgcolor={'primary.main'} borderRadius={'50%'} />
                            <Dropdown>
                                <Box>
                                    <Typography fontSize={14} fontWeight={500}>
                                        Austin Robertson
                                    </Typography>
                                    <Typography fontSize={12} color={'#696974'}>
                                        Marketing Administrator
                                    </Typography>
                                </Box>
                            </Dropdown>
                        </Stack>
                    </Stack>
                    <Box>
                        <Link to={'/asset-mapview'}>
                            <Stack
                                display={'inline-flex'}
                                direction={'row'}
                                alignItems={'center'}
                                sx={{
                                    svg: {
                                        fill: '#1E75FF',
                                    },
                                }}
                                gap={0.5}
                            >
                                <ArrowBackIos
                                    sx={{
                                        width: 16,
                                        height: 16,
                                    }}
                                />
                                <Typography color={'#1E75FF'} fontWeight={500} textTransform={'uppercase'}>
                                    Back
                                </Typography>
                            </Stack>
                        </Link>
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} gap={4} alignItems={'center'}>
                        <Stack direction={'row'} gap={6} alignItems={'center'}>
                            <Typography fontSize={20} fontWeight={500}>
                                Trailer 4482-AB
                            </Typography>
                            <Stack direction={'row'} gap={1}>
                                <Tag text={'805789'} borderColor={'green.main'} />
                                <Tag text={'In Maint.'} borderColor={'#0A00FF'} textColor={'#0A00FF'} />
                                <Tag text={'Scheduled'} textColor={'secondary.main'} />
                                <Tag text={'Damaged'} borderColor={'orange.main'} textColor={'orange.main'} />
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={1}>
                            <ButtonBase
                                sx={{
                                    py: 0.5,
                                    px: 5,
                                    border: '1px solid #E2E2EA',
                                    bgcolor: '#F6F8FA',
                                    borderRadius: '5px',
                                }}
                            >
                                <Typography fontSize={14}>Edit</Typography>
                            </ButtonBase>
                            <Groups />
                        </Stack>
                    </Stack>
                    <Box>
                        <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
                    </Box>
                </Stack>
                <Stack px={3} pb={3} pt={1} flex={1}>
                    {activeTab === 'status' && <Status />}
                    {activeTab === 'map' && <LocationsMap />}
                    {activeTab === 'trips' && <Trips />}
                    {activeTab === 'events' && <Events />}
                    {activeTab === 'details' && <Details />}
                    {activeTab === 'device' && <Device />}
                </Stack>
            </Stack>
        </FormikProvider>
    );
};

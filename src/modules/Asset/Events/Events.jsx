import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Tabs } from '@/ui/Tabs/index.js';
import { Datepicker } from '@/ui/Datepicker/index.js';
import { internalSensorsTabs } from '@/modules/Asset/data/internalSensorsTabs.js';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js';
import { eventsColumns, eventsRows } from '@/modules/Asset/data/events.jsx';

export const Events = () => {
    const [activeTab, setActiveTab] = useState(internalSensorsTabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Stack mb={2} direction={'row'} gap={4} alignItems={'center'}>
                <Stack direction={'row'} gap={2}>
                    <Datepicker />
                    <Datepicker />
                </Stack>
                <Tabs data={internalSensorsTabs} activeTab={activeTab} setActiveTab={handleChangeTab} inline />
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
                overflow={'hidden'}
            >
                <DefaultDataGrid rows={eventsRows} columns={eventsColumns} pageItems={6} pageSizeOptions={[6, 10, 20]} />
            </Stack>
        </>
    );
};

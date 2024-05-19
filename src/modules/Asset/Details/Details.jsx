import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AccessTimeFilled } from '@mui/icons-material';
import { Tabs } from '@/ui/Tabs/index.js';
import { detailsTabs } from '@/modules/Asset/data/detailsTabs.js';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js';
import { documentsColumns, documentsRows } from '@/modules/Asset/data/documents.jsx';

export const Details = () => {
    const [activeTab, setActiveTab] = useState(detailsTabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Stack mb={2} direction={'row'} gap={6}>
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
                <Box mb={4}>
                    <Tabs data={detailsTabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
                </Box>
                {activeTab === 'asset' && (
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
                            <Grid item xs={4}>
                                <Stack gap={3}>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Category
                                        </Typography>
                                        <Typography fontSize={14}>Trailer</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Type
                                        </Typography>
                                        <Typography fontSize={14}>Mobile Trailer</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Status
                                        </Typography>
                                        <Typography fontSize={14}>In Service</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            VIN
                                        </Typography>
                                        <Typography fontSize={14}>1T46546540654054045</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Manufacturer
                                        </Typography>
                                        <Typography fontSize={14}>Titan Trailer Mft.</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Model
                                        </Typography>
                                        <Typography fontSize={14}>24FT Trailer</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack gap={3}>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            USDOT#
                                        </Typography>
                                        <Typography fontSize={14}>16468406846</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            HAZMAT
                                        </Typography>
                                        <Typography fontSize={14}>4040847</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Dealer
                                        </Typography>
                                        <Typography fontSize={14}>Trailer Reseller</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Contact Name
                                        </Typography>
                                        <Typography fontSize={14}>Robert Penniwhacher</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Cellular
                                        </Typography>
                                        <Typography fontSize={14}>832-568-8989</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Assigned Group
                                        </Typography>
                                        <Typography fontSize={14}>Group 1</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack gap={3}>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Primary Device
                                        </Typography>
                                        <Stack direction={'row'} gap={3} alignItems={'center'}>
                                            <Typography fontSize={14}>16468406846</Typography>
                                            <ColorStatus code={1} />
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'} fontSize={14}>
                                            Secondary Device
                                        </Typography>
                                        <Stack direction={'row'} gap={3} alignItems={'center'}>
                                            <Typography fontSize={14}>4040847</Typography>
                                            <ColorStatus code={2} />
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {activeTab === 'documents' && (
                    <>
                        <ButtonBase
                            sx={{
                                position: 'absolute',
                                py: 1,
                                px: 3,
                                border: '1px solid #E2E2EA',
                                bgcolor: '#FCFCFE',
                                borderRadius: '5px',
                                right: 50,
                                top: 24,
                            }}
                        >
                            <Typography fontSize={14} fontWeight={700}>
                                Upload
                            </Typography>
                        </ButtonBase>
                        <Box ml={-3} width={'calc(100% + 48px)'}>
                            <DefaultDataGrid rows={documentsRows} columns={documentsColumns} disablePagination />
                        </Box>
                    </>
                )}
            </Stack>
        </>
    );
};

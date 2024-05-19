import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { DefaultCircularProgress } from '@/ui/DefaultCircularProgress/index.js';
import { ArrowIcon } from '@/assets/icons/ArrowIcon.jsx';
import { Dropdown } from '@/ui/Dropdown/index.js';
import { SearchInput } from '@/components/SearchInput/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js';
import { columns, rows } from './data/events.jsx';
import { FormikProvider, useFormik } from 'formik';

export const Events = () => {
    const formik = useFormik({
        initialValues: {
            search: '',
            groups: '',
            status: '',
            devices: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validateOnChange: false,
    });

    return (
        <FormikProvider value={formik}>
            <Stack width={'100%'}>
                <Stack p={3} gap={2}>
                    <Stack direction={'row'} gap={10} alignItems={'center'} mb={3}>
                        <Stack direction={'row'} alignItems={'center'} gap={5}>
                            <Stack>
                                <Typography fontWeight={500} letterSpacing={1.7} mb={0.5} textTransform={'uppercase'}>
                                    TOTAL EVENTS
                                </Typography>
                                <Stack mb={1} direction={'row'} gap={1}>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        width={24}
                                        height={24}
                                        bgcolor={'green.light'}
                                        borderRadius={'50%'}
                                        sx={{
                                            svg: {
                                                fill: '#1AD598',
                                                width: 10,
                                                height: 10,
                                            },
                                        }}
                                    >
                                        <ArrowIcon />
                                    </Box>
                                    <Typography fontWeight={500} fontSize={16} color={'green.main'}>
                                        +16,24 %
                                    </Typography>
                                </Stack>
                                <Typography fontWeight={500} fontSize={34}>
                                    250
                                </Typography>
                                <Typography textTransform={'uppercase'} color={'#809FB8'}>
                                    LAST 30 DAYS
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box height={100} width={'1px'} bgcolor={'#E1E3E8'} flexShrink={0} />
                        <Stack gap={2} flex={1}>
                            <Stack
                                sx={{
                                    transform: 'translateY(-12px)',
                                }}
                                direction={'row'}
                                gap={3}
                                justifyContent={'flex-end'}
                                alignItems={'center'}
                            >
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
                            <Stack direction={'row'} gap={5}>
                                <DefaultCircularProgress value={46} text={'92,980'} title={'Battery'} />
                                <DefaultCircularProgress value={74} text={'28,546'} title={'Speed'} color={'#3DD598'} />
                                <DefaultCircularProgress value={14} text={'14,008'} title={'Temp'} color={'#FF974A'} />
                                <DefaultCircularProgress value={14} text={'14,008'} title={'Shock'} color={'#FF974A'} />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} gap={2}>
                        <SearchInput name={'search'} />
                        <Box maxWidth={200} width={'100%'}>
                            <DefaultSelect defaultValue={'Groups'} name={'groups'} />
                        </Box>
                        <Box maxWidth={200} width={'100%'}>
                            <DefaultSelect defaultValue={'Status'} name={'status'} />
                        </Box>
                        <Box maxWidth={200} width={'100%'}>
                            <DefaultSelect defaultValue={'Devices'} name={'devices'} />
                        </Box>
                    </Stack>
                </Stack>
                <Stack flex={1} borderTop={'1px solid #E1E3E8'} direction={'row'}>
                    <DefaultDataGrid pageItems={10} pageSizeOptions={[10, 25, 50]} rows={rows} columns={columns} />
                </Stack>
            </Stack>
        </FormikProvider>
    );
};

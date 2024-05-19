import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DefaultCircularProgress } from '@/ui/DefaultCircularProgress/index.js';
import { ArrowIcon } from '@/assets/icons/ArrowIcon.jsx';
import { Dropdown } from '@/ui/Dropdown/index.js';
import { SearchInput } from '@/components/SearchInput/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { PlusIcon } from '@/assets/icons/PlusIcon.jsx';
import { AssetItem } from '@/modules/AssetMapView/AssetItem.jsx';
import { items } from './data/items.js';
import { Map } from '@/components/Map/Map.jsx';
import { Fullscreen, FullscreenExit } from '@mui/icons-material';
import { useSetRecoilState } from 'recoil';
import { sidebarOpened } from '@/core/store/index.js';
import { MapView } from '@/components/Map/MapView.jsx';
import { useNavigate } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';

export const AssetMapView = () => {
    const navigate = useNavigate();
    const [isFullMap, setIsFullMap] = useState(false);
    const setIsOpenedSidebar = useSetRecoilState(sidebarOpened);
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

    useEffect(() => {
        setIsOpenedSidebar(!isFullMap);
    }, [isFullMap]);

    return (
        <FormikProvider value={formik}>
            <Stack width={'100%'}>
                <Stack p={3} gap={2}>
                    <Stack direction={'row'} gap={10} alignItems={'center'} mb={3}>
                        <Stack direction={'row'} alignItems={'center'} gap={5}>
                            <DefaultCircularProgress size={120} value={62} fontSize={32} color={'#0090FF'} />
                            <Stack>
                                <Typography fontWeight={500} letterSpacing={1.7} mb={0.5} textTransform={'uppercase'}>
                                    TOTAL ASSETS
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
                                justifyContent={'space-between'}
                                alignItems={'center'}
                            >
                                <Typography fontWeight={500} letterSpacing={1.7} textTransform={'uppercase'}>
                                    TOP GROUPS
                                </Typography>
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
                                <DefaultCircularProgress value={46} text={'92,980'} title={'Maintenance'} />
                                <DefaultCircularProgress value={74} text={'28,546'} title={'Ready'} color={'#3DD598'} />
                                <DefaultCircularProgress value={14} text={'14,008'} title={'Scheduled'} color={'#FF974A'} />
                                <DefaultCircularProgress value={14} text={'14,008'} title={'Unknown'} color={'#FF974A'} />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} gap={2}>
                        <SearchInput name={'search'} />
                        <Box maxWidth={200} width={'100%'}>
                            <DefaultSelect name={'groups'} defaultValue={'Groups'} />
                        </Box>
                        <Box maxWidth={200} width={'100%'}>
                            <DefaultSelect name={'status'} defaultValue={'Status'} />
                        </Box>
                        <Box maxWidth={200} width={'100%'}>
                            <DefaultSelect name={'devices'} defaultValue={'Devices'} />
                        </Box>
                        <ButtonBase
                            sx={{
                                height: 30,
                                px: 2,
                                py: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                bgcolor: 'secondary.main',
                                borderRadius: '6px',
                            }}
                            onClick={() => navigate('/asset-new')}
                        >
                            <PlusIcon />
                            <Typography fontSize={14} color={'common.white'}>
                                New Asset
                            </Typography>
                        </ButtonBase>
                    </Stack>
                </Stack>
                <Stack flex={1} borderTop={'1px solid #E1E3E8'} direction={'row'}>
                    <Box
                        width={isFullMap ? 0 : 350}
                        flexShrink={0}
                        borderRight={'1px solid #E1E3E8'}
                        overflow={'hidden'}
                        sx={{
                            transition: 'all 0.15s ease',
                        }}
                    >
                        {items.map((item, index) => (
                            <AssetItem
                                key={`asset-item-${index}`}
                                title={item.title}
                                temp={item.temp}
                                speed={item.speed}
                                tags={item.tags}
                            />
                        ))}
                    </Box>
                    <Box flex={1} overflow={'hidden'} position={'relative'}>
                        <ButtonBase
                            onClick={() => setIsFullMap(!isFullMap)}
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                zIndex: 1,
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'primary.main',
                                borderRadius: '50%',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            }}
                        >
                            {isFullMap && (
                                <FullscreenExit
                                    sx={{
                                        color: 'common.white',
                                        transform: 'translateX(1px)',
                                    }}
                                />
                            )}
                            {!isFullMap && (
                                <Fullscreen
                                    sx={{
                                        color: 'common.white',
                                        transform: 'translateX(1px)',
                                    }}
                                />
                            )}
                        </ButtonBase>
                        <MapView />
                    </Box>
                </Stack>
            </Stack>
        </FormikProvider>
    );
};

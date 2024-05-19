import logo from '@/assets/images/logo.svg';
import logoSmall from '@/assets/images/logo-small.svg';
import { SidebarItem } from '@/components/Sidebar/SidebarItem';
import { theme } from '@/core/theme/theme';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { mainMenu, systemMenu } from './data/menu';
import { BurgerIcon } from '@/assets/icons/BurgerIcon.jsx';
import { useRecoilState } from 'recoil';
import { sidebarOpened } from '@/core/store/index.js';

export const Sidebar = () => {
    const [isOpened, setIsOpened] = useRecoilState(sidebarOpened);

    const toggleSidebar = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <Stack
            component={'aside'}
            width={isOpened ? 250 : 120}
            flexShrink={0}
            bgcolor={'primary.dark'}
            boxShadow={theme.shadows[1]}
            position={'relative'}
            zIndex={11}
            sx={{
                transition: 'all 0.3s ease',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    width: '4px',
                    bgcolor: 'grey.400',
                },
            }}
        >
            <Box
                position={'absolute'}
                top={isOpened ? 28 : 16}
                right={16}
                width={24}
                height={16}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={toggleSidebar}
                sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    svg: {
                        width: 16,
                        height: 10,
                        fill: isOpened ? '#92929D' : '#fff',
                    },
                }}
            >
                <BurgerIcon />
            </Box>
            <Box
                p={isOpened ? 3 : 1.5}
                sx={{
                    transition: 'all 0.3s ease',
                }}
            >
                <Box
                    width={isOpened ? 125 : 24}
                    height={24}
                    mb={1.5}
                    sx={{
                        img: {
                            width: '100%',
                            objectFit: 'contain',
                        },
                    }}
                >
                    <Link to={'/'}>
                        {isOpened && <img src={logo} alt='logo' />}
                        {!isOpened && <img src={logoSmall} alt='logo' />}
                    </Link>
                </Box>
            </Box>
            <Stack spacing={3}>
                <Box
                    px={isOpened ? 3 : 1.5}
                    sx={{
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Typography
                        color={'#696974'}
                        fontSize={14}
                        textTransform={'uppercase'}
                        fontWeight={700}
                        fontFamily={'"Poppins", sans-serif'}
                        textAlign={!isOpened && 'center'}
                    >
                        Main
                    </Typography>
                </Box>
                <Stack mb={3} spacing={2.5}>
                    {mainMenu.map((item) => (
                        <SidebarItem isOpened={isOpened} key={item.title} data={item} />
                    ))}
                </Stack>
            </Stack>
            <Stack mt={12} spacing={3}>
                <Box
                    px={isOpened ? 3 : 1.5}
                    sx={{
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Typography
                        color={'#696974'}
                        fontSize={14}
                        textTransform={'uppercase'}
                        fontWeight={700}
                        fontFamily={'"Poppins", sans-serif'}
                        textAlign={!isOpened && 'center'}
                    >
                        HELP
                    </Typography>
                </Box>
                <Stack mb={3} spacing={2.5}>
                    {systemMenu.map((item) => (
                        <SidebarItem isOpened={isOpened} key={item.title} data={item} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

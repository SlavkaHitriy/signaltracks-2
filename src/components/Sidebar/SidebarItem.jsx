import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorStatus } from '@/ui/ColorStatus/index.js';

export const SidebarItem = ({ data, isOpened }) => {
    return (
        <>
            <NavLink to={data.link}>
                {({ isActive }) => (
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={!isOpened && 'center'}
                        gap={2}
                        position={'relative'}
                        px={isOpened ? 3 : 1.5}
                        py={1}
                        sx={{
                            pointerEvents: isActive ? 'none' : 'auto',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                svg: {
                                    fill: '#fff',
                                },
                            },
                        }}
                    >
                        {isActive && (
                            <Box
                                position={'absolute'}
                                left={0}
                                height={'100%'}
                                bgcolor={'common.white'}
                                width={3}
                                borderRadius={'0 13px 13px 0'}
                            />
                        )}
                        <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            width={20}
                            height={20}
                            sx={{
                                svg: {
                                    width: 20,
                                    height: 20,
                                    fill: isActive ? '#fff' : '#B5B5BE',
                                    transition: 'all 0.15s ease',
                                },
                            }}
                        >
                            {data.icon}
                        </Stack>
                        <Box
                            sx={{
                                transition: 'all 0.15s ease',
                                transitionDelay: isOpened ? '1s' : '0s',
                                display: isOpened ? 'block' : 'none',
                                height: isOpened ? '20px' : 0,
                            }}
                        >
                            <Typography
                                sx={{
                                    transform: isActive ? 'translate(3px)' : 'unset',
                                    transition: 'all 0.15s ease',
                                }}
                                color={'common.white'}
                                fontWeight={isActive ? 700 : 400}
                                fontSize={14}
                                whiteSpace={'nowrap'}
                            >
                                {data.title}
                            </Typography>
                        </Box>
                        {data.statusCode && !isOpened && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 'calc(50% + 4px)',
                                    top: 4,
                                }}
                            >
                                <ColorStatus code={data.statusCode} />
                            </Box>
                        )}
                        {isOpened && data.notificationsCount && (
                            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                {data.statusCode && <ColorStatus code={data.statusCode} />}
                                <Box px={2} py={0.5} border={'2px solid'} borderColor={'common.white'} borderRadius={'24px'}>
                                    <Typography fontSize={12} color={'common.white'} lineHeight={1}>
                                        {data.notificationsCount}
                                    </Typography>
                                </Box>
                            </Stack>
                        )}
                    </Stack>
                )}
            </NavLink>
        </>
    );
};

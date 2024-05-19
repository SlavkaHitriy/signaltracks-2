import { Box, Stack, Typography } from '@mui/material';

export const Tabs = ({ data, activeTab, setActiveTab, inline, small }) => {
    return (
        <>
            {!inline && (
                <Stack display={'inline-flex'} direction={'row'} borderBottom={'1px solid #E1E3E8'}>
                    {data?.map((item, idx) => {
                        const isActive = item.value === activeTab;

                        return (
                            <Stack
                                pt={1}
                                pb={1}
                                px={3}
                                sx={{
                                    cursor: 'pointer',
                                }}
                                key={idx}
                                position={'relative'}
                                onClick={() => setActiveTab(item.value)}
                            >
                                <Typography
                                    fontSize={14}
                                    fontWeight={isActive ? 700 : 400}
                                    color={isActive ? 'secondary.main' : 'primary.main'}
                                >
                                    {item.title}
                                </Typography>
                                {isActive && (
                                    <Box
                                        width={'100%'}
                                        height={3}
                                        bgcolor={'secondary.main'}
                                        position={'absolute'}
                                        bottom={0}
                                        left={0}
                                    />
                                )}
                            </Stack>
                        );
                    })}
                </Stack>
            )}

            {inline && (
                <Stack
                    display={small ? 'flex' : 'inline-flex'}
                    direction={'row'}
                    border={'1px solid #F1F1F5'}
                    p={'3px'}
                    bgcolor={'#FCFCFE'}
                    height={small ? '100%' : 'auto'}
                    sx={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    {data?.map((item, idx) => {
                        const isActive = item.value === activeTab;

                        return (
                            <Stack
                                pt={small ? 0 : 1}
                                pb={small ? 0 : 1}
                                height={small ? '100%' : 'auto'}
                                px={small ? 1 : 2}
                                sx={{
                                    cursor: 'pointer',
                                }}
                                key={idx}
                                direction={item.isIconRight ? 'row-reverse' : 'row'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                flex={small ? 1 : 'unset'}
                                gap={1}
                                position={'relative'}
                                onClick={() => setActiveTab(item.value)}
                                bgcolor={isActive ? 'common.white' : 'transparent'}
                                borderRadius={'8px'}
                                boxShadow={isActive ? '0px 2px 6px rgba(146, 146, 157, 0.07)' : 'none'}
                            >
                                {item?.icon && (
                                    <Stack
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        sx={{
                                            svg: {
                                                width: 16,
                                                height: 16,
                                            },
                                        }}
                                    >
                                        {item.icon}
                                    </Stack>
                                )}
                                <Typography
                                    fontSize={14}
                                    fontWeight={isActive ? 700 : 400}
                                    color={isActive ? 'secondary.main' : 'primary.main'}
                                >
                                    {item.title}
                                </Typography>
                            </Stack>
                        );
                    })}
                </Stack>
            )}
        </>
    );
};

import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import React from 'react';

export const Modal = ({ isOpened, children, title, onClose }) => {
    return (
        isOpened && (
            <Stack
                px={4}
                pt={3}
                pb={2}
                gap={4}
                overflowY={'auto'}
                minWidth={'700px'}
                height={'750px'}
                maxHeight={'calc(100vh - 100px)'}
                maxWidth={'700px'}
                position={'fixed'}
                zIndex={10}
                sx={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    overflowY: 'auto',
                    borderRadius: '10px',
                    bgcolor: 'common.white',
                    border: '1px solid #D5D5D5',
                }}
            >
                <Typography fontSize={18}>{title}</Typography>
                <Box flex={1}>{children}</Box>
                <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                    <ButtonBase
                        sx={{
                            py: 1,
                            px: 3,
                            border: '1px solid #FF3941',
                            bgcolor: 'common.white',
                            borderRadius: '5px',
                        }}
                        onClick={onClose}
                    >
                        <Typography fontSize={14} fontWeight={700}>
                            Delete
                        </Typography>
                    </ButtonBase>
                    <Stack direction={'row'} gap={2}>
                        <ButtonBase
                            sx={{
                                py: 1,
                                px: 3,
                                bgcolor: 'primary.main',
                                borderRadius: '5px',
                            }}
                            onClick={onClose}
                        >
                            <Typography fontSize={14} fontWeight={700} color={'common.white'}>
                                Cancel
                            </Typography>
                        </ButtonBase>
                        <ButtonBase
                            sx={{
                                py: 1,
                                px: 3,
                                bgcolor: '#EFEFEF',
                                borderRadius: '5px',
                            }}
                            onClick={onClose}
                        >
                            <Typography fontSize={14} fontWeight={700}>
                                Save
                            </Typography>
                        </ButtonBase>
                    </Stack>
                </Stack>
            </Stack>
        )
    );
};

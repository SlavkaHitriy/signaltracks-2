import { Box, Checkbox, FormControlLabel, FormGroup, Menu, Stack, Typography } from '@mui/material';
import { Dropdown } from '@/ui/Dropdown/index.js';
import React, { useState } from 'react';
import { ArrowIcon } from '@/assets/icons/ArrowIcon.jsx';
import { ArrowForwardIos } from '@mui/icons-material';
import styles from '@/ui/Dropdown/index.module.scss';
import { ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.jsx';

export const Groups = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Stack>
                <Stack
                    onClick={handleClick}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={1}
                    width={200}
                    sx={{
                        py: 0.5,
                        px: 2,
                        border: '1px solid #E2E2EA',
                        bgcolor: open ? 'common.white' : '#F6F8FA',
                        borderBottom: open ? 'none' : '1px solid #E2E2EA',
                        borderRadius: open ? '5px 5px 0 0' : '5px',
                        cursor: 'pointer',
                    }}
                >
                    <Typography fontSize={14}>Groups</Typography>
                    <ArrowForwardIos
                        sx={{
                            width: 16,
                            height: 16,
                            transform: 'rotate(90deg)',
                        }}
                    />
                </Stack>
                <Menu
                    id='groups'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        sx: {},
                    }}
                    PaperProps={{
                        sx: {
                            boxShadow: 'unset',
                            borderRadius: '0 0 5px 5px',
                            border: '1px solid #E2E2EA',
                            borderTop: 'none',
                            width: 200,
                        },
                    }}
                >
                    <FormGroup
                        sx={{
                            '.MuiFormControlLabel-label': {
                                color: '#696974',
                                fontSize: 14,
                            },
                            '.MuiCheckbox-root': {
                                color: '#B5B5BE',

                                '&.Mui-checked': {
                                    color: '#44444F',
                                },
                            },
                        }}
                    >
                        <Stack px={2}>
                            <FormControlLabel control={<Checkbox />} label='All Groups' />
                            <FormControlLabel control={<Checkbox defaultChecked />} label='In Maintenance' />
                            <FormControlLabel control={<Checkbox />} label='Ready' />
                            <FormControlLabel control={<Checkbox />} label='In Inspection' />
                            <FormControlLabel control={<Checkbox defaultChecked />} label='Scheduled' />
                            <FormControlLabel control={<Checkbox />} label='Damaged' />
                        </Stack>
                    </FormGroup>
                </Menu>
            </Stack>
        </>
    );
};

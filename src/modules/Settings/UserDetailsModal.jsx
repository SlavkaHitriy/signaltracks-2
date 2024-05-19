import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import React from 'react';

export const UserDetailsModal = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <DefaultInput helperText='First Name' name={'userDetails.firstName'} />
            </Grid>
            <Grid item xs={4}>
                <DefaultInput helperText='Last Name' name={'userDetails.lastName'} />
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <DefaultSelect
                    sx={{
                        '.MuiInputBase-root': {
                            height: 40,
                        },
                    }}
                    helperText='Role'
                    name={'userDetails.role'}
                    defaultValue={'Admin'}
                />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect
                    sx={{
                        '.MuiInputBase-root': {
                            height: 40,
                        },
                    }}
                    helperText='Status'
                    name={'userDetails.status'}
                />
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <DefaultInput helperText='Mobile' name={'userDetails.mobile'} />
            </Grid>
            <Grid item xs={8}>
                <DefaultInput helperText='Email' name={'userDetails.email'} />
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        height: '1px',
                        width: '100%',
                        borderTop: '1px dashed #D5D5D5',
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <DefaultInput helperText='Password' type={'password'} name={'userDetails.password'} />
            </Grid>
            <Grid item xs={4}>
                <DefaultInput helperText='Confirm Password' type={'password'} name={'userDetails.confirmPassword'} />
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12}>
                <Box
                    sx={{
                        height: '1px',
                        width: '100%',
                        borderTop: '1px dashed #D5D5D5',
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography color={'#A8A8A7'} fontSize={12} mb={2}>
                    Invitation Email
                </Typography>
                <ButtonBase
                    sx={{
                        py: 1,
                        px: 3,
                        bgcolor: '#EFEFEF',
                        borderRadius: '5px',
                    }}
                >
                    <Typography fontSize={14} fontWeight={700}>
                        Send
                    </Typography>
                </ButtonBase>
            </Grid>
        </Grid>
    );
};

import { Box, ButtonBase, Checkbox, FormGroup, Grid, Stack, Typography } from '@mui/material';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import React from 'react';
import { useFormikContext } from 'formik';

export const GroupDetailsModal = () => {
    const formik = useFormikContext();

    return (
        <Stack gap={3} maxWidth={400}>
            <DefaultInput helperText='Group Name' name={'groupDetails.groupName'} />
            <DefaultSelect
                sx={{
                    '.MuiInputBase-root': {
                        height: 40,
                    },
                }}
                helperText='Status'
                name={'groupDetails.status'}
            />
            <DefaultInput helperText='Description' name={'groupDetails.description'} />
            <Stack gap={2}>
                <Typography color={'#A8A8A7'} fontSize={12}>
                    Select a group color
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color1}
                                name={'groupDetails.groupColor.color1'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#FC5308',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color2}
                                name={'groupDetails.groupColor.color2'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#0246FE',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color3}
                                name={'groupDetails.groupColor.color3'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#FCC267',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color4}
                                name={'groupDetails.groupColor.color4'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#6790FE',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color5}
                                name={'groupDetails.groupColor.color5'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#F9BC02',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color6}
                                name={'groupDetails.groupColor.color6'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#3E02A4',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color7}
                                name={'groupDetails.groupColor.color7'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#FFFE32',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color8}
                                name={'groupDetails.groupColor.color8'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#8602B0',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color9}
                                name={'groupDetails.groupColor.color9'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#D0E92B',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color10}
                                name={'groupDetails.groupColor.color10'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#A7194B',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color11}
                                name={'groupDetails.groupColor.color11'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#66B132',
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction={'row'} gap={1} alignItems={'center'} ml={-1.5}>
                            <Checkbox
                                checked={formik.values.groupDetails.groupColor.color12}
                                name={'groupDetails.groupColor.color12'}
                                onChange={formik.handleChange}
                            />
                            <Box
                                sx={{
                                    width: 45,
                                    height: 23,
                                    borderRadius: '6px',
                                    bgcolor: '#FF3941',
                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

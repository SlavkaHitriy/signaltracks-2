import { Box, ButtonBase, Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { tabs } from './data/tabs.js';
import { Dropdown } from '@/ui/Dropdown/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import { CheckCircle } from '@mui/icons-material';
import { DefaultToggle } from '@/ui/DefaultToggle/DefaultToggle.jsx';
import { FormikProvider, useFormik } from 'formik';
import { object, string } from 'yup';

export const AssetNew = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const assetNewValidationSchema = object({
        setupDetails: object({
            assetName: string().required('Asset name is required'),
        }),
    });
    const formik = useFormik({
        validationSchema: assetNewValidationSchema,
        initialValues: {
            setupDetails: {
                assetName: 'Asset name',
                category: '',
                type: '',
                allGroups: false,
                inMaintenance: true,
                ready: false,
                inInspection: false,
                scheduled: true,
                damaged: false,
            },
            assetDetails: {
                manufacturer: '',
                model: '',
                vinNumber: '',
                usdot: '',
                dealer: '',
                length: '',
                weightCapacity: '',
                description: '',
            },
            contactDetails: {
                enabled: true,
                firstName: '',
                lastName: '',
                department: '',
                title: '',
                email: '',
                cellular: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipCode: '',
            },
            trackersDevices: {
                trackerType: '',
                serialNumber: '',
                battery: '',
                minTemperature: '',
                maxTemperature: '',
                minSpeed: '',
                maxSpeed: '',
                enabled: true,
            },
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validateOnChange: true,
        validateOnMount: true,
        validateOnBlur: true,
    });

    const goToNextTab = () => {
        const activeTabIndex = tabs.findIndex((tab) => tab.value === activeTab);

        if (activeTabIndex < tabs.length - 1) {
            setActiveTab(tabs[activeTabIndex + 1].value);
        }
    };

    const goToPrevTab = () => {
        const activeTabIndex = tabs.findIndex((tab) => tab.value === activeTab);

        if (activeTabIndex > 0) {
            setActiveTab(tabs[activeTabIndex - 1].value);
        }
    };

    return (
        <FormikProvider value={formik}>
            <Stack flex={1} p={3} gap={3} overflow={'hidden'}>
                <Stack direction={'row'} gap={3} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography textTransform={'uppercase'}>ASSET SETUP</Typography>
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
                <Typography>Follow these quick steps to setup or edit an asset in the system.</Typography>
                <Stack direction={'row'} overflow={'hidden'} width={'calc(100% + 24px)'}>
                    {tabs.map((tab, idx) => (
                        <Stack
                            direction={'row'}
                            gap={1}
                            key={tab.value}
                            px={2}
                            py={1}
                            border={'1px solid #E2E2EA'}
                            borderRight={idx === tabs.length - 1 ? '1px solid #E2E2EA' : 'none'}
                            width={'25%'}
                            position={'relative'}
                            sx={{
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '0',
                                    left: 0,
                                    width: '100%',
                                    height: 3,
                                    bgcolor: 'secondary.main',
                                    display: activeTab === tab.value ? 'block' : 'none',
                                },
                            }}
                        >
                            <Typography>{idx + 1}.</Typography>
                            <Stack gap={0.5} overflow={'hidden'} flex={1}>
                                <Stack direction={'row'} gap={1} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography>{tab.title}</Typography>
                                    {tabs.findIndex((tab) => tab.value === activeTab) !== idx &&
                                        tabs.findIndex((tab) => tab.value === activeTab) > idx && (
                                            <CheckCircle
                                                sx={{
                                                    width: 24,
                                                    height: 24,
                                                    color: 'green.main',
                                                }}
                                            />
                                        )}
                                </Stack>
                                <Typography
                                    fontSize={12}
                                    color={'#AAB0BC'}
                                    overflow={'hidden'}
                                    whiteSpace={'nowrap'}
                                    textOverflow={'ellipsis'}
                                >
                                    {tab.text}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                    <Stack
                        py={1}
                        px={5}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderTop={'1px solid #E2E2EA'}
                        borderBottom={'1px solid #E2E2EA'}
                    >
                        <ButtonBase
                            sx={{
                                py: 1,
                                px: 3,
                                border: '1px solid #E2E2EA',
                                bgcolor: '#FCFCFE',
                                borderRadius: '5px',
                            }}
                        >
                            <Typography color={'secondary.main'} fontSize={14} fontWeight={700} whiteSpace={'nowrap'}>
                                Save & Close
                            </Typography>
                        </ButtonBase>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={3} justifyContent={'space-between'} alignItems={'flex-start'}>
                    {activeTab === tabs[0].value && (
                        <Stack gap={1}>
                            <Typography>Basic Setup Details</Typography>
                            <Typography fontSize={14} color={'#AAB0BC'}>
                                Enter the basic details of the asset including it’s desired name, category and type.
                            </Typography>
                        </Stack>
                    )}
                    {activeTab === tabs[1].value && (
                        <Stack gap={1}>
                            <Typography>Asset Details</Typography>
                            <Typography fontSize={14} color={'#AAB0BC'}>
                                Enter the applicable asset details and description.
                            </Typography>
                        </Stack>
                    )}
                    {activeTab === tabs[2].value && (
                        <Stack
                            direction={'row'}
                            gap={1}
                            alignItems={'flex-end'}
                            justifyContent={'space-between'}
                            maxWidth={650}
                            width={'100%'}
                        >
                            <Stack gap={1}>
                                <Typography>Contact Details</Typography>
                                <Typography fontSize={14} color={'#AAB0BC'}>
                                    Enter the applicable contact details for this asset.
                                </Typography>
                            </Stack>
                            <Stack direction={'row'} gap={1} alignItems={'center'} mb={-1}>
                                <Typography fontSize={14}>Contact Details</Typography>
                                <DefaultToggle name={'contactDetails.enabled'} />
                            </Stack>
                        </Stack>
                    )}
                    {activeTab === tabs[3].value && (
                        <Stack gap={1}>
                            <Typography>Device Details & Settings</Typography>
                            <Typography fontSize={14} color={'#AAB0BC'}>
                                Enter the basic details of the asset including it’s desired name, category and type.
                            </Typography>
                        </Stack>
                    )}
                    <Stack direction={'row'} gap={1}>
                        <ButtonBase
                            sx={{
                                py: 1,
                                px: 3,
                                border: '1px solid #E2E2EA',
                                bgcolor: '#E2E2EA',
                                borderRadius: '5px',
                            }}
                        >
                            <Typography fontSize={14}>Cancel</Typography>
                        </ButtonBase>
                        <ButtonBase
                            sx={{
                                py: 1,
                                px: 3,
                                border: '1px solid #E2E2EA',
                                borderRadius: '5px',
                                bgcolor: tabs.findIndex((tab) => tab.value === activeTab) === 0 && '#f0f0f3',
                            }}
                            disabled={tabs.findIndex((tab) => tab.value === activeTab) === 0}
                            onClick={goToPrevTab}
                        >
                            <Typography fontSize={14} color={tabs.findIndex((tab) => tab.value === activeTab) === 0 && '#9a9aa4'}>
                                Back
                            </Typography>
                        </ButtonBase>
                        <ButtonBase
                            sx={{
                                py: 1,
                                px: 3,
                                border: '1px solid #E2E2EA',
                                borderRadius: '5px',
                                bgcolor: tabs.findIndex((tab) => tab.value === activeTab) === tabs.length - 1 && '#f0f0f3',
                            }}
                            onClick={goToNextTab}
                            disabled={tabs.findIndex((tab) => tab.value === activeTab) === tabs.length - 1}
                        >
                            <Typography
                                fontSize={14}
                                color={tabs.findIndex((tab) => tab.value === activeTab) === tabs.length - 1 && '#9a9aa4'}
                            >
                                Next
                            </Typography>
                        </ButtonBase>
                    </Stack>
                </Stack>
                {tabs[0].value === activeTab && (
                    <Box bgcolor={'#FAFBFD'} px={3} py={2} flex={1}>
                        <Stack gap={3} maxWidth={650}>
                            <Box>
                                <Grid spacing={3} container>
                                    <Grid xs={6} item>
                                        <Box position={'relative'}>
                                            <DefaultInput
                                                helperText={'Asset Name'}
                                                sx={{
                                                    '& .MuiInputBase-input': {
                                                        pr: 6,
                                                    },
                                                }}
                                                name={'setupDetails.assetName'}
                                            />
                                            <CheckCircle
                                                sx={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 24,
                                                    width: 30,
                                                    height: 30,
                                                    color: 'green.main',
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Box
                                            position={'relative'}
                                            height={'100%'}
                                            display={'flex'}
                                            alignItems={'flex-end'}
                                            pb={0.5}
                                        >
                                            <Typography color={'#AAB0BC'} fontSize={14}>
                                                Asset Name is Available
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Box position={'relative'}>
                                            <DefaultSelect
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 40,
                                                    },
                                                }}
                                                defaultValue={'Category'}
                                                helperText={'Category'}
                                                name={'setupDetails.category'}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Box position={'relative'}>
                                            <DefaultSelect
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 40,
                                                    },
                                                }}
                                                defaultValue={'Type'}
                                                helperText={'Type'}
                                                name={'setupDetails.type'}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box height={'1px'} bgcolor={'#E2E2EA'} />
                            <Stack gap={1}>
                                <Typography>Groups</Typography>
                                <Typography fontSize={12} color={'#AAB0BC'}>
                                    Assign to one or more groups to help manage your assets. o Edit Groups to go Settings &gt;
                                    Groups.
                                </Typography>
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Configured Groups</Typography>
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
                                    <Stack px={2} ml={-2}>
                                        <Stack
                                            direction={'row'}
                                            gap={3}
                                            maxWidth={300}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <FormControlLabel
                                                name={'setupDetails.allGroups'}
                                                onChange={formik.handleChange}
                                                control={<Checkbox checked={formik.values.setupDetails.allGroups} />}
                                                label='All Groups'
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            gap={3}
                                            maxWidth={250}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <FormControlLabel
                                                name={'setupDetails.inMaintenance'}
                                                onChange={formik.handleChange}
                                                control={<Checkbox checked={formik.values.setupDetails.inMaintenance} />}
                                                label='In Maintenance'
                                            />
                                            <Box width={45} height={23} bgcolor={'secondary.main'} borderRadius={'5px'} />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            gap={3}
                                            maxWidth={250}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <FormControlLabel
                                                name={'setupDetails.ready'}
                                                onChange={formik.handleChange}
                                                control={<Checkbox checked={formik.values.setupDetails.ready} />}
                                                label='Ready'
                                            />
                                            <Box width={45} height={23} bgcolor={'green.main'} borderRadius={'5px'} />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            gap={3}
                                            maxWidth={250}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <FormControlLabel
                                                name={'setupDetails.inInspection'}
                                                onChange={formik.handleChange}
                                                control={<Checkbox checked={formik.values.setupDetails.inInspection} />}
                                                label='In Inspection'
                                            />
                                            <Box width={45} height={23} bgcolor={'orange.main'} borderRadius={'5px'} />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            gap={3}
                                            maxWidth={250}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <FormControlLabel
                                                name={'setupDetails.scheduled'}
                                                onChange={formik.handleChange}
                                                control={<Checkbox checked={formik.values.setupDetails.scheduled} />}
                                                label='Scheduled'
                                            />
                                            <Box width={45} height={23} bgcolor={'#629DFD'} borderRadius={'5px'} />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            gap={3}
                                            maxWidth={250}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <FormControlLabel
                                                name={'setupDetails.damaged'}
                                                onChange={formik.handleChange}
                                                control={<Checkbox checked={formik.values.setupDetails.damaged} />}
                                                label='Damaged'
                                            />
                                            <Box width={45} height={23} bgcolor={'red.main'} borderRadius={'5px'} />
                                        </Stack>
                                    </Stack>
                                </FormGroup>
                            </Stack>
                        </Stack>
                    </Box>
                )}
                {tabs[1].value === activeTab && (
                    <Box bgcolor={'#FAFBFD'} px={3} py={2} flex={1}>
                        <Stack gap={3} maxWidth={650}>
                            <Box>
                                <Grid spacing={3} container>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Manufacturer'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.manufacturer'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Model'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.model'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'VIN Number'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.vinNumber'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Box position={'relative'}>
                                            <DefaultSelect
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 40,
                                                    },
                                                }}
                                                defaultValue={'Registered State'}
                                                helperText={'Registered State'}
                                                name={'assetDetails.registeredState'}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'USDOT#'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.usdot'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Dealer'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.dealer'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Length'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.length'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Weight Capacity'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.weightCapacity'}
                                        />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <DefaultInput
                                            helperText={'Description'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'assetDetails.description'}
                                            isTextarea
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Box>
                )}
                {tabs[2].value === activeTab && (
                    <Box bgcolor={'#FAFBFD'} px={3} py={2} flex={1}>
                        <Stack gap={3} maxWidth={650}>
                            <Box>
                                <Grid spacing={3} container>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'First Name'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.firstName'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Last Name'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.lastName'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Department'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.department'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Title'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.title'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Email'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.email'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Cellular'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.cellular'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Address 1'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.address1'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Address 2'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.address2'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'City'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.city'}
                                        />
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Box position={'relative'}>
                                            <DefaultSelect
                                                sx={{
                                                    '& .MuiInputBase-root': {
                                                        height: 40,
                                                    },
                                                }}
                                                defaultValue={'State'}
                                                helperText={'State'}
                                                name={'contactDetails.state'}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <DefaultInput
                                            helperText={'Zip Code'}
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    pr: 6,
                                                },
                                            }}
                                            name={'contactDetails.zipCode'}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Box>
                )}
                {tabs[3].value === activeTab && (
                    <Stack direction={'row'} gap={2} flex={1}>
                        <Stack bgcolor={'#FAFBFD'} px={3} py={2} width={'100%'} maxWidth={400} gap={3}>
                            <DefaultSelect
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: 40,
                                    },
                                }}
                                defaultValue={'Select Type'}
                                helperText={'Select Type'}
                                name={'trackersDevices.trackerType'}
                            />
                            <Stack gap={1}>
                                <Box position={'relative'}>
                                    <DefaultInput
                                        helperText={'Enter Serial Number'}
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                pr: 6,
                                            },
                                        }}
                                        name={'trackersDevices.serialNumber'}
                                    />
                                    <CheckCircle
                                        sx={{
                                            position: 'absolute',
                                            right: 10,
                                            top: 24,
                                            width: 30,
                                            height: 30,
                                            color: 'green.main',
                                        }}
                                    />
                                </Box>
                                <Typography alignSelf={'flex-end'} fontSize={12} color={'#AAB0BC'}>
                                    Device is Available
                                </Typography>
                            </Stack>
                            <Stack gap={2}>
                                <Typography textTransform={'uppercase'}>Details</Typography>
                                <Stack gap={2}>
                                    <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'}>Serial Number</Typography>
                                        <Typography>809765</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'}>Tracker Type</Typography>
                                        <Typography>Yabby3</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'}>Battery (V)</Typography>
                                        <Typography>5.45</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'}>Firmware</Typography>
                                        <Typography>12.34.3</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'}>HW Version</Typography>
                                        <Typography>HW 4.543.</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                        <Typography color={'#AAB0BC'}>Identifier</Typography>
                                        <Typography>351901934084645</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <ButtonBase
                                sx={{
                                    py: 1,
                                    px: 3,
                                    border: '1px solid #E2E2EA',
                                    borderRadius: '5px',
                                    bgcolor: 'secondary.main',
                                    mt: 'auto',
                                    alignSelf: 'flex-end',
                                }}
                            >
                                <Typography color={'common.white'} fontSize={14}>
                                    Add Device
                                </Typography>
                            </ButtonBase>
                        </Stack>
                        <Stack gap={3} bgcolor={'#FAFBFD'} px={3} py={2} flex={1}>
                            <Box maxWidth={300}>
                                <DefaultSelect
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: 40,
                                        },
                                    }}
                                    defaultValue={'808654 (primary)'}
                                    name={'trackerDevices.battery'}
                                />
                            </Box>
                            <Stack direction={'row'} gap={12}>
                                <Box maxWidth={300} width={'100%'}>
                                    <Typography textTransform={'uppercase'} mb={2}>
                                        Details
                                    </Typography>
                                    <Stack gap={2}>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Serial Number</Typography>
                                            <Typography>809765</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Tracker Type</Typography>
                                            <Typography>Yabby3</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Battery (V)</Typography>
                                            <Typography>5.45</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Firmware</Typography>
                                            <Typography>12.34.3</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>HW Version</Typography>
                                            <Typography>HW 4.543.</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Identifier</Typography>
                                            <Typography>351901934084645</Typography>
                                        </Stack>
                                    </Stack>
                                    <Typography textTransform={'uppercase'} mb={2} mt={4}>
                                        Activity
                                    </Typography>
                                    <Stack gap={2}>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Activated</Typography>
                                            <Typography>11/04/23 1:13PM</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Days Active</Typography>
                                            <Typography>105 days 9 hrs</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Latitude</Typography>
                                            <Typography>42.4832317</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Longitude</Typography>
                                            <Typography>-82.9420268</Typography>
                                        </Stack>
                                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                                            <Typography color={'#AAB0BC'}>Altitude(m)</Typography>
                                            <Typography>55.23</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Stack gap={3} flex={1}>
                                    <Stack gap={1}>
                                        <Stack direction={'row'} gap={2} justifyContent={'space-between'} alignItems={'center'}>
                                            <Typography textTransform={'uppercase'}>BILLING ACTIVATION</Typography>
                                            <Stack direction={'row'} gap={1} alignItems={'center'}>
                                                <DefaultToggle name={'trackersDevices.enabled'} />
                                                <Typography fontSize={14}>Enabled</Typography>
                                            </Stack>
                                        </Stack>
                                        <Typography fontSize={14}>
                                            Manage device billing status. hen billing is disabled location and sensor data will
                                            not update.
                                        </Typography>
                                    </Stack>
                                    <Box height={'1px'} bgcolor={'#E2E2EA'} />
                                    <Stack gap={2}>
                                        <Typography textTransform={'uppercase'}>THRESHOLDS</Typography>
                                        <Stack gap={2}>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Stack gap={0.5} width={90} flexShrink={0}>
                                                    <Typography fontSize={14}>Temperature</Typography>
                                                    <Typography fontSize={14} color={'#A0A3A6'}>
                                                        Unit: °F)
                                                    </Typography>
                                                </Stack>
                                                <Stack direction={'row'} gap={3}>
                                                    <DefaultInput fixedValue={'Min:'} name={'trackersDevices.minTemperature'} />
                                                    <DefaultInput fixedValue={'Max:'} name={'trackersDevices.maxTemperature'} />
                                                </Stack>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Stack gap={0.5} width={90} flexShrink={0}>
                                                    <Typography fontSize={14}>Speed</Typography>
                                                    <Typography fontSize={14} color={'#A0A3A6'}>
                                                        Unit: mph)
                                                    </Typography>
                                                </Stack>
                                                <Stack direction={'row'} gap={3}>
                                                    <DefaultInput fixedValue={'Min:'} name={'trackersDevices.minSpeed'} />
                                                    <DefaultInput fixedValue={'Max:'} name={'trackersDevices.maxSpeed'} />
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <ButtonBase
                                sx={{
                                    py: 1,
                                    px: 3,
                                    border: '1px solid #E2E2EA',
                                    borderRadius: '5px',
                                    bgcolor: '#E2E2EA',
                                    mt: 'auto',
                                    alignSelf: 'flex-end',
                                }}
                            >
                                <Typography fontSize={14}>Remove</Typography>
                            </ButtonBase>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </FormikProvider>
    );
};

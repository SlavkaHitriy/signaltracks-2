import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Dropdown } from '@/ui/Dropdown/index.js';
import { SearchInput } from '@/components/SearchInput/index.js';
import { tabs } from './data/tabs.js';
import { Tabs } from '@/ui/Tabs/index.js';
import { PlusIcon } from '@/assets/icons/PlusIcon.jsx';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js';
import { usersColumns, usersRows } from '@/modules/Settings/data/users.jsx';
import { configurationTabs } from './data/configurationTabs.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { groupsColumns, groupsRows } from '@/modules/Settings/data/groups.jsx';
import { categoriesColumns, categoriesRows } from '@/modules/Settings/data/categories.jsx';
import { typesColumns, typesRows } from '@/modules/Settings/data/types.jsx';
import { companyTabs } from '@/modules/Settings/data/companyTabs.js';
import { FormikProvider, useFormik } from 'formik';
import { Modal } from '@/components/Modal/Modal.jsx';
import { UserDetailsModal } from '@/modules/Settings/UserDetailsModal.jsx';
import { GroupDetailsModal } from '@/modules/Settings/GroupDetailsModal.jsx';
import { AssetCategoryModal } from '@/modules/Settings/AssetCategoryModal.jsx';
import { AssetTypeModal } from '@/modules/Settings/AssetTypeModal.jsx';

export const Settings = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const [configurationTab, setConfigurationTab] = useState(configurationTabs[0].value);
    const [companyTab, setCompanyTab] = useState(companyTabs[0].value);
    const [userDetailsModal, setUserDetailsModal] = useState(false);
    const [groupDetailsModal, setGroupDetailsModal] = useState(false);
    const [assetCategoryModal, setAssetCategoryModal] = useState(false);
    const [assetTypeModal, setAssetTypeModal] = useState(false);
    const formik = useFormik({
        initialValues: {
            search: '',
            userSearch: '',
            companySearch: '',
            groupsSearch: '',
            assetsSearch: '',
            category: '',
            userDetails: {
                firstName: '',
                lastName: '',
                role: '',
                status: '',
                mobile: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            groupDetails: {
                groupName: '',
                status: '',
                description: '',
                groupColor: {
                    color1: true,
                    color2: false,
                    color3: false,
                    color4: false,
                    color5: false,
                    color6: false,
                    color7: false,
                    color8: false,
                    color9: false,
                    color10: false,
                    color11: false,
                    color12: false,
                },
            },
            assetCategory: {
                groupName: '',
                status: '',
                description: '',
            },
            assetType: {
                groupName: '',
                category: '',
                description: '',
                status: '',
            },
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validateOnChange: false,
    });

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    const handleChangeConfigurationTab = (tab) => {
        setConfigurationTab(tab);
    };

    const handleChangeCompanyTab = (tab) => {
        setCompanyTab(tab);
    };

    return (
        <FormikProvider value={formik}>
            <Modal isOpened={userDetailsModal} title={'User Details'} onClose={() => setUserDetailsModal(false)}>
                <UserDetailsModal />
            </Modal>
            <Modal isOpened={groupDetailsModal} title={'Group Details'} onClose={() => setGroupDetailsModal(false)}>
                <GroupDetailsModal />
            </Modal>
            <Modal isOpened={assetCategoryModal} title={'Asset Category'} onClose={() => setAssetCategoryModal(false)}>
                <AssetCategoryModal />
            </Modal>
            <Modal isOpened={assetTypeModal} title={'Asset Type'} onClose={() => setAssetTypeModal(false)}>
                <AssetTypeModal />
            </Modal>
            <Stack flex={1}>
                <Stack p={3} gap={2}>
                    <Stack direction={'row'} gap={4} justifyContent={'space-between'} alignItems={'center'}>
                        <SearchInput name={'search'} />
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
                </Stack>
                <Stack pl={3} flex={1}>
                    <Stack
                        px={3}
                        py={2}
                        width={'100% + 24px'}
                        sx={{
                            border: '1px solid #E2E2EA',
                            borderRadius: '8px 0 0 8px',
                            borderRight: 0,
                        }}
                        overflow={'hidden'}
                        bgcolor={'#F5F7FB'}
                        position={'relative'}
                        mb={3}
                    >
                        <Stack direction={'row'} gap={3} justifyContent={'space-between'} alignItems={'center'} mb={3}>
                            <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
                            {activeTab === 'users' && (
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
                                >
                                    <PlusIcon />
                                    <Typography fontSize={14} color={'common.white'}>
                                        Add User
                                    </Typography>
                                </ButtonBase>
                            )}
                            {activeTab === 'groups' && (
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
                                >
                                    <PlusIcon />
                                    <Typography fontSize={14} color={'common.white'}>
                                        Add Group
                                    </Typography>
                                </ButtonBase>
                            )}
                            {activeTab === 'asset-configuration' && configurationTab === 'categories' && (
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
                                >
                                    <PlusIcon />
                                    <Typography fontSize={14} color={'common.white'}>
                                        Category
                                    </Typography>
                                </ButtonBase>
                            )}
                            {activeTab === 'asset-configuration' && configurationTab === 'types' && (
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
                                >
                                    <PlusIcon />
                                    <Typography fontSize={14} color={'common.white'}>
                                        Add Type
                                    </Typography>
                                </ButtonBase>
                            )}
                        </Stack>
                        {(activeTab === 'users' || activeTab === 'company') && (
                            <>
                                <Typography fontWeight={700} fontSize={14} mb={2}>
                                    User Manager
                                </Typography>
                                <Stack direction={'row'} gap={8} alignItems={'flex-end'} justifyContent={'space-between'}>
                                    <Stack direction={'row'} gap={8}>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Total Enrolled
                                            </Typography>
                                            <Stack direction={'row'} gap={3} alignItems={'flex-end'}>
                                                <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                    125
                                                </Typography>
                                                <Typography fontSize={14}>Users</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Active
                                            </Typography>
                                            <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                100
                                            </Typography>
                                        </Stack>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Disabled
                                            </Typography>
                                            <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                25
                                            </Typography>
                                        </Stack>
                                        <Box
                                            sx={{
                                                width: '1px',
                                                flexShrink: 0,
                                                bgcolor: '#DADDE5',
                                                height: 70,
                                                alignSelf: 'center',
                                            }}
                                        />
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Admin Users
                                            </Typography>
                                            <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                10
                                            </Typography>
                                        </Stack>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Standard Users
                                            </Typography>
                                            <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                115
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <SearchInput
                                        sx={{
                                            bgcolor: 'common.white',
                                            '.MuiButtonBase-root, .MuiInput-input': {
                                                bgcolor: 'common.white',
                                            },
                                        }}
                                        name={'companySearch'}
                                    />
                                </Stack>
                            </>
                        )}
                        {activeTab === 'groups' && (
                            <>
                                <Typography fontWeight={700} fontSize={14} mb={2}>
                                    Group Settings
                                </Typography>
                                <Stack direction={'row'} gap={8} alignItems={'flex-end'} justifyContent={'space-between'}>
                                    <Stack direction={'row'} gap={8}>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Total Enrolled
                                            </Typography>
                                            <Stack direction={'row'} gap={3} alignItems={'flex-end'}>
                                                <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                    15
                                                </Typography>
                                                <Typography fontSize={14}>Groups</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Active
                                            </Typography>
                                            <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                100
                                            </Typography>
                                        </Stack>
                                        <Stack gap={2}>
                                            <Typography fontSize={14} color={'#A0A3A6'}>
                                                Inactive
                                            </Typography>
                                            <Typography fontSize={24} fontWeight={700} lineHeight={1}>
                                                25
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <SearchInput
                                        sx={{
                                            bgcolor: 'common.white',
                                            '.MuiButtonBase-root, .MuiInput-input': {
                                                bgcolor: 'common.white',
                                            },
                                        }}
                                        name={'userSearch'}
                                    />
                                </Stack>
                            </>
                        )}
                        {activeTab === 'asset-configuration' && (
                            <>
                                <Box mb={4}>
                                    <Tabs
                                        data={configurationTabs}
                                        activeTab={configurationTab}
                                        setActiveTab={handleChangeConfigurationTab}
                                    />
                                </Box>
                                <Stack direction={'row'} gap={3}>
                                    <SearchInput
                                        sx={{
                                            bgcolor: 'common.white',
                                            '.MuiButtonBase-root, .MuiInput-input': {
                                                bgcolor: 'common.white',
                                            },
                                        }}
                                        name={'assetsSearch'}
                                    />
                                    {configurationTab === 'types' && (
                                        <Box maxWidth={200} width={'100%'}>
                                            <DefaultSelect
                                                defaultValue={'Select Category'}
                                                sx={{
                                                    bgcolor: 'common.white',
                                                }}
                                                name={'category'}
                                            />
                                        </Box>
                                    )}
                                </Stack>
                            </>
                        )}
                    </Stack>
                    {activeTab === 'company' && (
                        <Stack
                            flex={1}
                            width={'100% + 24px'}
                            bgcolor={'#F5F7FB'}
                            sx={{
                                border: '1px solid #E2E2EA',
                                borderRadius: '8px 0 0 8px',
                                borderRight: 0,
                            }}
                            overflow={'hidden'}
                            position={'relative'}
                            px={3}
                            py={2}
                        >
                            <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'space-between'} mb={3}>
                                <Box>
                                    <Tabs data={companyTabs} activeTab={companyTab} setActiveTab={handleChangeCompanyTab} />
                                </Box>
                                <Stack direction={'row'} gap={3}>
                                    <ButtonBase
                                        sx={{
                                            py: 1,
                                            px: 3,
                                            border: '1px solid #E2E2EA',
                                            bgcolor: '#FCFCFE',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <Typography fontSize={14} fontWeight={700}>
                                            Edit
                                        </Typography>
                                    </ButtonBase>
                                    <ButtonBase
                                        sx={{
                                            py: 1,
                                            px: 3,
                                            border: '1px solid #E2E2EA',
                                            bgcolor: '#FCFCFE',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <Typography color={'secondary.main'} fontSize={14} fontWeight={700}>
                                            Save
                                        </Typography>
                                    </ButtonBase>
                                </Stack>
                            </Stack>
                            <Box>
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{
                                        '& > div': {
                                            '& > div': {
                                                borderRight: '1px solid #E2E2EA',
                                                pl: 3,
                                                pr: 6,
                                            },
                                            '&:first-child': {
                                                '& > div': {
                                                    pl: 0,
                                                },
                                            },
                                            '&:last-child': {
                                                '& > div': {
                                                    borderRight: 'none',
                                                    pr: 0,
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <Grid item xs={4}>
                                        <Stack gap={3}>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Company
                                                </Typography>
                                                <Typography fontSize={14}>Chevron</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Contact Name
                                                </Typography>
                                                <Typography fontSize={14}>Robert Penniwhacher</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Contact Email
                                                </Typography>
                                                <Typography fontSize={14}>Robert.Penniwhacher@chevron.com</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Address 1
                                                </Typography>
                                                <Typography fontSize={14}>2500 West Houston Parkway</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Address 2
                                                </Typography>
                                                <Typography fontSize={14}>Suite 2500</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    City
                                                </Typography>
                                                <Typography fontSize={14}>Houston</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    State
                                                </Typography>
                                                <Typography fontSize={14}>Texas</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Zip Code
                                                </Typography>
                                                <Typography fontSize={14}>77346-3112</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Mobile Number
                                                </Typography>
                                                <Typography fontSize={14}>832-568-8989</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Phone Number
                                                </Typography>
                                                <Typography fontSize={14}>832-568-8989</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Stack gap={3}>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    TAX ID
                                                </Typography>
                                                <Typography fontSize={14}>16468406846</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Net Terms
                                                </Typography>
                                                <Typography fontSize={14}>Net 60</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Dealer
                                                </Typography>
                                                <Typography fontSize={14}>Trailer Reseller</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Billing Contact
                                                </Typography>
                                                <Typography fontSize={14}>Robert Penniwhacher</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Billing Email
                                                </Typography>
                                                <Typography fontSize={14}>Robert.Penniwhacher@chevron.com</Typography>
                                            </Stack>
                                            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>
                                                <Typography color={'#AAB0BC'} fontSize={14}>
                                                    Phone Number
                                                </Typography>
                                                <Typography fontSize={14}>832-568-8989</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    )}
                    {activeTab === 'users' && (
                        <Stack
                            flex={1}
                            width={'100% + 24px'}
                            sx={{
                                border: '1px solid #E2E2EA',
                                borderRadius: '8px 0 0 8px',
                                borderRight: 0,
                            }}
                            overflow={'hidden'}
                            position={'relative'}
                        >
                            <DefaultDataGrid
                                columns={usersColumns}
                                rows={usersRows}
                                onRowClick={() => setUserDetailsModal(true)}
                            />
                        </Stack>
                    )}
                    {activeTab === 'groups' && (
                        <Stack
                            flex={1}
                            width={'100% + 24px'}
                            sx={{
                                border: '1px solid #E2E2EA',
                                borderRadius: '8px 0 0 8px',
                                borderRight: 0,
                            }}
                            overflow={'hidden'}
                            position={'relative'}
                        >
                            <DefaultDataGrid
                                columns={groupsColumns}
                                rows={groupsRows}
                                onRowClick={() => setGroupDetailsModal(true)}
                            />
                        </Stack>
                    )}
                    {activeTab === 'asset-configuration' && configurationTab === 'categories' && (
                        <Stack
                            flex={1}
                            width={'100% + 24px'}
                            sx={{
                                border: '1px solid #E2E2EA',
                                borderRadius: '8px 0 0 8px',
                                borderRight: 0,
                            }}
                            overflow={'hidden'}
                            position={'relative'}
                        >
                            <DefaultDataGrid
                                columns={categoriesColumns}
                                rows={categoriesRows}
                                onRowClick={() => setAssetCategoryModal(true)}
                            />
                        </Stack>
                    )}
                    {activeTab === 'asset-configuration' && configurationTab === 'types' && (
                        <Stack
                            flex={1}
                            width={'100% + 24px'}
                            sx={{
                                border: '1px solid #E2E2EA',
                                borderRadius: '8px 0 0 8px',
                                borderRight: 0,
                            }}
                            overflow={'hidden'}
                            position={'relative'}
                        >
                            <DefaultDataGrid columns={typesColumns} rows={typesRows} onRowClick={() => setAssetTypeModal(true)} />
                        </Stack>
                    )}
                </Stack>
            </Stack>
        </FormikProvider>
    );
};

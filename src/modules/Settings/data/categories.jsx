import { Stack, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';

export const categoriesColumns = [
    {
        field: 'assetCategory',
        headerName: 'Asset Category',
        width: 200,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 250,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: ({ value: { text, textColor, borderColor } }) => (
            <Tag textColor={textColor} text={text} borderColor={borderColor} />
        ),
    },
    {
        field: 'assignedTypes',
        headerName: 'Assigned Types',
        width: 150,
    },
    {
        field: 'arrowIcon',
        headerName: '',
        flex: 1,
        renderCell: () => (
            <Stack direction={'row'} alignItems={'center'} width={'100%'} gap={1} justifyContent={'flex-end'} pr={3}>
                <ArrowForwardIos
                    sx={{
                        color: 'secondary.main',
                        width: 18,
                        height: 18,
                    }}
                />
                <Typography color={'secondary.main'} fontSize={14}>
                    Details
                </Typography>
            </Stack>
        ),
        sortable: false,
        disableColumnMenu: true,
    },
];

export const categoriesRows = [
    {
        id: 1,
        assetCategory: 'Heavy Machinery',
        description: 'Heavy Machinery Equipment',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedTypes: 10,
    },
    {
        id: 2,
        assetCategory: 'Rail Cars',
        description: 'Rail Cars & Accessories',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedTypes: 25,
    },
    {
        id: 3,
        assetCategory: 'Mobile Trailers',
        description: 'Service Mobile Units & Trailers',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedTypes: 120,
    },
    {
        id: 4,
        assetCategory: 'Semi Trucks',
        description: 'Semi Trucks',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedTypes: 0,
    },
    {
        id: 5,
        assetCategory: 'Generators',
        description: 'Portable Generator Units',
        status: {
            text: 'Disabled',
            borderColor: 'red.main',
        },
        assignedTypes: 2,
    },
    {
        id: 6,
        assetCategory: 'Rig Equipment',
        description: 'Land Rig Equipment',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedTypes: 45,
    },
];

import { Stack, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';

export const groupsColumns = [
    {
        field: 'groupName',
        headerName: 'Group Name',
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
        field: 'assignedAssets',
        headerName: 'Assigned Assets',
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

export const groupsRows = [
    {
        id: 1,
        groupName: 'Maintenance Group',
        description: 'Assets in Maintenance Mode',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedAssets: 10,
    },
    {
        id: 2,
        groupName: 'In Transit',
        description: 'Assets in Transit to Customer',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedAssets: 25,
    },
    {
        id: 3,
        groupName: 'Inspection Group',
        description: 'Assets in Inspection Mode',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedAssets: 120,
    },
    {
        id: 4,
        groupName: 'Ready',
        description: 'Ready for Service',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedAssets: 0,
    },
    {
        id: 5,
        groupName: 'To be Sold',
        description: 'To be Sold',
        status: {
            text: 'Disabled',
            borderColor: 'red.main',
        },
        assignedAssets: 2,
    },
    {
        id: 6,
        groupName: 'Unknown',
        description: 'Unknown - Investigate',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        assignedAssets: 45,
    },
];

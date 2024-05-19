import { Box, Stack, Typography } from '@mui/material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';

export const columns = [
    {
        field: 'asset',
        headerName: 'Asset',
        width: 200,
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
        field: 'device',
        headerName: 'Device',
        width: 130,
        renderCell: ({ value: { text, textColor, borderColor } }) => (
            <Tag textColor={textColor} text={text} borderColor={borderColor} />
        ),
    },
    {
        field: 'groups',
        headerName: 'Groups',
        flex: 1,
        renderCell: ({ value }) => (
            <Stack direction={'row'} gap={1}>
                {value.slice(0, 3).map(({ text, textColor, borderColor }, index) => (
                    <Tag key={`asset-group-${index}`} textColor={textColor} text={text} borderColor={borderColor} />
                ))}
                {value.length > 3 && <Tag textColor={'#707070'} text={`+${value.length - 3}`} borderColor={'#D5D5D5'} />}
            </Stack>
        ),
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 160,
    },
    {
        field: 'arrowIcon',
        headerName: '',
        width: 130,
        renderCell: () => (
            <Stack direction={'row'} alignItems={'center'} width={'100%'} gap={1}>
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

export const rows = [
    {
        id: 1,
        asset: 'TR-500-14A',
        status: {
            text: 'Moving',
            textColor: 'green.main',
            borderColor: 'green.main',
        },
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        groups: [
            {
                text: 'In Maint.',
                textColor: 'secondary.dark',
                borderColor: 'secondary.dark',
            },
            {
                text: 'Scheduled',
                textColor: 'secondary.main',
                borderColor: 'secondary.main',
            },
        ],
        lastUpdate: '11 minutes ago',
    },
    {
        id: 2,
        asset: 'TR-500-14A',
        status: {
            text: 'Idle',
            textColor: '#707070',
            borderColor: '#D5D5D5',
        },
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        groups: [
            {
                text: 'In Maint.',
                textColor: 'secondary.dark',
                borderColor: 'secondary.dark',
            },
        ],
        lastUpdate: '5 hours ago',
    },
    {
        id: 3,
        asset: 'TR-500-14A',
        status: {
            text: 'Moving',
            textColor: 'green.main',
            borderColor: 'green.main',
        },
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        groups: [
            {
                text: 'In Maint.',
                textColor: 'secondary.dark',
                borderColor: 'secondary.dark',
            },
            {
                text: 'Scheduled',
                textColor: 'secondary.main',
                borderColor: 'secondary.main',
            },
            {
                text: 'Damaged',
                textColor: 'orange.main',
                borderColor: 'orange.main',
            },
            {
                text: 'Damaged',
                textColor: 'orange.main',
                borderColor: 'orange.main',
            },
            {
                text: 'Damaged',
                textColor: 'orange.main',
                borderColor: 'orange.main',
            },
            {
                text: 'Damaged',
                textColor: 'orange.main',
                borderColor: 'orange.main',
            },
        ],
        lastUpdate: '5 seconds ago',
    },
    {
        id: 4,
        asset: 'TR-500-14A',
        status: {
            text: 'Idle',
            textColor: '#707070',
            borderColor: '#D5D5D5',
        },
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        groups: [
            {
                text: 'In Maint.',
                textColor: 'secondary.dark',
                borderColor: 'secondary.dark',
            },
        ],
        lastUpdate: '45 minutes ago',
    },
    {
        id: 5,
        asset: 'TR-500-14A',
        status: {
            text: 'Moving',
            textColor: 'green.main',
            borderColor: 'green.main',
        },
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        groups: [
            {
                text: 'In Maint.',
                textColor: 'secondary.dark',
                borderColor: 'secondary.dark',
            },
            {
                text: 'Scheduled',
                textColor: 'secondary.main',
                borderColor: 'secondary.main',
            },
        ],
        lastUpdate: '12 hours ago',
    },
    {
        id: 6,
        asset: 'TR-500-14A',
        status: {
            text: 'Moving',
            textColor: 'green.main',
            borderColor: 'green.main',
        },
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        groups: [
            {
                text: 'In Maint.',
                textColor: 'secondary.dark',
                borderColor: 'secondary.dark',
            },
        ],
        lastUpdate: '10 seconds ago',
    },
];

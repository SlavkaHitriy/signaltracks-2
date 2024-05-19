import { Stack, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';

export const columns = [
    {
        field: 'device',
        headerName: 'Device',
        width: 130,
        renderCell: ({ value: { text, textColor, borderColor } }) => (
            <Tag textColor={textColor} text={text} borderColor={borderColor} />
        ),
    },
    {
        field: 'assignedAsset',
        headerName: 'Assigned Asset',
        width: 150,
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
        field: 'type',
        headerName: 'Type',
        width: 150,
    },
    {
        field: 'battery',
        headerName: 'Battery (v)',
        width: 150,
    },
    {
        field: 'deviceTemp',
        headerName: 'Device Temp',
        width: 150,
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 150,
    },
    {
        field: 'arrowIcon',
        headerName: '',
        flex: 1,
        renderCell: () => (
            <Stack direction={'row'} alignItems={'center'} width={'100%'} gap={1} justifyContent={'flex-end'} pr={5}>
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
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        assignedAsset: 'TR-500-14A',
        status: {
            text: 'Assigned',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        type: 'YabbyEdge4-G',
        battery: '5.167',
        deviceTemp: '68.5 °F',
        lastUpdate: '11 minutes ago',
    },
    {
        id: 2,
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        assignedAsset: 'None',
        status: {
            text: 'Available',
            borderColor: 'green.main',
        },
        type: 'YabbyEdge4-G',
        battery: '5.167',
        deviceTemp: '68.5 °F',
        lastUpdate: '5 hours ago',
    },
    {
        id: 3,
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        assignedAsset: 'TR-500-14A',
        status: {
            text: 'Assigned',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        type: 'YabbyEdge4-G',
        battery: '5.167',
        deviceTemp: '68.5 °F',
        lastUpdate: '5 seconds ago',
    },
    {
        id: 4,
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        assignedAsset: 'TR-500-14A',
        status: {
            text: 'Assigned',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        type: 'YabbyEdge4-G',
        battery: '5.167',
        deviceTemp: '68.5 °F',
        lastUpdate: '45 minutes ago',
    },
    {
        id: 5,
        device: {
            text: '808578',
            borderColor: 'green.main',
        },
        assignedAsset: 'None',
        status: {
            text: 'Available',
            borderColor: 'green.main',
        },
        type: 'YabbyEdge4-G',
        battery: '5.167',
        deviceTemp: '68.5 °F',
        lastUpdate: '12 hours ago',
    },
];

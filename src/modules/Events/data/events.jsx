import { Stack, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';
import { ColorStatus } from '@/ui/ColorStatus/index.js';

export const columns = [
    {
        field: 'asset',
        headerName: 'Asset',
        width: 200,
    },
    {
        field: 'eventId',
        headerName: 'Event ID',
        width: 160,
    },
    {
        field: 'sensor',
        headerName: 'Sensor',
        width: 160,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 160,
    },
    {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 160,
    },
    {
        field: 'threshold',
        headerName: 'Threshold',
        width: 160,
    },
    {
        field: 'dataValue',
        headerName: 'Data Value',
        width: 130,
        renderCell: ({ value: { text, code } }) => (
            <Stack direction={'row'} gap={2} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                <Typography fontSize={15}>{text}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'arrowIcon',
        headerName: '',
        flex: 1,
        renderCell: () => (
            <Stack direction={'row'} justifyContent={'flex-end'} pr={5} alignItems={'center'} width={'100%'} gap={1}>
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
        eventId: '1002',
        sensor: 'GPS Device',
        type: 'Internal Temperature',
        timestamp: '06-10-2023 1:23AM',
        threshold: 'Below Min.',
        dataValue: {
            text: '68.5 °F',
            code: 3,
        },
    },
    {
        id: 2,
        asset: 'TR-500-14A',
        eventId: '1003',
        sensor: 'GPS Device',
        type: 'Speed',
        timestamp: '06-10-2023 1:23AM',
        threshold: 'Below Min.',
        dataValue: {
            text: '68.5 °F',
            code: 3,
        },
    },
    {
        id: 3,
        asset: 'TR-500-14A',
        eventId: '1004',
        sensor: 'GPS Device',
        type: 'Altitude',
        timestamp: '06-10-2023 1:23AM',
        threshold: 'Below Min.',
        dataValue: {
            text: '68.5 °F',
            code: 1,
        },
    },
    {
        id: 4,
        asset: 'TR-500-14A',
        eventId: '1005',
        sensor: 'GPS Device',
        type: 'Internal Temperature',
        timestamp: '06-10-2023 1:23AM',
        threshold: 'Below Min.',
        dataValue: {
            text: '68.5 °F',
            code: 3,
        },
    },
    {
        id: 5,
        asset: 'TR-500-14A',
        eventId: '1006',
        sensor: 'GPS Device',
        type: 'Internal Temperature',
        timestamp: '06-10-2023 1:23AM',
        threshold: 'Below Min.',
        dataValue: {
            text: '68.5 °F',
            code: 3,
        },
    },
    {
        id: 6,
        asset: 'TR-500-14A',
        eventId: '1007',
        sensor: 'GPS Device',
        type: 'Speed',
        timestamp: '06-10-2023 1:23AM',
        threshold: 'Below Min.',
        dataValue: {
            text: '68.5 °F',
            code: 1,
        },
    },
];

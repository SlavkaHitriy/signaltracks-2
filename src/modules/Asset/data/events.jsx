import { Stack, Typography } from '@mui/material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const eventsColumns = [
    {
        field: 'eventId',
        headerName: 'Event ID',
        width: 130,
    },
    {
        field: 'sensor',
        headerName: 'Sensor',
        width: 130,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 200,
    },
    {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 200,
    },
    {
        field: 'threshold',
        headerName: 'Threshold',
        width: 150,
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
        field: 'spacing',
        headerName: '',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
    },
];

export const eventsRows = [
    {
        id: 1,
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

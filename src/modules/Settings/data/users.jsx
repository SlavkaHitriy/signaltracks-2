import { Stack, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';

export const usersColumns = [
    {
        field: 'first',
        headerName: 'First',
        width: 150,
    },
    {
        field: 'last',
        headerName: 'Last',
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
        field: 'role',
        headerName: 'Role',
        width: 130,
        renderCell: ({ value: { text, textColor, borderColor } }) => (
            <Tag textColor={textColor} text={text} borderColor={borderColor} />
        ),
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'login',
        headerName: 'Login IP',
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

export const usersRows = [
    {
        id: 1,
        first: 'Daniel',
        last: 'Pacheco',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        role: {
            text: 'Admin',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        email: 'daniel@me.com',
        login: '10.25.145.21',
    },
    {
        id: 2,
        first: 'Paul',
        last: 'Johnson',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        role: {
            text: 'Admin',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        email: 'Johnson@me.com',
        login: '10.25.145.21',
    },
    {
        id: 3,
        first: 'Stacy',
        last: 'Adams',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        role: {
            text: 'Admin',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        email: 'Adams@me.com',
        login: '10.25.145.21',
    },
    {
        id: 4,
        first: 'Jerry',
        last: 'Haynes',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        role: {
            text: 'Admin',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        email: 'Haynes@gmail.com',
        login: '10.25.145.21',
    },
    {
        id: 5,
        first: 'Joseph',
        last: 'Wright',
        status: {
            text: 'Disabled',
            borderColor: 'red.main',
        },
        role: {
            text: 'Standard',
            textColor: '#707070',
            borderColor: '#707070',
        },
        email: 'Wright@gmail.com',
        login: '10.25.145.21',
    },
    {
        id: 6,
        first: 'Mark',
        last: 'Smith',
        status: {
            text: 'Active',
            borderColor: 'green.main',
        },
        role: {
            text: 'Admin',
            textColor: '#0A00FF',
            borderColor: '#0A00FF',
        },
        email: 'Smith@me.com',
        login: '10.25.145.21',
    },
];

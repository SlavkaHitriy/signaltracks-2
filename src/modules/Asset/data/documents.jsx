import { Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

export const documentsColumns = [
    {
        field: 'fileName',
        headerName: 'File Name',
        width: 300,
    },
    {
        field: 'uploadedBy',
        headerName: 'Uploaded By',
        width: 200,
        renderCell: ({ value }) => (
            <Typography color={'#AAB0BC'} fontSize={15}>
                {value}
            </Typography>
        ),
    },
    {
        field: 'uploadDate',
        headerName: 'Upload Date',
        flex: 1,
        renderCell: ({ value }) => (
            <Typography color={'#AAB0BC'} fontSize={15}>
                {value}
            </Typography>
        ),
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 80,
        sortable: false,
        disableColumnMenu: true,
        renderCell: () => (
            <Stack pl={1.5} width={'100%'}>
                <Close
                    sx={{
                        color: '#A0A3A6',
                    }}
                />
            </Stack>
        ),
    },
];

export const documentsRows = [
    {
        id: 1,
        fileName: 'Manual & Engineering.pdf',
        uploadedBy: 'Daniel Pacheco',
        uploadDate: '11/23/2023',
    },
    {
        id: 2,
        fileName: 'Manual & Engineering.pdf',
        uploadedBy: 'Daniel Pacheco',
        uploadDate: '11/23/2023',
    },
];

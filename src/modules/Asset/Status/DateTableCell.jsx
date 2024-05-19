import { Box, TableCell } from '@mui/material';

export const DateTableCell = ({ bgcolor }) => {
    return (
        <TableCell>
            <Box
                sx={{
                    width: '100%',
                    height: '23px',
                    borderRadius: '5px',
                    bgcolor: bgcolor || '#F1F1F5',
                }}
            />
        </TableCell>
    );
};

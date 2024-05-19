import { Box, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import { DateTableCell } from '@/modules/Asset/Status/DateTableCell.jsx';

export const DateTable = () => {
    return (
        <Table
            sx={{
                minWidth: 650,
                tableLayout: 'fixed',
                '.MuiTableCell-root': {
                    border: 'none',
                    px: 1,
                    py: 1.5,
                },
            }}
        >
            <TableBody>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Sat</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Fri</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Thu</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Wed</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Tue</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Mon</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
                <TableRow>
                    <TableCell width={50}>
                        <Typography color={'#92929D'}>Sun</Typography>
                    </TableCell>
                    <DateTableCell />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell bgcolor={'secondary.main'} />
                    <DateTableCell />
                    <DateTableCell bgcolor={'orange.main'} />
                    <DateTableCell />
                    <DateTableCell />
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            6am
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            8am
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            9am
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            10am
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            11am
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            12am
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            1pm
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            2pm
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            3pm
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            4pm
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            5pm
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            6pm
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography textAlign={'center'} color={'#92929D'}>
                            7pm
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { ArrowForwardIos } from '@mui/icons-material';

export const Datepicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                slots={{
                    openPickerIcon: ArrowForwardIos,
                }}
                views={['year', 'month', 'day']}
                sx={{
                    width: '150px',
                    borderRadius: '5px',
                    bgcolor: 'common.white',
                    border: '1px solid #E2E2EA',
                    overflow: 'hidden',
                    '.MuiOutlinedInput-input': {
                        p: '0 12px',
                        height: '40px',
                        order: 2,
                    },
                    '.MuiInputBase-root': {
                        pr: 0,
                    },
                    '.MuiInputAdornment-root': {
                        ml: 0,
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        p: '0',
                    },
                    '.MuiIconButton-root': {
                        width: '100%',
                        mr: '0',
                        height: '100%',
                        position: 'absolute',
                        borderRadius: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        svg: {
                            width: '16px',
                            height: '16px',
                            transform: 'rotate(90deg)',
                        },
                    },
                }}
                defaultValue={dayjs('2024-01-24')}
            />
        </LocalizationProvider>
    );
};

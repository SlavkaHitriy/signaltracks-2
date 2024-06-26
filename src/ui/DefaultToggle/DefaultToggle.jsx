import { Switch } from '@mui/material';
import { useField } from 'formik';

export const DefaultToggle = ({ name }) => {
    const [field] = useField(name);

    return (
        <Switch
            sx={{
                alignItems: 'center',
                ml: -1,
                '.MuiSwitch-thumb': {
                    bgcolor: 'primary.main',
                    width: 20,
                    height: 20,
                },
                '.Mui-checked .MuiSwitch-thumb': {
                    backgroundColor: 'green.main',
                },
                '& .Mui-checked+.MuiSwitch-track, .MuiSwitch-track': {
                    backgroundColor: '#EAEBEA !important',
                    boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 16%)',
                    height: 20,
                    width: 40,
                    borderRadius: '10px',
                },
                '.MuiSwitch-switchBase': {
                    top: '0px',
                },
            }}
            checked={field.value}
            onChange={field.onChange}
            name={name}
        />
    );
};

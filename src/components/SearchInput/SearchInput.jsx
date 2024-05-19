import { Stack } from '@mui/material';
import { DefaultInput } from '@/ui/DefaultInput';
import { DefaultIconButton } from '@/ui/DefaultIconButton';
import { SearchIcon } from '@/assets/icons/SearchIcon.jsx';

export const SearchInput = ({ sx, name }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Stack
            direction={'row'}
            sx={{
                bgcolor: 'blue.light',
                border: '1px solid #E2E2EA',
                borderRadius: '6px',
                minWidth: '250px',
                overflow: 'hidden',
                height: 30,
                ...sx,
            }}
            component={'form'}
            onSubmit={handleSubmit}
        >
            <DefaultIconButton
                icon={<SearchIcon />}
                type='submit'
                size={'100%'}
                sx={{
                    width: 45,
                    borderRadius: 0,
                    backgroundColor: '#f8f8fa',
                    color: 'primary.main',

                    '&:hover': {
                        backgroundColor: '#f8f8fa',
                    },
                }}
            />
            <DefaultInput
                placeholder={'Search...'}
                name={name}
                sx={{
                    width: '100%',
                    '.MuiInputBase-root::before': {
                        display: 'none',
                    },
                    '.MuiInputBase-root': {
                        height: '30px',
                        pr: 2,
                        pt: '1px',
                        '&::after': {
                            bottom: 1.5,
                        },
                    },
                    '.MuiInputBase-input': {
                        fontSize: 14,
                        bgcolor: '#F6F8FA',
                        borderRight: 0,
                    },
                }}
            />
        </Stack>
    );
};

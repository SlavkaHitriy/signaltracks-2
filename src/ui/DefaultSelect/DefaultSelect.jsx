import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { useField } from 'formik';

export const DefaultSelect = memo(({ sx, label, helperText, helperTextColor, defaultValue = 'Active', name }) => {
    const [field, _, { setValue }] = useField(name);

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <FormControl variant='standard' sx={{ minWidth: '100%', alignItems: 'center', ...sx }}>
            <>
                {helperText && (
                    <Typography
                        color={helperTextColor || '#A8A8A7'}
                        fontSize={12}
                        sx={{
                            alignSelf: 'flex-start',
                        }}
                    >
                        {helperText}
                    </Typography>
                )}
                <Select
                    label={label}
                    IconComponent={ExpandMore}
                    sx={{
                        width: '100%',
                        border: '1px solid #E2E2EA',
                        borderRadius: '6px',
                        height: 30,
                        overflow: 'hidden',
                        bgcolor: 'common.white',
                        '&::before': {
                            border: 'none',
                        },
                        '.MuiSelect-select': {
                            py: '5px',
                            fontSize: 14,
                            pl: 2,
                        },
                        '& .MuiSelect-icon': {
                            right: '12px',
                            zIndex: 1,
                            color: 'primary.main',
                        },
                    }}
                    defaultValue={defaultValue}
                    {...field}
                >
                    <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
                    <MenuItem value={`${defaultValue} 1`}>{defaultValue} 1</MenuItem>
                    <MenuItem value={`${defaultValue} 2`}>{defaultValue} 2</MenuItem>
                </Select>
            </>
        </FormControl>
    );
});

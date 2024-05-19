import { Box, TextField, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useField } from 'formik';

export const DefaultInput = memo(
    ({ label, placeholder, fixedValue, helperText, helperTextColor, sx, isTextarea, ...otherProps }) => {
        const [field, meta] = useField(otherProps.name);

        console.log('field error', meta.error);

        return (
            <Box position={'relative'} width={'100%'}>
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
                {fixedValue && (
                    <Box
                        position={'absolute'}
                        top={'50%'}
                        left={12}
                        zIndex={3}
                        sx={{
                            fontSize: 14,
                            transform: 'translateY(calc(-50% - 2px))',
                        }}
                    >
                        {fixedValue}
                    </Box>
                )}

                <TextField
                    label={label}
                    variant='standard'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder={placeholder}
                    multiline={isTextarea}
                    minRows={isTextarea ? 5 : undefined}
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: '6px',
                        '.MuiFormLabel-root': {
                            fontSize: 12,
                            transform: 'unset',
                            color: '#A8A8A7',
                            position: 'static',
                            lineHeight: '1.5',
                            '&.Mui-disabled': {
                                color: 'primary.main',
                            },
                        },
                        '.MuiInput-input': {
                            fontSize: 14,
                            height: isTextarea ? 'auto' : 40,
                            py: isTextarea ? 2 : 0,
                            pr: 2,
                            pl: fixedValue ? 6 : 2,
                            border: '1px solid #E2E2EA',
                            borderRadius: '6px',
                            boxSizing: 'border-box',
                            bgcolor: 'common.white',
                        },
                        '.MuiInputBase-root': {
                            mt: 0,
                            py: isTextarea && 0,
                            '&::before': {
                                border: 'none',
                            },
                            '&.Mui-disabled': {
                                '&::before': {
                                    display: 'none',
                                },
                            },
                        },
                        ...sx,
                    }}
                    {...otherProps}
                    {...field}
                />
            </Box>
        );
    }
);

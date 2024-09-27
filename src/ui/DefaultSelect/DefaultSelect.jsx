import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import React, { memo, useEffect } from 'react'
import { ExpandMore } from '@mui/icons-material'
import { useField } from 'formik'

export const DefaultSelect = memo(({ sx, label, helperText, helperTextColor, defaultValue = 'Active', name, amount }) => {
  const [field, _, { setValue }] = useField(name)

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  return (
    <FormControl variant='standard' sx={{ width: '100%', alignItems: 'center', ...sx }}>
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
        {amount && (
          <Box
            sx={{
              position: 'absolute',
              right: 36,
              top: 10,
              zIndex: 1,
              p: '2px 6px',
              borderRadius: '8px',
              bgcolor: 'neutral.50',
              display: 'flex',
              pointerEvents: 'none',
            }}
          >
            <Typography variant='caption'>{amount}</Typography>
          </Box>
        )}
        <Select
          label={label}
          IconComponent={ExpandMore}
          sx={{
            width: '100%',
            border: '1px solid #000',
            borderColor: 'neutral.50',
            borderRadius: '4px',
            height: 36,
            overflow: 'hidden',
            bgcolor: 'common.white',
            '&::before': {
              border: 'none',
            },
            '.MuiSelect-select': {
              py: '6px',
              fontSize: 14,
              pl: 1,
            },
            '& .MuiSelect-icon': {
              right: '8px',
              zIndex: 1,
              color: 'neutral.400',
            },
            '.MuiInput-input': {
              paddingRight: `${amount ? 60 : 36}px !important`,
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
  )
})

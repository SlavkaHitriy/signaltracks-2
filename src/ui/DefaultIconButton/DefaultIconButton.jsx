import { IconButton } from '@mui/material'
import React from 'react'

export const DefaultIconButton = ({ icon, size = 24, sx, isDefault = true, ...otherProps }) => {
  return (
    <IconButton
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'neutral.400',
        transition: 'background-color 0.15s',
        p: 0,
        svg: {
          width: `${size}px`,
          height: `${size}px`,
        },
        ...(isDefault && {
          width: '40px',
          height: '36px',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: 'neutral.50',
        }),
        '&:hover': {
          backgroundColor: 'neutral.50',
        },
        ...sx,
      }}
      {...otherProps}
    >
      {icon}
    </IconButton>
  )
}

import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'
import { MiniArrowIcon } from '@/assets/icons/MiniArrowIcon.jsx'

export const Difference = ({ children, sx, isDown }) => {
  const theme = useTheme()

  return (
    <Stack
      sx={{
        svg: {
          width: 8,
          height: 10,
          ...(isDown && {
            transform: 'rotate(180deg)',
          }),
        },
        path: {
          fill: isDown ? theme.palette.error.main : theme.palette.success.main,
        },
        ...sx,
      }}
      direction='row'
      alignItems='center'
      gap={0.5}
    >
      <MiniArrowIcon />
      <Typography color={isDown ? 'error.main' : 'success.main'} variant='footnoteMedium'>
        {children}
      </Typography>
    </Stack>
  )
}

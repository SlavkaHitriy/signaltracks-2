import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const SidebarItem = ({ data, isOpened }) => {
  return (
    <NavLink to={data.link}>
      {({ isActive }) => (
        <Stack
          direction='row'
          alignItems='center'
          justifyContent={!isOpened && 'center'}
          gap={2}
          position='relative'
          px={1.5}
          py={1}
          mx={isOpened ? 2 : 1.5}
          sx={{
            pointerEvents: isActive ? 'none' : 'auto',
            transition: 'all 0.3s ease',
            bgcolor: isActive ? 'common.white' : 'transparent',
            borderRadius: '2px',
            '&:hover': {
              svg: {
                fill: '#fff',
              },
            },
          }}
        >
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{
              svg: {
                width: 24,
                height: 24,
                fill: isActive ? '#051219' : '#fff',
                transition: 'all 0.15s ease',
              },
            }}
          >
            {data.icon}
          </Stack>
          <Box
            sx={{
              transition: 'all 0.15s ease',
              transitionDelay: isOpened ? '1s' : '0s',
              display: isOpened ? 'block' : 'none',
              height: isOpened ? '20px' : 0,
            }}
          >
            <Typography
              sx={{
                transition: 'all 0.15s ease',
                color: isActive ? '#051219' : 'common.white',
              }}
              fontWeight={500}
              fontSize={14}
              whiteSpace='nowrap'
            >
              {data.title}
            </Typography>
          </Box>
        </Stack>
      )}
    </NavLink>
  )
}

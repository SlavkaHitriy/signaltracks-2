import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import logo from '@/assets/images/logo.svg'
import logoSmall from '@/assets/images/logo-small.svg'
import { SidebarItem } from '@/components/Sidebar/SidebarItem'
import { theme } from '@/core/theme/theme'
import { mainMenu, systemMenu } from './data/menu'
import { SidebarArrowIcon } from '@/assets/icons/SidebarArrowIcon.jsx'
import { sidebarOpened } from '@/core/store/index.js'
import { CorpIcon } from '@/assets/icons/CorpIcon.jsx'

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useRecoilState(sidebarOpened)

  const toggleSidebar = () => {
    setIsOpened(prev => !prev)
  }

  return (
    <Stack
      component='aside'
      width={isOpened ? 216 : 72}
      flexShrink={0}
      bgcolor='primary.dark'
      boxShadow={theme.shadows[1]}
      position='relative'
      zIndex={11}
      sx={{
        transition: 'all 0.3s ease',
      }}
    >
      <Box
        position='absolute'
        top={10}
        right={0}
        display='flex'
        alignItems='center'
        justifyContent='center'
        onClick={toggleSidebar}
        sx={{
          cursor: 'pointer',
          transformOrigin: 'center',
          transform: 'translateX(50%)',
          svg: {
            width: 24,
            height: 24,
            transform: `rotate(${isOpened ? 0 : 180}deg)`,
          },
        }}
      >
        <SidebarArrowIcon />
      </Box>
      <Stack
        flex={1}
        sx={{
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            width: '4px',
            bgcolor: 'grey.400',
          },
        }}
      >
        <Box
          p={isOpened ? 2 : 1.5}
          sx={{
            transition: 'all 0.3s ease',
          }}
        >
          <Box
            width={isOpened ? 125 : 24}
            height={24}
            sx={{
              transition: 'transform 0.3s',
              transform: `translateX(${isOpened ? 0 : 12}px)`,
              img: {
                width: '100%',
                objectFit: 'contain',
              },
            }}
          >
            <Link to='/'>
              {isOpened && <img src={logo} alt='logo' />}
              {!isOpened && <img src={logoSmall} alt='logo' />}
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: '4px',
            bgcolor: 'common.white',
            py: 1,
            mx: isOpened ? 2 : 1.5,
            mt: 1,
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5,
            svg: {
              width: 24,
              height: 24,
            },
          }}
        >
          <CorpIcon />
          <Box
            sx={{
              transition: 'all 0.15s ease',
              transitionDelay: isOpened ? '1s' : '0s',
              display: isOpened ? 'block' : 'none',
              height: isOpened ? '20px' : 0,
            }}
          >
            <Typography fontWeight={500} color='#040D12' whiteSpace='nowrap'>
              InMetal Inc
            </Typography>
          </Box>
        </Box>
        <Stack mb={3} spacing={1}>
          {mainMenu.map(item => (
            <SidebarItem isOpened={isOpened} key={item.title} data={item} />
          ))}
        </Stack>
        <Stack mt='auto' spacing={1} pb={2}>
          {systemMenu.map(item => (
            <SidebarItem isOpened={isOpened} key={item.title} data={item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

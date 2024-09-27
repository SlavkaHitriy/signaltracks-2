import { Stack } from '@mui/material'
import { DefaultInput } from '@/ui/DefaultInput'
import { DefaultIconButton } from '@/ui/DefaultIconButton'
import { SearchIcon } from '@/assets/icons/SearchIcon.jsx'

export const SearchInput = ({ sx, name }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Stack
      direction='row'
      sx={{
        border: '1px solid',
        borderColor: 'neutral.50',
        borderRadius: '4px',
        width: '100%',
        overflow: 'hidden',
        height: 36,
        ...sx,
      }}
      component='form'
      onSubmit={handleSubmit}
    >
      <DefaultIconButton
        icon={<SearchIcon />}
        type='submit'
        sx={{
          width: 36,
          borderRadius: 0,
          color: 'neutral.100',
          border: 0,
        }}
      />
      <DefaultInput
        placeholder='Search...'
        name={name}
        sx={{
          width: '100%',
          '.MuiInputBase-root::before': {
            display: 'none',
          },
          '.MuiInputBase-root': {
            pr: 2,
            '&::after': {
              bottom: 1.5,
            },
          },
          '.MuiInputBase-input': {
            fontSize: 14,
            borderRadius: 0,
            border: 0,
            height: '36px',
          },
        }}
      />
    </Stack>
  )
}

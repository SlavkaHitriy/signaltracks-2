import { createTheme } from '@mui/material'
import shadows from '@mui/material/styles/shadows'

export const theme = createTheme({
  palette: {
    accents: {
      blue: '#1E75FF',
      darkBlue: '#677AF0',
      yellow: '#FFBC24',
    },
    background: '#FFFFFF',
    error: {
      main: '#FF3941',
    },
    success: {
      main: '#18AB87',
    },
    main: '#151D26',
    neutral: {
      50: '#E6E7E8',
      100: '#B2B6B8',
      200: '#8C9295',
      300: '#586065',
      400: '#374147',
      500: '#051219',
      700: '#040D12',
    },
  },
  shadows: {
    ...shadows,
    0: 'none',
    1: '0px 3px 6px rgba(0 0 0 / 16%)',
  },
  typography: {
    allVariants: {
      fontSize: 14,
      color: '#374147',
    },
    body: {
      fontSize: 14,
      color: '#374147',
      fontWeight: 400,
      lineHeight: '16px',
    },
    bodyMedium: {
      fontSize: 14,
      color: '#374147',
      fontWeight: 500,
      lineHeight: '16px',
    },
    caption: {
      fontSize: 10,
      color: '#051219',
      fontWeight: 400,
      lineHeight: '12px',
    },
    footnote: {
      fontSize: 12,
      color: '#374147',
      fontWeight: 400,
      lineHeight: '14px',
    },
    footnoteMedium: {
      fontSize: 12,
      color: '#374147',
      fontWeight: 500,
      lineHeight: '14px',
    },
    h1: {
      fontSize: 32,
      color: '#051219',
      fontWeight: 500,
      lineHeight: '38px',
    },
    h3: {
      fontSize: 20,
      color: '#051219',
      fontWeight: 500,
      lineHeight: '24px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#1F243B',
          color: '#fff',
          fontWeight: 700,
        },
        outlinedPrimary: {
          '&:hover': {
            background: '#353B56',
          },
        },
        outlinedSuccess: {
          borderColor: '#F1F1F1',
          background: '#F1F1F1',
          color: '#151D26',
          '&:hover': {
            color: '#fff',
            background: '#18c097',
            borderColor: '#24D5AA',
          },
        },
        outlinedError: {
          borderColor: '#F06566',
          background: '#F06566',
          '&:hover': {
            background: '#ED373B',
            borderColor: '#ED373B',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: 0,
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            padding: 0,
          },
          '& .MuiOutlinedInput-input': {
            color: '#151D26',
            '&::placeholder': {
              color: '#8F98AB',
              opacity: 1,
            },
          },
        },
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E6E7E8',
          padding: '6px 8px',
          height: 'auto',
        },
        label: {
          color: '#374147',
          fontSize: 10,
          lineHeight: '12px',
          padding: 0,
        },
      },
    },
  },
  textareaAutosize: {},
})

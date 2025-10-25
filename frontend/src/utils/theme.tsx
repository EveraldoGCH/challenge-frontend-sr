import { createTheme, ThemeOptions } from '@mui/material/styles'

import { colors } from '../constants/colors'

const defaultTheme = createTheme()

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
    disabled: Palette['primary']
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary']
    disabled?: PaletteOptions['primary']
  }
}

const customThemeOptions: ThemeOptions = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          textTransform: 'initial',
          boxShadow: 'none !important',
          padding: '12px 18px',
          textWrap: 'nowrap',
          overflowX: 'hidden',
          '&:hover': {
            opacity: 0.9,
            transition: 'opacity 0.6s ease-in-out',
          },
          '&.Mui-disabled': {
            // background: colors.cellBorderInitial,
            color: colors.textDisabled,
          },
        },
        outlined: {
          border: `1px solid ${colors.textPrimary}`,
          color: '#D42D35',
          '& .MuiCircularProgress-root': {
            color: colors.textPrimary,
          },
          '&:hover': {
            border: `1px solid ${colors.greyDark}`,
            backgroundColor: 'rgba(27, 27, 27, 0.10)',
            transition: 'background-color 0.3s ease',
          },
          '&.Mui-disabled': {
            color: colors.textDisabled,
            border: `1px solid #BEBEBE`,
          },
          '&.loading-true': {
            backgroundColor: 'rgba(27, 27, 27, 0.20)',
            border: `1px solid ${colors.textPrimary}`,
          },
          '&.MuiButton-colorPrimary': {
            background: 'transparent',
            border: `1px solid ${colors.textPrimary}`,
            color: colors.textPrimary,

            '& .MuiCircularProgress-root': {
              color: colors.textPrimary,
            },
            '&:hover': {
              backgroundColor: 'rgba(27, 27, 27, 0.10)',
              transition: 'background-color 0.3s ease',
            },
            '&.Mui-disabled': {
              background: 'transparent',
              color: colors.textDisabled,
              border: `1px solid ${colors.textDisabled}`,
            },
            '&.loading-true': {
              backgroundColor: 'rgba(27, 27, 27, 0.10)',
              boxShadow: 'none',
              border: `1px solid ${colors.textPrimary}`,
            },
          },
          '&.MuiButton-colorError': {
            border: `1px solid #D42D35 !important`,
            color: colors.errorMain,
            '& .MuiCircularProgress-root': {
              color: '#D42D35',
            },
            '&:hover': {
              backgroundColor: 'rgba(212, 45, 53, 0.10)',
              transition: 'background-color 0.3s ease',
            },
            '&.Mui-disabled': {
              background: colors.greyLight,
              color: colors.textDisabled,
              border: `1px solid #BEBEBE`,
            },
            '&.loading-true': {
              backgroundColor: 'rgba(212, 45, 53, 0.20)',
              boxShadow: 'none',
              border: `1px solid #D42D35`,
            },
          },
        },
        text: {
          boxShadow: 'none',
          color: colors.textPrimary,
          borderRadius: '8px',
          '& .MuiCircularProgress-root': {
            color: colors.textPrimary,
          },
          '&:hover': {
            backgroundColor: '#E1DFDC',
            transition: 'background-color 0.3s ease',
          },
          '&.Mui-disabled': {
            background: 'transparent',
          },
          '&.loading-true': {
            backgroundColor: 'rgba(27, 27, 27, 0.20)',
          },
          '&.MuiButton-colorError': {
            color: '#D42D35',
            '& .MuiCircularProgress-root': {
              color: colors.errorMain,
            },
            '&:hover': {
              backgroundColor: 'rgba(212, 45, 53, 0.10) ',
            },
            '&.Mui-disabled': {
              background: 'transparent',
              color: '#BEBEBE',
            },
            '&.loading-true': {
              backgroundColor: 'rgba(212, 45, 53, 0.20)',
            },
          },
        },
        contained: ({ theme }) => ({
          fill: theme.palette.primary.contrastText,
          borderRadius: '6px',
          '& .MuiCircularProgress-root': {
            color: 'white',
          },
          '&.loading-true': {
            backgroundColor: colors.primaryMain,
            boxShadow: 'none',
          },
          '&:hover': {
            backgroundColor: colors.primaryMain,
            boxShadow: 'none',
          },
          '&.MuiButton-colorSecondary': {
            backgroundColor: colors.greyLight,
            color: colors.textPrimary,
            '&:hover': {
              backgroundColor: 'rgba(27, 27, 27, 0.10)',
              boxShadow: 'none',
            },
            '&.Mui-disabled': {
              background: colors.greyLight,
              color: colors.textDisabled,
            },
            '& .MuiCircularProgress-root': {
              color: 'black',
            },
          },
          '&.MuiButton-colorError': {
            backgroundColor: '#D42D35',
            color: 'white',
            '&.Mui-disabled': {
              background: colors.greyLight,
              color: colors.textDisabled,
            },
            '&.loading-true': {
              backgroundColor: '#D42D35',
              boxShadow: 'none',
            },
          },
        }),
        sizeSmall: {
          fontSize: defaultTheme.typography.pxToRem(12),
          lineHeight: defaultTheme.typography.pxToRem(24),
          padding: '0px 8px',

          startIcon: {
            '& svg': {
              width: 16,
              height: 16,
            },
          },
          endIcon: {
            '& svg': {
              width: 16,
              height: 16,
            },
          },
          //Esto es para que si el boton esta loading el spinner se vea bien
          '& .MuiCircularProgress-root': {
            width: '16px !important',
            height: '16px !important',
          },
        },
        sizeMedium: {
          fontSize: defaultTheme.typography.pxToRem(12),
          lineHeight: defaultTheme.typography.pxToRem(24),
          padding: '4px 12px',
          startIcon: {
            '& svg': {
              width: 20,
              height: 20,
            },
          },
          endIcon: {
            '& svg': {
              width: 20,
              height: 20,
            },
          },
        },
        sizeLarge: {
          fontSize: defaultTheme.typography.pxToRem(14),
          lineHeight: defaultTheme.typography.pxToRem(24),
          padding: '8px 16px',
          maxHeight: '40px',
          minHeight: '40px',
          [defaultTheme.breakpoints.up('lg')]: {
            minWidth: '96px',
          },
          startIcon: {
            '& svg': {
              width: 24,
              height: 24,
            },
          },
          endIcon: {
            '& svg': {
              width: 24,
              height: 24,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': { background: 'white' },
          '& .MuiInputBase-sizeSmall': {
            height: '40px',
          },
          '& .MuiInputBase-multiline': {
            height: 'auto',
            fontSize: '14px',
          },
          '& .MuiSelect-select': {
            padding: '0 0 0 3px !important',
            fontSize: '14px',
          },
          '& .MuiFormHelperText-root': {
            margin: '0',
            marginLeft: '8px',
            '& svg': {
              marginRight: '8px',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            opacity: 0.5, // Placeholder visible por defecto
            fontSize: defaultTheme.typography.pxToRem(14),
          },
          '&:has(.MuiInputLabel-root) .MuiInputBase-input:not(:focus)::placeholder':
            {
              opacity: 0, // Esconde placeholder si hay label y no está enfocado
            },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          '& .MuiAlert-message': {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
          },
          '&.MuiAlert-standard': {
            backgroundColor: 'white',
            color: colors.textSecondary,
            border: `1px solid ${colors.greyLight}`,
            borderRadius: '12px',
            padding: '16px',
            alignItems: 'flex-start',

            '& .MuiAlert-icon': {
              color: colors.textPrimary,
            },
          },
          '&.MuiAlert-standardWarning': {
            backgroundColor: colors.errorLight,
            border: `1px solid #FFE27C`,
            borderRadius: '12px',
            color: '#ED5E2A',
            '& .MuiAlert-icon': {
              color: '#ED5E2A',
              alignItems: 'center',
            },
            '& .MuiAlertTitle-root': {
              color: '#ED5E2A',
            },
            '& .MuiAlert-message': {
              color: colors.textSecondary,
            },
          },
          '&.MuiAlert-standardError': {
            backgroundColor: '#FFF5F3',
            border: `1px solid ${colors.errorLight}`,
            borderRadius: '12px',
            color: colors.textDisabled,
            '& .MuiAlert-icon': {
              color: colors.errorMain,
              alignItems: 'center',
            },
            '& .MuiAlertTitle-root': {
              color: colors.errorMain,
            },
            '& .MuiAlert-message': {
              color: colors.textSecondary,
            },
          },
        },
        message: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '14px',
        },
      },
    },
    MuiTypography: {
      defaultProps: { color: colors.textPrimary },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltipArrow: {
          background: 'black',
          borderRadius: '8px',
          padding: '4px 8px',
          color: 'white',
          fontSize: 12,
        },
        arrow: {
          '&:before': {
            color: 'black',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
  },
  typography: {
    fontFamily:
      "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    h1: {
      fontSize: defaultTheme.typography.pxToRem(56),
      fontWeight: 400,
      lineHeight: '64px',
      letterSpacing: '-1px',
      color: colors.textPrimary,
    },
    h2: {
      fontSize: defaultTheme.typography.pxToRem(32),
      fontWeight: 400,
      lineHeight: '38px',
      letterSpacing: '-1px',
      color: '#1B1B1B',
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: '400',
      lineHeight: '24px',
      color: '#1B1B1B',
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: '400',
      lineHeight: '24px',
      color: '#1B1B1B',
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: 400,
      lineHeight: '20px',
      color: '#1B1B1B',
    },
    subtitle2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 600,
      lineHeight: '20px',
      color: colors.textPrimary,
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '-0.1px',
      color: colors.textPrimary,
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '-0.1px',
      color: colors.textPrimary,
    },
    button: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 500,
      lineHeight: '16px',
      color: colors.textPrimary,
    },
  },
})

export default customThemeOptions

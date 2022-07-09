import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#010101',
    },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#010101',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '16px',
          fontWeight: 300,
          borderRadius: 8,
          ':hover': {
            backgroundColor: '#35353588',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#010101',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          textTransform: 'uppercase',
          fontFamily: 'Domine',
          fontSize: 65,
          fontWeight: 700,
          letterSpacing: '0.4em',
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
        },
        subtitle1: {
          textTransform: 'uppercase',
          fontFamily: 'Domine',
          color: '#fff',
          opacity: 0.9,
          fontSize: 20,
          fontWeight: 400,
        },
        subtitle2: {
          fontFamily: 'Domine',
          color: '#fff',
          opacity: 0.9,
          fontSize: 16,
          fontWeight: 400,
        },
        body2: {
          fontSize: 18,
          lineHeight: 1.8,
          opacity: 0.9,
        },
      },
    },
  },
});

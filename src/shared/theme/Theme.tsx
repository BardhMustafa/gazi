import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const Theme = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#113355',
        contrastText: '#ffffff',
      },
    },
    typography: {

      h1: {
        fontSize: '3.2rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2.6rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '2,2rem',
        fontWeight: 500,
      },
      h4: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.6rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1.3rem',
      },
      subtitle1: {
        fontSize: '1.3rem',
      },
      body1: {
        fontSize: '1.3rem',
      },
      body2: {
        fontSize: '1.1rem',
      },
      caption: {
        fontSize: '1.1rem',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: 12,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1.4rem',
            fontWeight: 500,
            textTransform: 'none',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: '1.4rem',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: '2rem',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            padding: '1rem',
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            fontSize: '2.4rem',
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            fontSize: '1.6rem',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              fontSize: '1.6rem',
            },
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

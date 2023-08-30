// custom theme code here
import { ThemeOptions } from "@mui/material/styles";
export const allColors = {
  copyright: "#A5A4BF",
  black: "#000",
  white: "#ffffff",
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#FF5016",
      light: "#C6BBCA",
      dark: "#FF5516",
    },
    secondary: {
      main: "#101131",
    },
    text: {
    //   primary: "#312A34",
    //   secondary: "#5E5563",
    //   disabled: "#777777",
    },
    info: {
      main: "#0058E5",
    },
    warning: {
      main: "#F2AF4C",
    },
    success: {
      main: "#5DC983",
    },
    error: {
      main: "#E9394F",
    },
    divider: "#E4DBE8",
  },
  typography: {
    fontFamily: "Georama",
    h6: {
      fontSize: "0.8rem",
      //fontWeight: 700,
      lineHeight: "1rem",
    },
    h5: {
      fontSize: "1.2rem",
      //fontWeight: 700,
      lineHeight: "1.4rem",
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 700,
      lineHeight: "2rem",
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 700,
      lineHeight: "2.4rem",
    },
    h2: {
      fontSize: "2.8rem",
      fontWeight: 700,
      lineHeight: "2.9rem",
    },
    h1: {
      fontSize: "3.2rem",
      fontWeight: 600,
      lineHeight: "3.4rem",
    },
  },
  components: {
      MuiButton: {
        styleOverrides: {
            root: {
              height:'56px'
            },
          }
        },
      //   MuiTextField: {
      //     styleOverrides: {
      //       root: {
      //         '&:hover fieldset': {
      //           // borderColor: '#0058E5',
      //         },
      //       }
      //     }
      // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 480,
      laptop: 767,
      desktop: 1024,
    },
  },
};

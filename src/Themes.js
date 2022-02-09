import { createTheme, styled } from "@material-ui/core/styles";
import { Select, MenuItem } from "@mui/material";

const typogr = createTheme({
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: "2.5em",
      fontFamily: "Montserrat"
    },
    h2: {
      fontWeight: 800,
      fontSize: "1.35em",
      fontFamily: "Montserrat",
      paddingBottom: 15
    },
    h3: {
      fontWeight: 800,
      fontSize: "0.9em",
      fontFamily: "Montserrat",
      margin: 0,
      padding: 0,
      paddingBottom: 6
    },
    h4: {
      fontWeight: 700,
      fontSize: "0.75em",
      fontFamily: "Montserrat",
      paddingTop: 3,
      paddingBottom: 3
    },
    textArea: {
      fontWeight: 500,
      fontSize: "0.68em",
      fontFamily: "Montserrat"
    },
    orderNumber: {
      fontWeight: 700,
      fontSize: "2.75em",
      fontFamily: "Montserrat",
      margin: 0,
      padding: 0
    },
    offerLabel: {
      fontWeight: 400,
      fontSize: "0.8em",
      fontFamily: "Montserrat"
    },
    offerLabelTitle: {
      fontWeight: 700,
      fontSize: "0.8em",
      fontFamily: "Montserrat"
    },
    buttonLabel: {
      fontWeight: 700,
      fontSize: "1em",
      fontFamily: "Montserrat"
    },
    noData: {
      fontWeight: 400,
      fontSize: "1.25em",
      fontFamily: "Montserrat"
    },
    account: {
      fontWeight: 600,
      fontSize: "1em",
      fontFamily: "Montserrat"
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fdaa4a"
    },
    secondary: {
      main: "#f50057"
    },
    background: {
      default: "#312E2B",
      paper: "#26211b",
      header: "#1B1712"
    },
    text: {
      primary: "rgba(253,170,74,1)",
      secondary: "rgba(255,255,255,1)",
      header: "rgba(253,170,74,1)",
      widgetHeader: "rgba(253,170,74,1)",
      caption: "rgba(160,160,160,1)",
      buttonText: "rgba(244, 121, 51, 1)"
    },
    button: {
      selected: "#1B1712",
      hover: "#211C16"
    }
  },
  typography: typogr.typography
});

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fdaa4a"
    },
    secondary: {
      main: "#F47933"
    },
    background: {
      default: "#fff8ef",
      paper: "#ffffff",
      header: "#FFE1BA"
    },
    text: {
      primary: "rgba(253,170,74,1)",
      secondary: "rgba(0,0,0,1)",
      header: "rgba(0,0,0,1)",
      widgetHeader: "rgba(253,170,74,1)",
      caption: "rgba(160,160,160,1)",
      buttonText: "rgba(244, 121, 51, 1)"
    },
    button: {
      selected: "#FFE1BA",
      hover: "#ffeed6"
    }
  },
  typography: typogr.typography
});

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.buttonText,
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "Montserrat"
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.buttonText,
  fontSize: 13,
  fontFamily: "Montserrat",
  fontWeight: 500,
  height: 30,
  width: 160,
  "& .MuiSelect-icon": {
    color: theme.palette.text.buttonText
  },
  "&& fieldset": {
    border: "1px solid #FDAA4A"
  },
  "&:hover": {
    "&& fieldset": {
      border: "1px solid #F47933"
    }
  }
}));

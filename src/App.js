import React from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Header } from "./components/dashboard/Header";
import { Login } from "./components/login/Login";
import { Paper } from "@material-ui/core";
import i18n from "translations/i18n";
import "./styles.css";
import { lightTheme, darkTheme } from "./Themes.js";
import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerFeedback from "./components/subpages/CustomerFeedback.js";
import ReturnedOrders from "./components/subpages/ReturnedOrders.js";
import UnpaidOrders from "./components/subpages/UnpaidOrders.js";
import UnshippedOrders from "./components/subpages/UnshippedOrders.js";
import MyAccount from "./components/subpages/MyAccount.js";

export const Language = {
  Polish: "pl",
  English: "en"
};

export const Theme = {
  LightTheme: "light",
  DarkTheme: "dark"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    i18n.changeLanguage(Language.Polish);

    this.usernameField = React.createRef();
    this.passwordField = React.createRef();

    this.state = {
      theme: Theme.LightTheme,
      language: Language.Polish,
      username: ""
    };
  }

  themeButtonHandler = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  getTheme = () => {
    return this.state.theme === Theme.DarkTheme ? darkTheme : lightTheme;
  };

  languageButtonHandler = (newLang) => {
    i18n.changeLanguage(newLang);
    this.setState({ language: newLang });
  };

  loginButtonHandler = (e) => {
    this.setState({
      username: "eshop-elektronika" //this.usernameField.current.value
    });
  };

  logoutHandler = (e) => {
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={this.getTheme()}>
          <GlobalStyles
            styles={{
              body: {
                backgroundColor: this.getTheme().palette.background.default
              }
            }}
          />
          <Paper
            sx={{
              bgcolor: "background.default",
              width: "100%",
              height: this.state.username.length === 0 ? "100vh" : "100%",
              boxShadow: 0,
              WebkitBorderRadius: 0
            }}
            className="App"
          >
            <Header
              logged={this.state.username.length !== 0}
              handlers={{
                languageButtonHandler: this.languageButtonHandler,
                themeButtonHandler: this.themeButtonHandler,
                logoutHandler: this.logoutHandler
              }}
            />
            <Routes>
              <Route
                path="/"
                element={
                  this.state.username.length === 0 ? (
                    <Login
                      usernameRef={this.usernameField}
                      passwordRef={this.passwordField}
                      loginHandler={this.loginButtonHandler}
                    />
                  ) : (
                    <Dashboard username={this.state.username} />
                  )
                }
              />
              <Route path="/unshippedorders" element={<UnshippedOrders />} />
              <Route path="/unpaidorders" element={<UnpaidOrders />} />
              <Route path="/returnedorders" element={<ReturnedOrders />} />
              <Route path="/customerfeedback" element={<CustomerFeedback />} />
              <Route path="/account" element={<MyAccount />} />
            </Routes>
          </Paper>
        </ThemeProvider>
      </Router>
    );
  }
}

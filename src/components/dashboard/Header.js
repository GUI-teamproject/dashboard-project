import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import { Paper, Menu, MenuItem } from "@material-ui/core";
import "./header.css";
import { Typography, IconButton } from "@mui/material";
import { sun, moon, polish, english, account } from "./widgets/icons/images.js";
import { Theme, Language } from "App.js";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Translation>
        {(t) => (
          <Paper
            sx={{
              boxShadow: "none",
              bgcolor: "background.header"
            }}
            className="Header"
            square="true"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{ color: "text.header" }}
                variant="h1"
                className="headerLabel"
              >
                Dashboard
              </Typography>
            </Link>

            <HeaderMenu
              logged={this.props.logged}
              handlers={{
                languageButtonHandler: this.props.handlers
                  .languageButtonHandler,
                themeButtonHandler: this.props.handlers.themeButtonHandler,
                logoutHandler: this.props.handlers.logoutHandler
              }}
            />
          </Paper>
        )}
      </Translation>
    );
  }
}

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeImage: moon,
      langImage: english
    };
  }

  changeTheme = (e) => {
    e.preventDefault();
    if (this.state.themeImage === moon) {
      this.setState({ themeImage: sun });
      this.props.handlers.themeButtonHandler(Theme.DarkTheme);
    } else {
      this.setState({ themeImage: moon });
      this.props.handlers.themeButtonHandler(Theme.LightTheme);
    }
  };

  changeLanguage = (e) => {
    e.preventDefault();
    if (this.state.langImage === english) {
      this.setState({ langImage: polish });
      this.props.handlers.languageButtonHandler(Language.English);
    } else {
      this.setState({ langImage: english });
      this.props.handlers.languageButtonHandler(Language.Polish);
    }
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="HeaderMenu">
            <IconButton onClick={this.changeTheme}>
              <img
                className="HeaderImage"
                src={this.state.themeImage}
                alt="themeImage"
              />
            </IconButton>
            <IconButton onClick={this.changeLanguage}>
              <img
                className="HeaderImage"
                src={this.state.langImage}
                alt="langImage"
              />
            </IconButton>
            {this.props.logged ? (
              <AccountMenu logoutHandler={this.props.handlers.logoutHandler} />
            ) : null}
          </div>
        )}
      </Translation>
    );
  }
}

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    props.logoutHandler();
  };

  return (
    <Translation>
      {(t) => (
        <div>
          <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img className="HeaderImage" src={account} alt="accountImage" />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
          >
            <Link to="/account" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>
                <Typography
                  sx={{ fontSize: "0.85em" }}
                  variant="offerLabelTitle"
                  color="text.widgetHeader"
                >
                  {t("myAccount")}
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleLogout}>
                <Typography
                  sx={{ fontSize: "0.85em" }}
                  variant="offerLabelTitle"
                  color="#e03131"
                >
                  {t("logout")}
                </Typography>
              </MenuItem>
            </Link>
          </Menu>
        </div>
      )}
    </Translation>
  );
}

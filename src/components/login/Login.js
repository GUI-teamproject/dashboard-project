import React from "react";
import { withTranslation } from "react-i18next";
import { Translation } from "react-i18next";
import "./login.css";
import {
  Paper,
  TextField,
  InputAdornment,
  Button,
  Typography
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#FDAA4A"),
  backgroundColor: "#FDAA4A",
  "&:hover": {
    backgroundColor: "#F47933"
  }
}));

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Translation>
        {(t) => (
          <div id="page">
            <Paper
              className="Login"
              sx={{
                boxShadow: 4,
                borderRadius: 5,
                bgcolor: "background.paper"
              }}
            >
              <div id="user-input">
                <TextField
                  inputRef={this.props.usernameRef}
                  label={t("username")}
                  placeholder={t("username")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div id="user-input">
                <TextField
                  inputRef={this.props.passwordRef}
                  label={t("password")}
                  placeholder={t("password")}
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <ColorButton
                id="login-button"
                variant="contained"
                onClick={this.props.loginHandler}
              >
                <Typography variant="buttonLabel">{t("login")}</Typography>
              </ColorButton>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

export default withTranslation()(Login);

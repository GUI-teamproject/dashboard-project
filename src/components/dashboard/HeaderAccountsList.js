import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import { Tab, Tabs, Paper, Typography } from "@material-ui/core";
import "./header.css";

export class HeaderAccountsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "one"
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <Paper
            sx={{
              bgcolor: "background.default",
              boxShadow: 0,
              maxWidth: "100%"
            }}
            className="HeaderAccountsList"
          >
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              value={this.props.account}
              onChange={this.props.linkedAccountChanged}
              TabIndicatorProps={{ style: { backgroundColor: "black" } }}
            >
              {this.props.linkedAccounts.map((account) => (
                <Tab
                  key={account}
                  value={account}
                  label={<Typography variant="account">{account}</Typography>}
                />
              ))}
            </Tabs>
          </Paper>
        )}
      </Translation>
    );
  }
}

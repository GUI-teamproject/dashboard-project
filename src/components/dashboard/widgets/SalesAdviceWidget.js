import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import "./widgets.css";
import { Paper, Typography } from "@mui/material/";

export class SalesAdviceWidget extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="SalesAdviceWidget">
            <Paper
              sx={{
                boxShadow: 4,
                borderRadius: 5,
                bgcolor: "background.paper",
                width: "100%",
                height: "100%"
              }}
            >
              <div className="WidgetsPadding">
                <Typography
                  variant="h2"
                  align="left"
                  sx={{ color: "text.widgetHeader" }}
                >
                  {t("salesAdvice")}
                </Typography>
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

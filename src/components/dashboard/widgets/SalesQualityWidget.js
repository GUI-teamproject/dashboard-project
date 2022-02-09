import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import "./widgets.css";
import { Paper, Typography } from "@mui/material";

export class SalesQualityWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="SalesQualityWidget">
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
                  {t("salesQuality")}
                </Typography>
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

import React from "react";
import "translations/i18n";
import { Box, FormControl, Rating, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./css/CustomerFeedbackWidget.css";
import "./widgets.css";
import { Translation } from "react-i18next";
import { CustomSelect, CustomMenuItem } from "Themes.js";
import { best, good, medium, bad, worst } from "./icons/images.js";
import { Link } from "react-router-dom";
import FolderOffIcon from "@mui/icons-material/FolderOff";

const FeedbackType = {
  All: "all",
  Positive: "positive",
  Negative: "negative"
};

export class CustomerFeedbackWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbackType: FeedbackType.All
    };
  }

  handleChange = (e) => {
    this.setState({ feedbackType: e.target.value });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="CustomerFeedbackWidget">
            <Paper
              sx={{
                boxShadow: 4,
                borderRadius: 5,
                backgroundColor: "background.paper",
                width: "100%",
                height: "100%"
              }}
            >
              <div
                className="WidgetsPadding"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <div id="customerFeedbackHeader">
                  <Link
                    to="customerfeedback"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h2"
                      sx={{ color: "text.widgetHeader" }}
                    >
                      {t("customerFeedback")}
                    </Typography>
                  </Link>
                  <FormControl>
                    <CustomSelect
                      value={this.state.feedbackType}
                      onChange={this.handleChange}
                      disabled={Object.keys(this.props.data).length === 0}
                    >
                      <CustomMenuItem value={FeedbackType.All}>
                        {t("all")}
                      </CustomMenuItem>
                      <CustomMenuItem value={FeedbackType.Positive}>
                        {t("positive")}
                      </CustomMenuItem>
                      <CustomMenuItem value={FeedbackType.Negative}>
                        {t("negative")}
                      </CustomMenuItem>
                    </CustomSelect>
                  </FormControl>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "17px"
                  }}
                >
                  {Object.keys(this.props.data).length !== 0 ? (
                    (this.state.feedbackType === FeedbackType.All
                      ? this.props.data.all
                      : this.state.feedbackType === FeedbackType.Positive
                      ? this.props.data.positive
                      : this.props.data.negative
                    ).map((customerFeedback) => (
                      <CustomerFeedback
                        key={customerFeedback.date}
                        data={customerFeedback}
                      />
                    ))
                  ) : (
                    <div style={{ height: 500 }} id="noDataInfo">
                      <FolderOffIcon sx={{ fontSize: 120, paddingBottom: 1 }} />
                      <Typography variant="noData">{t("noData")}</Typography>
                    </div>
                  )}
                </div>
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty": {
    color: theme.palette.text.caption
  }
}));

class CustomerFeedback extends React.Component {
  constructor(props) {
    super(props);
  }

  getImage = () => {
    var value = this.props.data.value;
    if (value <= 1) {
      return worst;
    } else if (value <= 2) {
      return bad;
    } else if (value <= 3) {
      return medium;
    } else if (value <= 4) {
      return good;
    } else {
      return best;
    }
  };

  render() {
    var current = new Date();
    var minutes = Math.floor(
      (current - this.props.data.date.getTime()) / 1000 / 60
    );
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    return (
      <Translation>
        {(t) => (
          <Box
            className="CustomerFeedback"
            sx={{
              height: 105,
              borderRadius: 5
            }}
          >
            <div id="imageColumn">
              <img id="ratingImage" src={this.getImage()} alt="good" />
            </div>
            <div id="secondColumn">
              <div id="rateDateLine">
                <StyledRating
                  size="small"
                  sx={{ outlineColor: "#000" }}
                  value={this.props.data.value}
                  precision={0.5}
                  readOnly
                />
                <Typography
                  color="text.caption"
                  variant="textArea"
                  id="feedbackDate"
                >
                  {minutes < 60
                    ? t("minutes_interval", {
                        postProcess: "interval",
                        count: minutes
                      })
                    : hours >= 24
                    ? t("days_interval", {
                        postProcess: "interval",
                        count: days
                      })
                    : t("hours_interval", {
                        postProcess: "interval",
                        count: hours
                      })}
                </Typography>
              </div>
              <Typography
                variant="h4"
                color="text.secondary"
                id="feedbackTitle"
              >
                {this.props.data.title}
              </Typography>
              <Typography
                sx={{ wordBreak: "break-word" }}
                color="text.secondary"
                variant="textArea"
                id="feedbackText"
              >
                {this.props.data.text}
              </Typography>
              <Typography
                color="text.caption"
                variant="textArea"
                id="clientName"
              >
                {t("by")} {this.props.data.clientName}
              </Typography>
            </div>
          </Box>
        )}
      </Translation>
    );
  }
}

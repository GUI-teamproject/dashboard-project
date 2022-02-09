import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import "./css/OfferRankingWidget.css";
import "./widgets.css";
import { Paper, FormControl, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { CustomSelect, CustomMenuItem } from "Themes.js";
import FolderOffIcon from "@mui/icons-material/FolderOff";

const SortMode = {
  Ascending: "asc",
  Descending: "dsc"
};

export class OfferRankingWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortMode: SortMode.Descending
    };
  }

  changeSortModeHandler = (e) => {
    this.setState({ sortMode: e.target.value });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="OfferRankingWidget">
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
                <div id="offerRankingHeader">
                  <Typography variant="h2" sx={{ color: "text.widgetHeader" }}>
                    {t("offerRanking")}
                  </Typography>
                  <FormControl>
                    <CustomSelect
                      value={this.state.sortMode}
                      onChange={this.changeSortModeHandler}
                      displayEmpty
                      inputProps={{
                        "aria-label": "Without label"
                      }}
                      disabled={
                        this.props.data == null ||
                        Object.keys(this.props.data).length === 0
                      }
                    >
                      <CustomMenuItem value={SortMode.Descending}>
                        {t("offerRankingMostBought")}
                      </CustomMenuItem>
                      <CustomMenuItem value={SortMode.Ascending}>
                        {t("offerRankingLeastBought")}
                      </CustomMenuItem>
                    </CustomSelect>
                  </FormControl>
                </div>
                {this.props.data == null ? (
                  <div id="dataNotDownloaded">
                    {t("couldNotDownloadData")}
                    <IconButton
                      onClick={this.props.refreshHandler}
                      aria-label="refresh"
                    >
                      <RefreshIcon
                        sx={{ height: 30, width: 30 }}
                        color="primary"
                      />
                    </IconButton>
                  </div>
                ) : Object.keys(this.props.data).length !== 0 ? (
                  <OffersList
                    data={this.props.data}
                    sortMode={this.state.sortMode}
                  />
                ) : (
                  <div style={{ height: 300 }} id="noDataInfo">
                    <FolderOffIcon sx={{ fontSize: 120, paddingBottom: 1 }} />
                    <Typography variant="noData">{t("noData")}</Typography>
                  </div>
                )}
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

class OffersList extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div id="offerRankingOffers">
            <div id="offerRankingOffersHeader">
              <div id="offerImageAndName">
                <Typography
                  variant="offerLabelTitle"
                  className="offerText"
                  color="text.secondary"
                  style={{ marginLeft: 5 }}
                >
                  {t("offerRankingImageAndName")}
                </Typography>
              </div>
              <Typography
                color="text.secondary"
                variant="offerLabelTitle"
                id="offerSolds"
              >
                {t("offerRankingSolds")}
              </Typography>
              <Typography
                color="text.secondary"
                variant="offerLabelTitle"
                id="offerTurnoverAndViews"
              >
                {this.props.sortMode === SortMode.Ascending
                  ? t("offerRankingViews")
                  : t("offerRankingTurnover")}
              </Typography>
            </div>
            {(this.props.sortMode === SortMode.Ascending
              ? this.props.data.least
              : this.props.data.most
            ).map((offer) => (
              <Offer key={offer ? offer.name : "empty"} data={offer} />
            ))}
          </div>
        )}
      </Translation>
    );
  }
}

class Offer extends React.Component {
  render() {
    return this.props.data != null ? (
      <Translation>
        {(t) => (
          <div className="Offer">
            <div id="offerImageAndName">
              <img alt="x" id="offerImage" src={this.props.data.image} />
              <Typography
                variant="offerLabel"
                className="offerText"
                color="text.secondary"
                style={{ textAlign: "left" }}
              >
                {this.props.data.name}
              </Typography>
            </div>
            <Typography
              color="text.secondary"
              variant="offerLabel"
              id="offerSolds"
            >
              {this.props.data.sold}
            </Typography>
            <div id="offerTurnoverAndViews">
              <Typography
                color="text.secondary"
                variant="offerLabel"
                className="offerText"
              >
                {this.props.data.turnoverAndViews}
              </Typography>
            </div>
          </div>
        )}
      </Translation>
    ) : (
      <div className="Offer"></div>
    );
  }
}

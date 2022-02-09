import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import "./css/OrderWidgets.css";
import { Paper, Typography } from "@mui/material";
import { unshipped } from "./icons/images.js";
import { Link } from "react-router-dom";

export function UnshippedOrdersWidget(props) {
  return (
    <Translation>
      {(t) => (
        <div className="OrdersWidget">
          <Paper
            sx={{
              boxShadow: 4,
              borderRadius: 5,
              bgcolor: "background.paper",
              width: "100%",
              height: "100%"
            }}
          >
            <div style={{ padding: "15px" }}>
              <div className="ordersColumn">
                <Link to="unshippedorders" style={{ textDecoration: "none" }}>
                  <Typography color="text.widgetHeader" variant="h3">
                    {t("unshippedOrders")}
                  </Typography>
                </Link>
                <div className="ordersDataRow">
                  <Link to="unshippedorders">
                    <img
                      className="orderImage"
                      src={unshipped}
                      alt="unshippedImage"
                    />
                  </Link>
                  <Typography color="text.secondary" variant="orderNumber">
                    {props.data}
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      )}
    </Translation>
  );
}

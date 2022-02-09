import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import "./css/OrderWidgets.css";
import { Paper, Typography } from "@mui/material";
import { unpaid } from "./icons/images.js";
import { Link } from "react-router-dom";

export function UnpaidOrdersWidget(props) {
  return (
    <Translation>
      {(t) => (
        <div className="OrdersWidget">
          <Paper
            sx={{
              boxShadow: 4,
              borderRadius: 5,
              backgroundColor: "background.paper",
              width: "100%",
              height: "100%"
            }}
          >
            <div style={{ padding: "15px" }}>
              <div className="ordersColumn">
                <Link to="/unpaidorders" style={{ textDecoration: "none" }}>
                  <Typography color="text.widgetHeader" variant="h3">
                    {t("unpaidOrders")}
                  </Typography>
                </Link>
                <div className="ordersDataRow">
                  <Link to="/unpaidorders">
                    <img
                      className="orderImage"
                      src={unpaid}
                      alt="unpaidImage"
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

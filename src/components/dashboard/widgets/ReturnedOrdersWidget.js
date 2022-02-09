import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import "./css/OrderWidgets.css";
import Paper from "@mui/material/Paper";
import { returned } from "./icons/images.js";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function ReturnedOrdersWidget(props) {
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
                <Link to="/returnedorders" style={{ textDecoration: "none" }}>
                  <Typography color="text.widgetHeader" variant="h3">
                    {t("returnedOrders")}
                  </Typography>
                </Link>
                <div className="ordersDataRow">
                  <Link to="/returnedorders">
                    <img
                      className="orderImage"
                      src={returned}
                      alt="returnedImage"
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

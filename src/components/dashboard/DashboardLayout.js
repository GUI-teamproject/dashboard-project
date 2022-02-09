import React from "react";
import { Translation } from "react-i18next";
import "translations/i18n";
import { CustomerFeedbackWidget } from "./widgets/CustomerFeedbackWidget";
import { OfferRankingWidget } from "./widgets/OfferRankingWidget";
import { ReturnedOrdersWidget } from "./widgets/ReturnedOrdersWidget";
import { SalesAdviceWidget } from "./widgets/SalesAdviceWidget";
import { SalesChartWidget } from "./widgets/SalesChartWidget";
import { SalesQualityWidget } from "./widgets/SalesQualityWidget";
import { UnpaidOrdersWidget } from "./widgets/UnpaidOrdersWidget";
import { UnshippedOrdersWidget } from "./widgets/UnshippedOrdersWidget";
import "./dashboard.css";

export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="DashboardLayout">
            <div id="left_column_container">
              <SalesChartWidget data={this.props.salesChartData} />
              <OfferRankingWidget
                data={this.props.offerRankingData}
                refreshHandler={this.props.offerRankingRefreshHandler}
              />

              <SalesAdviceWidget />
            </div>

            <div id="right_column_container">
              <div id="orders_and_quality_container">
                <div id="orders_container">
                  <UnpaidOrdersWidget data={this.props.unpaidOrdersData} />
                  <UnshippedOrdersWidget
                    data={this.props.unshippedOrdersData}
                  />
                  <ReturnedOrdersWidget data={this.props.returnedOrdersData} />
                </div>
                <SalesQualityWidget />
              </div>
              <CustomerFeedbackWidget data={this.props.customerFeedbackData} />
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

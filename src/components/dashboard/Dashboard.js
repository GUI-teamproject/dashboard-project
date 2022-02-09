import React from "react";
import { Translation } from "react-i18next";
import { DashboardLayout } from "./DashboardLayout";
import { HeaderAccountsList } from "./HeaderAccountsList";
import DataRequesterMock from "/src/connection/DataRequesterMock.js";
import "./dashboard.css";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.dataRequester = new DataRequesterMock();
    var username = this.props.username;

    this.state = {
      account: username,
      darkMode: true,

      linkedAccounts: this.dataRequester.getLinkedAccounts(username),
      customerFeedbackData: this.dataRequester.getCustomerFeedbackData(
        username
      ),
      offerRankingData: null, //this.dataRequester.getOfferRankingData(username),
      ordersData: this.dataRequester.getOrdersData(username),
      salesAdviceData: null,
      salesChartData: this.dataRequester.getSalesChartData(username),
      salesQualityData: null
    };
  }

  refreshOfferRankingDataHandler = (e) => {
    var data = this.dataRequester.getOfferRankingData(this.state.account);

    if (data != null) {
      this.setState({
        offerRankingData: data
      });
    }
  };

  linkedAccountChanged = (e, newValue) => {
    var username = newValue;

    this.setState({
      account: username,
      customerFeedbackData: this.dataRequester.getCustomerFeedbackData(
        username
      ),
      offerRankingData: this.dataRequester.getOfferRankingData(username),
      ordersData: this.dataRequester.getOrdersData(username),
      salesAdviceData: null,
      salesChartData: this.dataRequester.getSalesChartData(username),
      salesQualityData: null
    });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="Dashboard">
            <HeaderAccountsList
              account={this.state.account}
              linkedAccounts={this.state.linkedAccounts}
              linkedAccountChanged={this.linkedAccountChanged}
            />
            <DashboardLayout
              offerRankingData={this.state.offerRankingData}
              offerRankingRefreshHandler={this.refreshOfferRankingDataHandler}
              customerFeedbackData={this.state.customerFeedbackData}
              salesChartData={this.state.salesChartData}
              unpaidOrdersData={this.state.ordersData.unpaid}
              unshippedOrdersData={this.state.ordersData.unshipped}
              returnedOrdersData={this.state.ordersData.returned}
            />
          </div>
        )}
      </Translation>
    );
  }
}

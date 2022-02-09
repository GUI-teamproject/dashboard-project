import offerRankingDataElektronika from "/src/mockData/eshop-elektronika/offerRanking.js";
import customerFeedbackDataElektronika from "/src/mockData/eshop-elektronika/customerFeedback.js";
import salesChartDataElektronika from "/src/mockData/eshop-elektronika/salesChart.js";
import ordersDataElektronika from "/src/mockData/eshop-elektronika/ordersWidgets.js";
import linkedAccountsElektronika from "/src/mockData/eshop-elektronika/linkedAccounts.js";

import offerRankingDataMeble from "/src/mockData/eshop-meble/offerRanking.js";
import customerFeedbackDataMeble from "/src/mockData/eshop-meble/customerFeedback.js";
import salesChartDataMeble from "/src/mockData/eshop-meble/salesChart.js";
import ordersDataMeble from "/src/mockData/eshop-meble/ordersWidgets.js";
import linkedAccountsMeble from "/src/mockData/eshop-meble/linkedAccounts.js";

import offerRankingDataOdziez from "/src/mockData/eshop-odziez/offerRanking.js";
import customerFeedbackDataOdziez from "/src/mockData/eshop-odziez/customerFeedback.js";
import salesChartDataOdziez from "/src/mockData/eshop-odziez/salesChart.js";
import ordersDataOdziez from "/src/mockData/eshop-odziez/ordersWidgets.js";
import linkedAccountsOdziez from "/src/mockData/eshop-odziez/linkedAccounts.js";

import offerRankingDataEmpty from "/src/mockData/empty/offerRanking.js";
import customerFeedbackDataEmpty from "/src/mockData/empty/customerFeedback.js";
import salesChartDataEmpty from "/src/mockData/empty/salesChart.js";
import ordersDataEmpty from "/src/mockData/empty/ordersWidgets.js";
import linkedAccountsEmpty from "/src/mockData/empty/linkedAccounts.js";

export default class DataRequesterMock {
  getOfferRankingData(account) {
    if (account === "eshop-elektronika") {
      return offerRankingDataElektronika;
    } else if (account === "eshop-meble") {
      return offerRankingDataMeble;
    } else if (account === "eshop-odziez") {
      return offerRankingDataOdziez;
    } else if (
      account === "empty" ||
      account === "empty1" ||
      account === "empty2" ||
      account === "empty3"
    ) {
      return offerRankingDataEmpty;
    }
  }
  getCustomerFeedbackData(account) {
    if (account === "eshop-elektronika") {
      return customerFeedbackDataElektronika;
    } else if (account === "eshop-meble") {
      return customerFeedbackDataMeble;
    } else if (account === "eshop-odziez") {
      return customerFeedbackDataOdziez;
    } else if (
      account === "empty" ||
      account === "empty1" ||
      account === "empty2" ||
      account === "empty3"
    ) {
      return customerFeedbackDataEmpty;
    }
  }
  getSalesChartData(account) {
    if (account === "eshop-elektronika") {
      return salesChartDataElektronika;
    } else if (account === "eshop-meble") {
      return salesChartDataMeble;
    } else if (account === "eshop-odziez") {
      return salesChartDataOdziez;
    } else if (
      account === "empty" ||
      account === "empty1" ||
      account === "empty2" ||
      account === "empty3"
    ) {
      return salesChartDataEmpty;
    }
  }
  getOrdersData(account) {
    if (account === "eshop-elektronika") {
      return ordersDataElektronika;
    } else if (account === "eshop-meble") {
      return ordersDataMeble;
    } else if (account === "eshop-odziez") {
      return ordersDataOdziez;
    } else if (
      account === "empty" ||
      account === "empty1" ||
      account === "empty2" ||
      account === "empty3"
    ) {
      return ordersDataEmpty;
    }
  }
  getLinkedAccounts(account) {
    if (account === "eshop-elektronika") {
      return linkedAccountsElektronika;
    } else if (account === "eshop-meble") {
      return linkedAccountsMeble;
    } else if (account === "eshop-odziez") {
      return linkedAccountsOdziez;
    } else if (
      account === "empty" ||
      account === "empty1" ||
      account === "empty2" ||
      account === "empty3"
    ) {
      return linkedAccountsEmpty;
    }
  }
}

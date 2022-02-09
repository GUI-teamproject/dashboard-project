import React from "react";
import { Translation } from "react-i18next";

export default class UnshippedOrders extends React.Component {
  render() {
    return <Translation>{(t) => <h1>{t("customerFeedback")}</h1>}</Translation>;
  }
}

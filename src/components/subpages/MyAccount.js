import React from "react";
import { Translation } from "react-i18next";

export default class MyAccount extends React.Component {
  render() {
    return <Translation>{(t) => <h1>{t("myAccount")}</h1>}</Translation>;
  }
}

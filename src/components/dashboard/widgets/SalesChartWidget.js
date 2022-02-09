import React from "react";
import { useCallback } from "react";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import "translations/i18n";
import "./css/SalesChartWidget.css";
import "./widgets.css";
import {
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Avatar
} from "@mui/material";
import { column_chart, line_chart } from "./icons/images.js";
import ReactEcharts from "echarts-for-react";
import { CustomSelect, CustomMenuItem } from "Themes.js";
import { styled } from "@mui/material/styles";
import FolderOffIcon from "@mui/icons-material/FolderOff";

const ChartType = {
  Line: "line",
  Bar: "bar"
};

const Measurement = {
  Turnover: "turnover",
  SalesNumber: "salesnumber"
};

const TimeRange = {
  Day: "day",
  Week: "week",
  Year: "year"
};

export class SalesChartWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartType: ChartType.Bar,
      measurement: Measurement.SalesNumber,
      previousPeriod: false,
      currentPeriod: true,
      timeRange: TimeRange.Week
    };
  }

  handleMeasurementChange = (e) => {
    this.setState({ measurement: e.target.value });
  };

  handleTimeRangeChange = (e) => {
    this.setState({ timeRange: e.target.value });
  };

  handleChartTypeChange = (e) => {
    if (e.target.value) {
      this.setState({ chartType: e.target.value });
    } else {
      this.setState({ chartType: e.target.alt });
    }
  };

  handlePreviousPeriodChange = () => {
    this.setState({ previousPeriod: !this.state.previousPeriod });
  };

  handleCurrentPeriodChange = () => {
    this.setState({ currentPeriod: !this.state.currentPeriod });
  };

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="SalesChartWidget">
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
                <div id="salesChartWidgetHeader">
                  <Typography variant="h2" sx={{ color: "text.widgetHeader" }}>
                    {t("salesChart")}
                  </Typography>
                </div>
                <SalesChartMenu
                  measurement={this.state.measurement}
                  chartType={this.state.chartType}
                  previousPeriod={this.state.previousPeriod}
                  timeRange={this.state.timeRange}
                  handleMeasurementChange={this.handleMeasurementChange}
                  handleTimeRangeChange={this.handleTimeRangeChange}
                  handleChartTypeChange={this.handleChartTypeChange}
                  disabled={Object.keys(this.props.data).length === 0}
                />
                {Object.keys(this.props.data).length === 0 ? (
                  <div style={{ height: 250 }} id="noDataInfo">
                    <FolderOffIcon sx={{ fontSize: 120, paddingBottom: 1 }} />
                    <Typography variant="noData">{t("noData")}</Typography>
                  </div>
                ) : (
                  <SalesChart
                    data={this.props.data}
                    timeRange={this.state.timeRange}
                    measurement={this.state.measurement}
                    previousPeriod={this.state.previousPeriod}
                    currentPeriod={this.state.currentPeriod}
                    chartType={this.state.chartType}
                    handlePreviousPeriodChange={this.handlePreviousPeriodChange}
                    handleCurrentPeriodChange={this.handleCurrentPeriodChange}
                  />
                )}
              </div>
            </Paper>
          </div>
        )}
      </Translation>
    );
  }
}

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: "1px solid #FDAA4A",
  "&:hover": {
    border: "1px solid #FDAA4A",
    background: theme.palette.button.hover
  },
  "&.Mui-selected": {
    background: theme.palette.button.selected,
    border: "1px solid #F47933"
  },
  "&not(.Mui-selected": {
    border: "1px solid #FDAA4A"
  }
}));

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    "&:not(:first-of-type)": {
      borderLeft: "1px solid #F47933"
    }
  }
}));

function SalesChartMenu(props) {
  return (
    <Translation>
      {(t) => (
        <div className="SalesChartMenu">
          <CustomSelect
            value={props.measurement}
            onChange={props.handleMeasurementChange}
            disabled={props.disabled}
          >
            <CustomMenuItem value={Measurement.SalesNumber}>
              {t("units_sold")}
            </CustomMenuItem>
            <CustomMenuItem value={Measurement.Turnover}>
              {t("turnover")}
            </CustomMenuItem>
          </CustomSelect>
          <CustomSelect
            value={props.timeRange}
            onChange={props.handleTimeRangeChange}
            disabled={props.disabled}
          >
            <CustomMenuItem value={TimeRange.Day}>{t("today")}</CustomMenuItem>
            <CustomMenuItem value={TimeRange.Week}>
              {t("this_week")}
            </CustomMenuItem>
            <CustomMenuItem value={TimeRange.Year}>
              {t("this_year")}
            </CustomMenuItem>
          </CustomSelect>
          <CustomToggleButtonGroup
            variant="outlined"
            exclusive
            sx={{
              height: 30,
              bgcolor: "background.default"
            }}
            value={props.chartType}
            onChange={props.handleChartTypeChange}
            disabled={props.disabled}
          >
            <CustomToggleButton
              id="buttonChart"
              value="bar"
              disabled={props.disabled}
            >
              <Avatar
                alt="bar"
                id="chartImage"
                variant="rounded"
                src={column_chart}
              />
            </CustomToggleButton>
            <CustomToggleButton
              sx={{ borderLeft: 2, borderColor: "#FFE1BA" }}
              id="buttonChart"
              value="line"
              disabled={props.disabled}
            >
              <Avatar
                alt="line"
                id="chartImage"
                variant="rounded"
                src={line_chart}
              />
            </CustomToggleButton>
          </CustomToggleButtonGroup>
        </div>
      )}
    </Translation>
  );
}

function SalesChart(props) {
  const { t } = useTranslation();

  const getxAxis = useCallback(() => {
    const time_x = {
      day: Array.from({ length: 24 }, (v, k) => k + 1),
      week: [
        t("monday"),
        t("tuesday"),
        t("wednesday"),
        t("thursday"),
        t("friday"),
        t("saturday"),
        t("sunday")
      ],
      year: [
        t("january"),
        t("february"),
        t("march"),
        t("april"),
        t("may"),
        t("june"),
        t("july"),
        t("august"),
        t("september"),
        t("october"),
        t("november"),
        t("december")
      ]
    };

    if (props.timeRange === TimeRange.Day) {
      return time_x.day;
    } else if (props.timeRange === TimeRange.Week) {
      return time_x.week;
    } else {
      return time_x.year;
    }
  }, [props.timeRange, t]);

  const getData = useCallback(() => {
    var current_data = [];
    if (props.timeRange === TimeRange.Day) {
      current_data =
        props.measurement === Measurement.Turnover
          ? props.data.today.turnover.slice()
          : props.data.today.units.slice();
    } else if (props.timeRange === TimeRange.Week) {
      current_data =
        props.measurement === Measurement.Turnover
          ? props.data.thisWeek.turnover.slice()
          : props.data.thisWeek.units.slice();
    } else {
      current_data =
        props.measurement === Measurement.Turnover
          ? props.data.thisYear.turnover.slice()
          : props.data.thisYear.units.slice();
    }
    var n = current_data.length;
    var last = current_data[n - 1];
    current_data[n - 1] = {
      value: last,
      itemStyle: { color: "#D05353" }
    };

    return current_data;
  }, [props.measurement, props.timeRange, props.data]);

  const getPreviousData = useCallback(() => {
    if (props.timeRange === TimeRange.Day) {
      return props.measurement === Measurement.Turnover
        ? props.data.today.previous_turnover.slice()
        : props.data.today.previous_units.slice();
    } else if (props.timeRange === TimeRange.Week) {
      return props.measurement === Measurement.Turnover
        ? props.data.thisWeek.previous_turnover.slice()
        : props.data.thisWeek.previous_units.slice();
    } else {
      return props.measurement === Measurement.Turnover
        ? props.data.thisYear.previous_turnover.slice()
        : props.data.thisYear.previous_units.slice();
    }
  }, [props.measurement, props.timeRange, props.data]);

  const getChartType = useCallback(() => {
    return props.chartType;
  }, [props.chartType]);

  const getCurrentState = useCallback(() => {
    return props.currentPeriod;
  });

  const getPreviousState = useCallback(() => {
    return props.previousPeriod;
  });

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: [t("current"), t("previous")],
      top: 10,
      right: 0,
      orient: "horizontal",
      inactiveColor: "#9e9e9e",
      textStyle: {
        color: "#"
      },
      selected: {
        Previous: getPreviousState(),
        Poprzedni: getPreviousState(),
        Current: getCurrentState(),
        Obecny: getCurrentState()
      }
    },

    grid: {
      left: "2%",
      right: "2%",
      top: "15%",
      bottom: "10%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: getxAxis(),
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: "#9e9e9e"
        }
      },
      axisLabel: {
        interval: 0
      }
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: t("current"),
        data: getData(),
        type: getChartType(),
        symbol: "circle"
      },
      {
        name: t("previous"),
        data: getPreviousData(),
        type: getChartType(),
        symbol: "circle"
      }
    ],
    color: ["#FDAA4A", "#66D7D1"],
    textStyle: {
      fontWeight: 500,
      fontFamily: "Montserrat",
      color: "#9e9e9e"
    }
  };

  const onChartLegendselectchanged = useCallback((param, echarts) => {
    if (param.name === "Poprzedni" || param.name === "Previous") {
      props.handlePreviousPeriodChange();
    } else if (param.name === "Current" || param.name === "Obecny") {
      props.handleCurrentPeriodChange();
    }
  }, []);

  const onEvents = {
    legendselectchanged: onChartLegendselectchanged
  };

  return (
    <Translation>
      {(t) => (
        <ReactEcharts
          style={{ width: "100%", height: "280px" }}
          option={option}
          onEvents={onEvents}
        />
      )}
    </Translation>
  );
}

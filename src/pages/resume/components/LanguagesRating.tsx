import { Fragment } from "react";
import { Title } from "./Title";
import { BarChart, axisClasses } from "@mui/x-charts";
import { calculateLanguagesStatistic } from "../../../utils/calculateLanguagesStatistic";
import { Typography } from "@mui/material";

type Props = {
  languages: Record<string, number>[];
};

const barChartSettings = {
  xAxis: [
    {
      label: "%"
    }
  ],
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)"
    }
  },
  margin: { top: 20, right: 30, left: 80 }
};

export function LanguageRating({ languages }: Props) {
  const languageData = Object.entries(calculateLanguagesStatistic(languages))
    .map(([key, value]) => {
      return { id: key, label: key, value };
    })
    .sort((a, b) => b.value - a.value);

  const valueFormatter = (value: number) => `${value}%`;

  return (
    <Fragment>
      <Title>Languages statistic</Title>
      {!languageData.length && <Typography>No languages found</Typography>}
      {!!languageData.length && (
        <BarChart
          dataset={languageData}
          yAxis={[{ scaleType: "band", dataKey: "label" }]}
          series={[{ dataKey: "value", valueFormatter }]}
          layout="horizontal"
          {...barChartSettings}
        />
      )}
    </Fragment>
  );
}

Highcharts.chart("container", {
  title: {
    text: "Población histórica del municipio y su capital (en habitantes)",
  },

  subtitle: {
    text: "Fuente: https://es.wikipedia.org/wiki/Robor%C3%A9",
  },

  yAxis: {
    title: {
      text: "Número de habitantes",
    },
  },

  xAxis: {
    categories: ["1976", "1992", "2001", "2012", "2019"],
    // accessibility: {
    //   rangeDescription: "Range: 1976 to 2019", //here 1976 2019
    // },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0,
    },
    // series: {
    //   label: {
    //     connectorAllowed: false,
    //   },
    //   pointStart: 1976, //1976
    // },
  },

  series: [
    {
      name: "Ciudad de Roboré",
      data: [6088, 10360, 9919, 10098, 11000],
    },
    {
      name: "Municipio de Roboré",
      data: [14951, 15246, 15240, 15641, 16411],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

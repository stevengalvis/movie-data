import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class BarChart extends React.Component {
  render() {
    let chartData = {
      labels: ["Budget", "Revenue"],
      datasets: [
        {
          label: "Dollars",
          data: [this.props.movie.budget, this.props.movie.revenue],
          backgroundColor: ["#2b908f", "#2b908f"]
        }
      ]
    };

    return (
      <Bar
        data={chartData}
        width={100}
        height={50}
        options={{
          title: {
            text: "Movie Numbers",
            display: true,
            fontColor: "#FFF",
            fontSize: 20
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value, index, values) {
                    return (
                      "$" +
                      value
                        .toFixed(0)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                  },
                  fontColor: "#fff",
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "#FFF"
                }
              }
            ]
          },

          maintainAspectRatio: true,
          legend: {
            display: false
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.card.movie,
    similarMovies: state.card.similarMovies,
    isLoading: state.card.isLoading
  };
};

export default connect(mapStateToProps)(BarChart);

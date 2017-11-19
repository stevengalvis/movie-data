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
          backgroundColor: ["#002E5F", "#007FBF"]
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
            text: "Movie Numbers"
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value, index, values) {
                    if (value <= 10) {
                      return value;
                    }
                    return `$` + value;
                  }
                }
              }
            ]
          },
          maintainAspectRatio: true,
          legend: {
            position: "top",
            display: true
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

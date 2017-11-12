import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class DoughnutChart extends React.Component {
  render() {
    let chartData = {
      labels: ["Average"],
      datasets: [
        {
          label: "Score",
          data: [this.props.movie.vote_average, 10 - this.props.movie.vote_average],
          backgroundColor: ["green", "red"]
        }
      ]
    };

    return (
      <div className="chart">
        <Doughnut
          data={chartData}
          width={100}
          height={20}
          options={{
            title: {
              display: "vote_average",
              text: "Vote Average"
            },
            maintainAspectRatio: true,
            legend: {
              position: "top",
              display: true
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.card.movie
  };
};

export default connect(mapStateToProps)(DoughnutChart);

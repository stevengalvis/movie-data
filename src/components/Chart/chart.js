import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends React.Component {
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
  console.log(state.card.movie);
  return {
    movie: state.card.movie
  };
};

export default connect(mapStateToProps)(Chart);

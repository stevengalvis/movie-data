import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import "./doughnutchart.css";

class DoughnutChart extends React.Component {
  render() {
    let chartData = {
      labels: ["Average"],
      datasets: [
        {
          label: "Score",
          data: [this.props.movie.vote_average, 10 - this.props.movie.vote_average],
          backgroundColor: ["#09BC8A", "#004346"]
        }
      ]
    };

    return (
      <div className="vote-average-container">
        <Doughnut
          data={chartData}
          width={50}
          height={50}
          options={{
            title: {
              display: true,
              text: "Vote Average",
              fontColor: "#FFF",
              fontSize: 20
            },
            tooltips: {
              enabled: false
            },
            animation: {
              animateRotate: true,
              animateScale: true
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            }
          }}
        />
        <span class="vote-average-score">{`${this.props.movie.vote_average} / 10`}</span>
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

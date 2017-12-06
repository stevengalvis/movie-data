import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";
import "./horizontalbarchart.css";

export class HorizontalBarChart extends React.Component {
  render() {
    let chartData = {
      labels: this.props.similarMovies.map(movie => movie.title),
      datasets: [
        {
          label: "Vote Average",
          data: this.props.similarMovies.map(movie => movie.vote_average),
          backgroundColor: ["#00a896", "#00a896", "#00a896", "#00a896", "#00a896"]
        }
      ]
    };

    return (
      <div className="similar-movies-chart-container">
        <HorizontalBar
          data={chartData}
          width={50}
          height={50}
          options={{
            title: {
              text: "Similar Movies Vote Averages",
              fontColor: "#FFF",
              display: true,
              fontSize: 20
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#FFF"
                  }
                }
              ],

              yAxes: [
                {
                  ticks: {
                    fontColor: "#FFF"
                  }
                }
              ]
            },
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.card.movie,
    similarMovies: state.card.similarMovies
  };
};

export default connect(mapStateToProps)(HorizontalBarChart);

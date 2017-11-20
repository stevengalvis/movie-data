import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";

class HorizontalBarChart extends React.Component {
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
      <HorizontalBar
        data={chartData}
        width={100}
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
    similarMovies: state.card.similarMovies
  };
};

export default connect(mapStateToProps)(HorizontalBarChart);

import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class BarChart extends React.Component {
  render() {
    let chartData;

    if (this.props.type == "movieNumbers") {
      chartData = {
        labels: ["Budget", "Revenue"],
        datasets: [
          {
            label: "Dollars",
            data: [this.props.movie.budget, this.props.movie.revenue],
            backgroundColor: ["#3F51B5", "#64B5F6"]
          }
        ]
      };
    }
    if (this.props.type === "similarMovies") {
      chartData = {
        labels: this.props.similarMovies.map(movie => movie.title),
        datasets: [
          {
            label: "Vote Average for Similar Movies",
            data: this.props.similarMovies.map(movie => movie.vote_average),
            backgroundColor: ["#3F51B5", "#64B5F6"]
          }
        ]
      };
    }

    return (
      <Bar
        data={chartData}
        width={100}
        height={20}
        options={{
          title: {
            text: "Movie Numbers"
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

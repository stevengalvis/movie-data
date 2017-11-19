import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";

class HorizontalBarChart extends React.Component {
  render() {
    let chartData = {
      labels: this.props.similarMovies.map(movie => movie.title),
      datasets: [
        {
          label: "Vote Average for Similar Movies",
          data: this.props.similarMovies.map(movie => movie.vote_average),
          backgroundColor: ["#03256C", "#2541B2", "#1768AC", "#08A4BD", "blue"]
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
            text: "Similar Movie Vote Averages"
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
    similarMovies: state.card.similarMovies
  };
};

export default connect(mapStateToProps)(HorizontalBarChart);

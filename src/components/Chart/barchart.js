import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class BarChart extends React.Component {
  constructor() {
    super();
  }

  render() {
    let chartData = {
      labels: ["Budget", "Revenue"],
      datasets: [
        {
          label: "Dollars",
          data: [this.props.movie.budget, this.props.movie.revenue],
          backgroundColor: ["#3F51B5", "#64B5F6"]
        }
      ]
    };
    console.log(this.props.movie);
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
    movie: state.card.movie
  };
};

export default connect(mapStateToProps)(BarChart);

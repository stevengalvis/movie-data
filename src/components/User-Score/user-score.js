import React from "react";
import CircularProgressbar from "react-circular-progressbar";
import { connect } from "react-redux";
import "./user-score.css";

export class UserScore extends React.Component {
  render() {
    return (
      <div className="card-panel-user-score-container">
        <div className="card-panel-user-score-bar">
          <CircularProgressbar
            percentage={this.props.voteAverage * 10}
            background
            className="CircularProgressbar-inverted progressbar"
            initialAnimation={true}
            strokeWidth={8}
          />
          <div className="card-panel-user-score">
            <span className="card-panel-user-score-text">User </span>
            <span className="card-panel-user-score-text">Score</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    voteAverage: state.card.movie.vote_average
  };
};

export default connect(mapStateToProps)(UserScore);

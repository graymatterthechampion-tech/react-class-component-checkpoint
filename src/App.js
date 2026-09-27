import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "John Achadu",
        bio: "I am learning software engineering and building React projects.",
        imgSrc: "/images/profile.jpg",
        profession: "Software Engineer",
      },

      shows: false,

      secondsSinceMount: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        secondsSinceMount: this.state.secondsSinceMount + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>My Profile</h1>

        <button onClick={this.toggleProfile}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div className="profile">
            <img
              src={this.state.person.imgSrc}
              alt={this.state.person.fullName}
            />

            <h2>{this.state.person.fullName}</h2>

            <h3>{this.state.person.profession}</h3>

            <p>{this.state.person.bio}</p>
          </div>
        )}

        <p className="timer">
          Time since component mounted:{" "}
          <strong>{this.state.secondsSinceMount} seconds</strong>
        </p>
      </div>
    );
  }
}

export default App;
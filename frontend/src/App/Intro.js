import React, { Component } from "react";
// import { history } from "react-router-dom";
import { getName, saveName } from "./api/localstorage";

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined
    };
  }

  componentDidMount() {
    const name = getName();
    if (name) {
      this.setState({ name });
    }
  }

  render() {
    return (
      <div className="page-intro">
        <div id="PageIntro">
          <h2 style={{ color: "#FD9E66" }}>Mimic Recording Studio</h2>
          <div className="instructions">
            <i className="fas fa-book-open" />
            <h2>guide</h2>
            <p>
              Please follow these advices for your voice recordings:
            </p>
            <ul className="persona-desc">
              <li><b>Use a good microphone and a quiet recording room setup</b> (no computers fans, air conditioning, ...).</li>
              <li>Use a text corpus with cleaned numbers/abbreviations and good phoneme coverage.</li>
              <li>Read neutral, but with a natural speech flow and do not swallow up letters.</li>
              <li>Adjust tone and pitch with punctuations.</li>
              <li>Use a constant recording speed.</li>
              <li>Check your recordings regularly in high volume for background noise.</li>
              <li>Make breaks regualarly and do not record more than four hours a day.</li>
              <li>Record error free.</li>
              </ul>

              <span className="li-title">Happy recording :-)</span>

          </div>
          {getName() ? this.renderWelcomeBackMsg() : this.renderInput()}
          <div className="btn_PageIntro">
            <button
              id="btn_PageIntro"
              className="btn"
              onClick={this.handleTrainMimicBtn}
            >
            Record
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderInput = () => {
    return (
      <div>
        <p>To get started, enter your name and hit the Record button.</p>
        <input
          type="text"
          id="yourname"
          placeholder="Your Name"
          onChange={this.handleInput}
        />
      </div>
    );
  };

  renderWelcomeBackMsg = () => {
    return (
      <div>
        <p>Welcome back {this.state.name}!</p>
        <p>Hit the Record button to continue recording.</p>
      </div>
    );
  };

  handleInput = e => {
    this.setState({ name: e.target.value });
  };

  handleTrainMimicBtn = () => {
    if (this.state.name === undefined) {
      alert("Please input a name before proceeding!");
    } else {
	  saveName(this.state.name);
	  this.props.history.push('/record')
    }
  };
}

export default Intro;

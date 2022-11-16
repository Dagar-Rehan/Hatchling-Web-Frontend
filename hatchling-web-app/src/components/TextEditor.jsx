import React from "react";
import "../TextEditor.css";

class Texteditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Home-container-div">
        <form onSubmit={this.handleSubmit}>
          <div className="Texteditor-div">
            <label>
              <textarea
                rows="10"
                cols="40"
                className="Texteditor"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input className="Run-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Texteditor;

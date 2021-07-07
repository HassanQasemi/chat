import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
    }
    this.props.onSubmit(this.state.input.trim());
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="panel-footer">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Say something"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                disabled={!this.state.input.replace(/\s/g, "")}
                onClick={this.handleSubmit}
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

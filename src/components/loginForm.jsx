import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: " ", password: "" },
  };

  handleSubmit = (e) => {
    e.prevenDefault();

    const username = this.username.current.value;
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.username}
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

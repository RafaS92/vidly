import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: " ", password: "" },
  };

  handleSubmit = (e) => {
    e.prevenDefault();

    const username = this.username.current.value;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              value={account.username}
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={account.password}
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
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

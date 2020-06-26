import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  handleSubmit = (e) => {
    e.prevenDefault();

    const username = this.username.current.value;
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
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

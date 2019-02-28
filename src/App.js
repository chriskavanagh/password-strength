import React, { Component } from "react";
import "./App.css";
import EmailInput from "./components/email-input/EmailInput";
import PasswordInput from './components/password-input/PasswordInput';

class App extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = evt => {
    let { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };

  render() {
    return (
      <div className="App">
				<div className="form">
          <EmailInput
            name="email"
            value={this.state.email}
            placeholder={"Your Email Address"}
            handleChange={this.handleChange}
          />

          <PasswordInput
            name="password"
            value={this.state.password}
            placeholder={"Your Password"}
            handleChange={this.handleChange}	
          />
				</div>
      </div>
    );
  }
}

export default App;

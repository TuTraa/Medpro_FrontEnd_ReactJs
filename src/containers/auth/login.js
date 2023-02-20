import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import "./Login.scss";
import { handleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "hoidanit",
      password: "tutran",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      // console.log(data);
      if (data && data.data.errCode !== 0) {
        this.setState({
          errMessage: data.data.message,
        });
      }
      if (data && data.data.errCode === 0) {
        this.props.userLoginSuccess(data.data.user);
        console.log("login succeeds");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };
  handShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      this.handleLogin();
    }
  }
  render() {
    return (
      <>
        <div className="login-background">
          <div className="login-container">
            <div className="login-content">
              <div className="col-12 text-login">Login</div>
              <div className="col-12 form-group login-input">
                <label>UserName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your username"
                  onChange={(event) => this.handleOnChangeUsername(event)}
                ></input>
              </div>
              <div className="col-12 form-group login-input">
                <label>PassWord</label>
                <div className="custom-input-password">
                  <input
                    className="form-control"
                    type={this.state.isShowPassword ? "text" : "password"}
                    placeholder="enter your password"
                    onChange={(event) => this.handleOnChangePassword(event)}
                    onKeyDown={(event) => { this.handleKeyDown(event) }}
                  ></input>
                  <span
                    onClick={() => {
                      this.handShowHidePassword();
                    }}
                  >
                    <i
                      className={
                        this.state.isShowPassword
                          ? "fas fa-eye "
                          : "fas fa-eye-slash"
                      }
                    ></i>
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="col-12" style={{ color: "red" }}>
                  {this.state.errMessage}
                </div>
                <button
                  className="text-center btn-login"
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  Login
                </button>
              </div>
              <div className="col-12">
                <span className="forgot-password">Forgot your password?</span>
              </div>
              <div className="col-12 text-center">
                <span className="text-orther-login"> Or login with:</span>
              </div>
              <div className="col-12 social-login mt-3">
                <i className="fab fa-google-plus-g google"></i>
                <i className="fab fa-facebook-f facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) => {
      dispatch(actions.userLoginSuccess(userInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

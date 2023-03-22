import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import { path } from "../utils";
import Home from "../routes/Home";
import Login from "./auth/login";
import System from "../routes/System";
import { CustomToastCloseButton } from "../components/CustomToast";
import HomePage from './HomePage/HomePage';
import ConfirmModal from "../components/ConfirmModal";
import CustomScrollbars from "../components/CustomScrollbars";
import detailDoctor from "./patient/doctor/detailDoctor";
import doctor from "../routes/doctor";
import VerifyEmail from "./patient/VerifyEmail";
import specialtyDetail from "./patient/specialty/specialtyDetail";
import ClinicDetail from "./patient/clinic/clinicDetail";
import allSpecialties from "./patient/specialty/allSpecialties";
import MenuVertical from "./Header/menuVertical";
import bookingInstructions from "./patient/bookingInstructions";
import myScheduleExamination from "./patient/medpro/myScheduleExamination";


class App extends Component {

  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {

    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            <ConfirmModal />
            <div className="content-container">
              <CustomScrollbars style={{ height: '100vh', width: '100%' }} >
                <Switch>
                  <Route path={path.HOME} exact component={Home} />
                  <Route
                    path={path.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                  />
                  <Route
                    path={path.SYSTEM}
                    component={userIsAuthenticated(System)}
                  />
                  <Route
                    path={path.HOMEPAGE}
                    component={HomePage}
                  />
                  <Route
                    path={path.DETAIL_DOCTOR}
                    component={detailDoctor}
                  />
                  <Route
                    path={path.DETAIL_SPECIALTY}
                    component={specialtyDetail}
                  />
                  <Route
                    path={path.ALL_SPECIALTIES}
                    component={allSpecialties}
                  />
                  <Route
                    path={path.BOOKING_INTROCDUCTION}
                    component={bookingInstructions}
                  />
                  <Route
                    path={path.MY_SCHEDULE_EXAMINATION}
                    component={myScheduleExamination}
                  />
                  <Route
                    path={path.DETAIL_CLINIC}
                    component={ClinicDetail}
                  />
                  <Route
                    path={path.DOCTOR}
                    component={userIsAuthenticated(doctor)}
                  />
                  <Route
                    path={path.VERIFY_EMAIL_BOOKING}
                    component={VerifyEmail}
                  />
                </Switch>
              </CustomScrollbars>
            </div>
            {
              this.props.isShowMenuVertical && <MenuVertical />
            }
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
    isShowMenuVertical: state.app.isShowMenuVertical,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

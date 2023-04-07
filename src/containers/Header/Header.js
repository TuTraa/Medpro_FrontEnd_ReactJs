import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu, doctorMenu } from "./menuApp";
import "./Header.scss";
import { languages, USER_ROLE } from "../../utils/constant";
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import { Modal } from 'reactstrap';
import NotifyModal from "./notifyModal";
import { notifyDoctor, getAllPatientForDoctor } from "../../services/userService";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuApp: [],
      isOpen: false,
      quantityCheck: 0,
      quanittyPatient: 0,
    }
  }

  handleChangeLanguge = (language) => {
    this.props.changLangueAPPRedux(language);
  }

  async componentDidMount() {
    let { userInfo } = this.props;
    let menu = [];
    if (userInfo && !_.isEmpty(userInfo)) {
      let role = userInfo.roleId;
      if (role === USER_ROLE.ADMIN) {
        menu = adminMenu;
      }
      if (role === USER_ROLE.DOCTOR) {
        menu = doctorMenu;
      }
    }
    this.setState({
      menuApp: menu,
    });
    if (userInfo && !_.isEmpty(userInfo)) {
      let res = await notifyDoctor(userInfo.id);
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityCheck: res.data.allNotify.length,
        })
      }
    }
    if (userInfo && !_.isEmpty(userInfo)) {
      let allPatient = await getAllPatientForDoctor({ doctorId: userInfo.id, date: 'All', phone: 'no data' });
      console.log('11', allPatient.data.allScheduleForDoctor.length)
      if (allPatient && allPatient.data && allPatient.data.errCode === 0) {
        this.setState({
          quanittyPatient: allPatient.data.allScheduleForDoctor.length
        })
      }
    }

  }

  setLength = async () => {
    let { userInfo } = this.props;
    if (userInfo && !_.isEmpty(userInfo)) {
      let res = await notifyDoctor(userInfo.id);
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityCheck: res.data.allNotify.length,
        })
      }
    }
  }


  openCloseModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }



  render() {
    const { processLogout, language, userInfo } = this.props;
    let { isOpen, quantityCheck, quanittyPatient } = this.state;
    console.log(userInfo)
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={this.state.menuApp} />
        </div>
        {
          userInfo.roleId === 'R2' &&
          <>
            <div className="notification">
              <div className="bell" onClick={() => this.openCloseModal()}><i className="fas fa-bell" ></i> <span>{quantityCheck}</span></div>
              <div className="bell"><i className="fas fa-notes-medical"></i><span>{quanittyPatient}</span></div>
            </div>
            <NotifyModal isOpen={isOpen} openCloseModal={this.openCloseModal} doctorId={userInfo.id} setLength={this.setLength} />
          </>

        }

        <div className="languages">
          <span className="welcome"> <FormattedMessage id="homeHeder.welcome" /> {userInfo && userInfo.firstName}</span>
          <span className={language === languages.VI ? 'language-vi acitve' : 'language-vi '}
            onClick={() => { this.handleChangeLanguge(languages.VI) }}>VN </span>
          <span className={language === languages.EN ? 'language-en acitve' : 'language-en '}
            onClick={() => { this.handleChangeLanguge(languages.EN) }}> En</span>
          {/* nút logout */}
          <div className="btn btn-logout" onClick={processLogout} title='log out'>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>

      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changLangueAPPRedux: (language) => dispatch(actions.changLangueAPP(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

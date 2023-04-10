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
import NotifyModalAdmin from "./notifyModalAdmin";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuApp: [],
      isOpen: false,
      isOpenAdmin: false,
      quantityCheck: 0,
      quanittyPatient: 0,
      quantityCancel: 0,
      quantityChange: 0,
      quantityWait: 0,
      result: '',
      statusId: '',
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
      let res = await notifyDoctor({ doctorId: userInfo.id, result: 'no data', statusId: 'S2' });
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityCheck: res.data.allNotify.length,
        })
      }
    }
    if (userInfo && !_.isEmpty(userInfo)) {
      let res = await notifyDoctor({ doctorId: 'All', result: 'no data', statusId: 'S0' });
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityWait: res.data.allNotify.length,
        })
      }
    }
    if (userInfo && !_.isEmpty(userInfo)) {
      let res = await notifyDoctor({ doctorId: 'All', result: 'change', statusId: 'S5 ' });
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityChange: res.data.allNotify.length,
        })
      }
    }
    if (userInfo && !_.isEmpty(userInfo)) {
      let res = await notifyDoctor({ doctorId: 'All', result: 'cancel', statusId: 'S4' });
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityCancel: res.data.allNotify.length,
        })
      }
    }
    if (userInfo && !_.isEmpty(userInfo)) {
      let allPatient = await getAllPatientForDoctor({ doctorId: userInfo.id, date: 'All', phone: 'no data' });
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
      let res = await notifyDoctor({ doctorId: 'All', result: 'no data', statusId: 'S2' });

      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          quantityCheck: res.data.allNotify.length,
        })
      }
    }
  }
  setLengthAdmin = async () => {
    let { userInfo } = this.props;
    if (userInfo && !_.isEmpty(userInfo)) {
      let res = await notifyDoctor({ doctorId: 'All', result: this.state.result, statusId: this.state.statusId });
      let { quantityCancel, quantityChange, quantityWait, statusId } = this.state;

      if (res && res.data && res.data.errCode === 0) {
        if (statusId === 'S0') { quantityWait = res.data.allNotify.length }
        if (statusId === 'S4') { quantityCancel = res.data.allNotify.length }
        if (statusId === 'S5') { quantityChange = res.data.allNotify.length }
        this.setState({
          quantityWait: quantityWait,
          quantityCancel: quantityCancel,
          quantityChange: quantityChange,
        })
      }
    }
  }


  openCloseModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  openModalAdmin = (result, statusId) => {
    console.log(result, statusId)
    this.setState({
      isOpenAdmin: true,
      result: result,
      statusId: statusId
    })
  }
  closeModalAdmin = () => {
    this.setState({
      isOpenAdmin: false,
    })
  }



  render() {
    const { processLogout, language, userInfo } = this.props;
    let { isOpen, quantityCheck, quanittyPatient, quantityCancel, quantityWait, quantityChange, isOpenAdmin, statusId, result } = this.state;
    console.log(result, statusId)
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
        {
          userInfo.roleId === 'R1' &&
          <>
            <div className="notification">
              <div className="notify-admin" onClick={() => this.openModalAdmin('no data', 'S0')}><i class="fas fa-user-plus"></i><span>{quantityWait}</span></div>
              <div className="notify-admin" onClick={() => this.openModalAdmin('change', 'S5')}><i class="fas fa-user-edit"></i><span>{quantityChange}</span></div>
              <div className="notify-admin" onClick={() => this.openModalAdmin('cancel', 'S4')}><i class="fas fa-user-minus"></i><span>{quantityCancel}</span></div>
            </div>
            <NotifyModalAdmin isOpenAdmin={isOpenAdmin} closeModalAdmin={this.closeModalAdmin} statusId={statusId} result={result} setLengthAdmin={this.setLengthAdmin} />
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import { languages } from "../../utils/constant"
import { changLangueAPP, onOffMenuVectical } from "../../store/actions/appActions";
import './HomePage.scss';
import { withRouter } from "react-router";


class HomeHeader extends Component {

  changLangue = (language) => {
    this.props.changLangueAPPRedux(language);
    //fire redux event:aciton

  }
  isShowMenu = () => {
    this.props.onOffMenuVectical()
  }
  returnHome = () => {
    if (this.props.history) {
      this.props.history.push('/home')
    }
  }
  render() {
    let language = this.props.language;


    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars" onClick={() => this.isShowMenu()}></i>
              <div className="header-logo" src='logo' onClick={() => this.returnHome()}></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div><b><FormattedMessage id="homeHeder.speciality" /></b></div>
                <div className="subs-title"><FormattedMessage id="homeHeder.searchDoctor" /></div>
              </div>
              <div className="child-content">
                <div><b><FormattedMessage id="homeHeder.health-facility" /></b></div>
                <div className="subs-title"><FormattedMessage id="homeHeder.select-room" /></div>
              </div>
              <div className="child-content">
                <div><b><FormattedMessage id="homeHeder.doctor" /></b></div>
                <div className="subs-title"><FormattedMessage id="homeHeder.select-doctor" /></div>
              </div>
              <div className="child-content">
                <div><b><FormattedMessage id="homeHeder.fee" /></b></div>
                <div className="subs-title"><FormattedMessage id="homeHeder.check-health" /></div>
              </div>
            </div>
            <div className="right-content">
              <div className="support"><i className="fas fa-question-circle"></i><FormattedMessage id="homeHeder.support" /> </div>
              <div className="language-vi"><span className={language === languages.VI ? ' action' : 'a'} onClick={() => { this.changLangue(languages.VI) }}>VI</span> </div>
              <div className="language-en"><span className={language === languages.EN ? ' action' : 'a'} onClick={() => { this.changLangue(languages.EN) }}>EN</span> </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true &&
          <div className="home-header-banner">
            <div className="content-up">
              <div className="title1"><FormattedMessage id="banner.title1" /></div>
              <div className="title2"><FormattedMessage id="banner.title2" /></div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm chuyên khoa khám bệnh"></input>
              </div>
            </div>
            <div className="content-down">
              <div className="options">
                <div className="option-child">
                  <div className="icon-child"> <i className="fas fa-hospital-alt"></i> </div>
                  <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                </div>
                <div className="option-child">
                  <div className="icon-child"> <i className="fas fa-hospital-alt"></i> </div>
                  <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                </div>
                <div className="option-child">
                  <div className="icon-child"><i className="fas fa-procedures"></i> </div>
                  <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                </div>
                <div className="option-child">
                  <div className="icon-child"><i className="fas fa-flask"></i> </div>
                  <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                </div>
                <div className="option-child">
                  <div className="icon-child"> <i className="fas fa-briefcase-medical"></i> </div>
                  <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                </div>
                <div className="option-child">
                  <div className="icon-child"> <i className="fas fa-briefcase-medical"></i> </div>
                  <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                </div>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changLangueAPPRedux: (language) => dispatch(changLangueAPP(language)),
    onOffMenuVectical: () => dispatch(onOffMenuVectical()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

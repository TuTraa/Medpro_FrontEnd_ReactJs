import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import footerLogo from "../../assets/images/item-menu-banner/footer_logo.svg"
import announced from "../../assets/images/item-menu-banner/datb.svg"
import registered from "../../assets/images/item-menu-banner/dadk.svg"
import appStore from "../../assets/images/item-menu-banner/apstore.svg"
import ggplay from "../../assets/images/item-menu-banner/ggplay.svg"
import './HomeFooter.scss'

class HomeFooter extends Component {
  state = {}
  render() {
    return (
      <div className="footer-out">
        <div className="footer-real" >
          <div className="container">
            <div className="row">
              <div className="logo col-2">
                <img src={footerLogo} alt="logo Footer" />
              </div>
              <div className="infor col-5">
                <p className="title-footer">MEDPRO - <FormattedMessage id="banner.medpro-7" /></p>
                <p><FormattedMessage id="banner.medpro-20" /> <FormattedMessage id="banner.medpro-26" /></p>
                <p>Website: https://medpro.vn/</p>
                <p>Email: tranvantu982001@gmail.com</p>
                <p><FormattedMessage id="banner.medpro-21" />: 0123987456</p>
              </div>
              <div className="action col-2">
                <p><FormattedMessage id="banner.medpro-22" /></p>
                <p><FormattedMessage id="banner.medpro-23" /></p>
                <p><FormattedMessage id="banner.medpro-24" /></p>
                <p><FormattedMessage id="banner.medpro-25" /></p>
              </div>
              <div className="appstote col-3">
                <img src={announced} alt="logo Footer" className="col-6" />
                <img src={registered} alt="logo Footer" />
                <img src={appStore} alt="logo Footer" />
                <img src={ggplay} alt="logo Footer" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-link">
          <p>&copy; 2023 tutran.com </p>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
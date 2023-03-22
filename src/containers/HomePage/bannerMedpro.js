import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './bannerMedpro.scss';
import { languages } from "../../utils/constant"
import { changLangueAPP, onOffMenuVectical } from "../../store/actions/appActions";
import './HomePage.scss';
import { withRouter } from "react-router";
import Slider from "react-slick";


class BannerMedpro extends Component {

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
        let { language } = this.props;

        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
        };
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars" onClick={() => this.isShowMenu()} ></i>
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
                    <div className="banner-medpro">
                        <Slider {...settings}>
                            <div className="banner-medpro-1">
                            </div>
                            <div className="banner-medpro-2">
                            </div>
                            <div className="banner-medpro-3">
                            </div>
                        </Slider>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BannerMedpro));
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './bannerMedpro.scss';
import { languages } from "../../utils/constant"
import { changLangueAPP, onOffMenuVectical } from "../../store/actions/appActions";
import './HomePage.scss';
import { withRouter } from "react-router";
import Slider from "react-slick";
import imageQR from "../../assets/images/item-menu-banner/download.png";
import imageCH from "../../assets/images/item-menu-banner/apstore.svg";
import imageIOS from "../../assets/images/item-menu-banner/ggplay.svg";

import menuBanner1 from "../../assets/images/item-menu-banner/lich.png";
import menuBanner2 from "../../assets/images/item-menu-banner/sktd.png";
import menuBanner3 from "../../assets/images/item-menu-banner/xnt.png";
import menuBanner4 from "../../assets/images/item-menu-banner/pay.png";
import menuBanner5 from "../../assets/images/item-menu-banner/covid.png";

import banner1 from "../../assets/images/bannerMedpro/banner.png";
import banner2 from "../../assets/images/bannerMedpro/home_banner_web_11.png";
import banner3 from "../../assets/images/bannerMedpro/banner3.png";


import { Link } from "react-router-dom";


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
                        <div className="open-nav-vertical">
                            <i className="fas fa-bars" onClick={() => this.isShowMenu()} ></i>
                        </div>
                        <div className="left-content">
                            <div className="header-logo" src='logo' onClick={() => this.returnHome()}></div>
                        </div>
                        <div className="center-content">
                            <Link to={`all-specialties`}>
                                <div className="child-content">
                                    <div><b><FormattedMessage id="homeHeder.speciality" /></b></div>
                                    <div className="subs-title"><FormattedMessage id="homeHeder.searchDoctor" /></div>
                                </div>
                            </Link>
                            <Link to={`all-clinics`}>
                                <div className="child-content">
                                    <div><b><FormattedMessage id="homeHeder.health-facility" /></b></div>
                                    <div className="subs-title"><FormattedMessage id="homeHeder.select-room" /></div>
                                </div>
                            </Link>
                            <Link to={`/all-doctors`}>
                                <div className="child-content">
                                    <div><b><FormattedMessage id="homeHeder.doctor" /></b></div>
                                    <div className="subs-title"><FormattedMessage id="homeHeder.select-doctor" /></div>
                                </div>
                            </Link >
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
                            <div className="banner-medpro-1"></div>
                            <div className="banner-medpro-2"></div>
                            <div className="banner-medpro-3"></div>
                        </Slider>
                        <div className="menu-banner col-4">
                            <div className="menu-banner-in container">

                                <p><FormattedMessage id="banner.medpro-0" /></p>
                                <div className="all-item row" >
                                    <div className="item col-4">
                                        <div className="item-flex">
                                            <Link to={`/your_schedule_examination`}>
                                                <div className="image-item" style={{ backgroundImage: `url(${menuBanner1})` }}></div>
                                            </Link>

                                            <div className="text-item"><FormattedMessage id="banner.your-appointment" /></div>
                                        </div>
                                    </div>
                                    <div className="item col-4">
                                        <div className="item-flex">
                                            <div className="image-item" style={{ backgroundImage: `url(${menuBanner2})` }}></div>
                                            <div className="text-item"><FormattedMessage id="banner.medpro-1" /></div>
                                        </div>
                                    </div>
                                    <div className="item col-4">
                                        <div className="item-flex">
                                            <div className="image-item" style={{ backgroundImage: `url(${menuBanner3})` }}></div>

                                            <div className="text-item"><FormattedMessage id="banner.medpro-2" /></div>
                                        </div>
                                    </div>
                                    <div className="item col-4">
                                        <div className="item-flex">
                                            <div className="image-item" style={{ backgroundImage: `url(${menuBanner4})` }}></div>
                                            <div className="text-item"><FormattedMessage id="banner.medpro-3" /></div>
                                        </div>
                                    </div>
                                    <div className="item col-4">
                                        <div className="item-flex">
                                            <div className="image-item" style={{ backgroundImage: `url(${menuBanner5})` }}></div>
                                            <div className="text-item"><FormattedMessage id="banner.medpro-4" /></div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="col-1"></div>
                        </div>

                        {/* install */}
                        <div className="install">
                            <div className="qr-out">
                                <img src={imageQR} alt="react logo" />
                            </div>
                            <div className="ch-ios">
                                <p><FormattedMessage id="banner.medpro-5" /></p>
                                <div className="ch-ios-flex row">
                                    <div className="ch col-6">
                                        <img src={imageCH} alt="react logo" />
                                    </div>

                                    <div className="ios col-6">
                                        <img src={imageIOS} alt="react logo" />
                                    </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BannerMedpro));

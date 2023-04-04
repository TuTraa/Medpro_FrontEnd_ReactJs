import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import './medicalRegisterHome.scss';
import { Link } from "react-router-dom";
import register1 from "../../../assets/images/bannerMedpro/new1.bb081b99.jpg"
import register7 from "../../../assets/images/bannerMedpro/thanhtoan2.png"
import register3 from "../../../assets/images/bannerMedpro/nhanphieu.jpg"

class MedicalRegisterHome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    render() {

        return (
            <div className='medical-register'>
                <div className='bg-medical-register'>
                    <div className='medical-register-width'>
                        <div className='row content-top'>
                            <div className='content-left col-xxl-4 col-xl-3 col-lg-10'>
                                <div className='label'><FormattedMessage id="banner.medpro-6" /></div>
                                <div className='text'>MEDPRO <br /><FormattedMessage id="banner.medpro-7" /></div>
                            </div>
                            <div className='content-right col-xxl-8 col-xl-7 col-lg-10'>
                                <FormattedMessage id="banner.medpro-8" />
                            </div>
                        </div>
                        <div className='row content-bottom-all'>
                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 content-bottom-x'>
                                <div className='content-bottom' style={{ backgroundImage: `url(${register1})` }} >
                                    <div className='text-content'>
                                        <div className='label-combo3'><FormattedMessage id="banner.medpro-9" /></div>
                                        <div className='content-combo3'><FormattedMessage id="banner.medpro-10" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 content-bottom-x'>
                                <div className='content-bottom' style={{ backgroundImage: `url(${register7})` }} >
                                    <div className='text-content'>
                                        <div className='label-combo3'><FormattedMessage id="banner.medpro-11" /></div>
                                        <div className='content-combo3'><FormattedMessage id="banner.medpro-12" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-0 col-xl-0 col-lg-0 col-md-3 col-sm-3 on-off' > </div>
                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 content-bottom-x'>
                                <div className='content-bottom' style={{ backgroundImage: `url(${register3})` }} >
                                    <div className='text-content'>
                                        <div className='label-combo3'><FormattedMessage id="banner.medpro-13" /></div>
                                        <div className='content-combo3'><FormattedMessage id="banner.medpro-14" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-0 col-xl-0 col-lg-0 col-md-3 col-sm-3 '> </div>
                        </div>
                    </div>
                    <div className='link-register'>
                        <p> <FormattedMessage id="banner.medpro-15" /> <Link to={'/booking-introduction'}> <FormattedMessage id="banner.medpro-16" /></Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalRegisterHome);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import { getProfileDoctorById } from '../../../services/userService';
import "./profileDoctor.scss";
import NumberFormat from 'react-number-format';
import _ from "lodash"
import moment from 'moment/moment';

class ProfileDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {},
        }
    }
    async componentDidMount() {
        let id = this.props.doctorId;
        let data = await this.getInforDoctor(id);
        this.setState({
            dataProfile: data,
        })
    }

    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await (await getProfileDoctorById(id)).data;
            if (res.errCode === 0 && res) {
                result = res.data
            }
        }
        return result;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doctorId !== prevProps.doctorId) {
            this.getInforDoctor(this.props.doctorId);
        }
    }
    dataTimeProfile = (dataTime) => {
        let language = this.props.language;
        let time = language === languages.VI ? dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
        let date = language === languages.VI ?
            moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY')
            :
            moment.unix(+dataTime.date / 1000).locale('en').format('ddd - MM/DD/YYYY');
        if (dataTime && !_.isEmpty(dataTime)) {
            this.props.getDateProfile(`${time} ${date}`);

            return (
                <>
                    <div>{time} {date}</div>
                    <div><FormattedMessage id="patient.modal.note" /></div>
                </>
            )
        }

    }
    render() {
        let { language, isDescription, dataTime } = this.props;
        let { dataProfile } = this.state;
        let nameVi, nameEn, priceVi, priceEn;
        if (dataProfile) {
            nameVi = `${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        if (dataProfile && dataProfile.doctorinfor && dataProfile.doctorinfor.priceTypeData) {
            priceVi = dataProfile.doctorinfor.priceTypeData.valueVi;
            priceEn = dataProfile.doctorinfor.priceTypeData.valueEn;
        }
        let nameDoctor = language === languages.VI ? nameVi : nameEn;
        let examinationprice = language === languages.VI ? priceVi : priceEn;
        this.props.getNamePrice(nameDoctor, examinationprice)

        return (
            <>
                <div className='intro-doctor-profile'>
                    <div className='content-left'
                        style={{ backgroundImage: `url(${dataProfile && dataProfile.image ? dataProfile.image : 'oke'})` }}>
                    </div>
                    <div className='content-right'>
                        <div className='up'>
                            {language === languages.VI ? nameVi : nameEn}
                        </div>
                        <div className='down'>

                            {isDescription === true ?
                                <>
                                    {dataProfile && dataProfile.Markdown
                                        && dataProfile.Markdown.description &&
                                        <span> {dataProfile.Markdown.description}</span>}
                                </>
                                :
                                <>
                                    {this.dataTimeProfile(dataTime)}
                                </>
                            }
                        </div>
                    </div>

                </div>
                <div className='price_profile'><FormattedMessage id="patient.modal.price" /> : {language === languages.VI ? <NumberFormat
                    value={priceVi}
                    displayType={'text'}
                    thousandSeparator={true}
                /> : `${priceEn}`} <FormattedMessage id="patient.modal.money" /></div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);

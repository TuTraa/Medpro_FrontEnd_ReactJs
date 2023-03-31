import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../doctor/doctorSchedule';
import "./clinicDetail.scss"
import DoctorInfor from '../doctor/doctorInfor';
import ProfileDoctorNormal from '../specialty/profileDoctorNormal';
import { getDetailClinic } from '../../../services/userService';
import _ from "lodash"
import HomeFooter from '../../HomePage/HomeFooter';

class ClinicDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [],
            dataSpecialty: {},
            listProvince: {},
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            // let dataProvince = await (await getAllCodeService('PROVINCE')).data;
            let res = await (await getDetailClinic(id)).data;
            if (res && res.data && res.data && res.errCode === 0) {
                let doctorOfClinic = res.data.doctorOfClinic;
                let arrDoctorId = [];
                doctorOfClinic.map(item => {
                    arrDoctorId.push(item.doctorId)
                })
                // let dataProvinceplus = dataProvince.data;

                // if (dataProvinceplus && dataProvinceplus.length > 0) {
                //     dataProvinceplus.unshift({
                //         keyMap: 'All',
                //         type: 'PROVINCE',
                //         valueEn: 'All',
                //         valueVi: 'Toàn Quốc'
                //     })

                // }
                this.setState({
                    dataSpecialty: res.data,
                    arrDoctorId: arrDoctorId,
                    // listProvince: dataProvinceplus ? dataProvinceplus : [],
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // onchangSelectProvince = async (event) => {
    //     let location = event.target.value;
    //     let id = this.props.match.params.id;
    //     let res = await (await getDetailSpecialty(id, location)).data;
    //     let arrDoctorLocation = res.data.doctorSpecialty;
    //     let arrDoctor = [];
    //     arrDoctorLocation.map((item => {
    //         arrDoctor.push(item.doctorId)
    //     }))
    //     this.setState({
    //         arrDoctorId: arrDoctor,
    //     })

    // }

    render() {
        let { arrDoctorId, dataSpecialty, listProvince } = this.state;
        let { language } = this.props;
        return (
            <div className='detail-specialty-container'>
                <HomeHeader isShowBanner={false} />
                <div className='description-specialty-out'>
                    <div className='description-specialty container'>
                        {dataSpecialty && !_.isEmpty(dataSpecialty) &&
                            <>
                                <h3>{dataSpecialty.name}</h3>
                                <div dangerouslySetInnerHTML={{ __html: dataSpecialty.descriptionHTML }}></div>

                            </>
                        }
                    </div>
                </div>
                {/* <div className='select-province container'>
                    <select onChange={(event) => { this.onchangSelectProvince(event) }}>
                        {listProvince && listProvince.length > 0 && listProvince.map((item, index) => {

                            return (
                                <option key={index} value={item.keyMap}>
                                    {language === languages.VI ? item.valueVi : item.valueEn}
                                </option>
                            )

                        })}
                    </select>
                </div> */}
                {
                    arrDoctorId && arrDoctorId.length > 0 && arrDoctorId.map((item, index) => {
                        return (
                            <div className='each-doctor mt-3 mb-2 container'>
                                <div className='content-left'>
                                    <ProfileDoctorNormal doctorId={item} />
                                </div>
                                <div className='content-right'>
                                    <DoctorSchedule doctorId={item} key={index} />
                                    <DoctorInfor doctorId={item} />
                                </div>
                            </div>
                        )
                    })
                }
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(ClinicDetail);

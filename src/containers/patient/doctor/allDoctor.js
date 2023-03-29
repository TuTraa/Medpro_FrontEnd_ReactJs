import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import { findDoctor, getAllCodeService } from '../../../services/userService';
import './allDoctor.scss';
import Select from 'react-select';
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from "../../../store/actions";
class AllDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProvince: { label: 'Toàn quốc', value: 'All' },
            selectedSpecialty: { label: 'Tất cả chuyên khoa', value: 'All' },
            nameFind: '',

            arrDoctor: '',
            arrProvince: [],
            arrSpecialty: [],
        }
    }
    async componentDidMount() {
        this.props.getRequireDoctorInfor();
        let resDOctor = await findDoctor({ province: 'All', specialty: 'All' });
        if (resDOctor && resDOctor.data && resDOctor.data.data) {
            console.log('resdoctor:', resDOctor.data.data)

            let resArrDoctor = resDOctor.data.data.data;
            console.log('resArrDoctor:', resArrDoctor)
            this.setState({
                arrDoctor: resArrDoctor,
            })
        }
        let dataProvince = await (await getAllCodeService('PROVINCE')).data;
        if (dataProvince && dataProvince.data && dataProvince.errCode === 0) {
            let dataProvinceplus = dataProvince.data;

            if (dataProvinceplus && dataProvinceplus.length > 0) {
                dataProvinceplus.unshift({
                    keyMap: 'All',
                    type: 'PROVINCE',
                    valueEn: 'All',
                    valueVi: 'Toàn Quốc'
                })

            }
            let valueProvince = dataProvinceplus.map(item => {
                return this.props.language === languages.VI ? { label: item.valueVi, value: item.keyMap } : { label: item.valueEn, value: item.keyMap };
            })
            this.setState({
                arrProvince: valueProvince
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        let arrSpecialty = [];
        if (prevProps.allRequiredDoctorInfor !== this.props.allRequiredDoctorInfor) {
            let { resPecialty } = this.props.allRequiredDoctorInfor;
            arrSpecialty = resPecialty.map(item => {
                return { label: item.name, value: item.id }
            })
            if (arrSpecialty && arrSpecialty.length > 0) {
                arrSpecialty.unshift({
                    label: 'Tất cả chuyên khoa',
                    value: 'All'
                })

            }
            this.setState({
                arrSpecialty: arrSpecialty,
            })

        }
    }

    handleChangeSelect = async (option, name) => {
        let { selectedSpecialty } = this.state;
        let resDOctor = await findDoctor({ province: option.value, specialty: selectedSpecialty.value });
        console.log(resDOctor)
        if (resDOctor && resDOctor.data.data) {
            console.log(resDOctor.data.data.data)
            this.setState({
                arrDoctor: resDOctor.data.data.data
            })
        }

        let stateName = name.name;
        let stateCopy = { ... this.state };
        stateCopy[stateName] = option;
        this.setState({
            ...stateCopy
        })
    }
    handleChangeSelectSpecialty = async (option, name) => {
        let { selectedProvince } = this.state;
        let resDOctor = await findDoctor({ province: selectedProvince.value, specialty: option.value });
        if (resDOctor && resDOctor.data.data) {
            console.log(resDOctor.data.data.data)
            this.setState({
                arrDoctor: resDOctor.data.data.data
            })
        }

        let stateName = name.name;
        let stateCopy = { ... this.state };
        stateCopy[stateName] = option;
        this.setState({
            ...stateCopy
        })
    }
    handleKeyDown = async (event) => {
        let nameDoctorFInd = '';
        nameDoctorFInd = event.target.value
        let arrFinded = '';
        let { selectedProvince, selectedSpecialty } = this.state;
        let arrDoctorNew = [];
        let resDOctor = await findDoctor({ province: selectedProvince.value, specialty: selectedSpecialty.value });
        if (resDOctor && resDOctor.data.data) {
            arrDoctorNew = resDOctor.data.data.data
        }


        if (event.key === "Enter" || event.keyCode === 13 && arrDoctorNew > 0) {
            arrFinded = arrDoctorNew.filter(doctor => {
                const name = doctor.User.firstName.toLowerCase();
                return name.includes(nameDoctorFInd.toLowerCase());
            });
            if (nameDoctorFInd === '') {
                let resDOctor = await findDoctor({ province: selectedProvince.value, specialty: selectedSpecialty.value });
                if (resDOctor && resDOctor.data.data) {
                    this.setState({
                        arrDoctor: resDOctor.data.data.data
                    })
                }

            }
            else {
                this.setState({
                    arrDoctor: arrFinded
                })
            }

        }
    }
    handleViewDetailDoctor = (id) => {
        if (this.props.history) {

            this.props.history.push(`/detail-doctor/${id}`)

        }
    }
    render() {
        let { arrDoctor, arrProvince, arrSpecialty } = this.state;
        console.log('arr specialty state :', this.state)
        return (
            <>
                <BannerMedpro isShowBanner={false} />
                <div className='all-doctor'>
                    <div className='tab-find'>
                        <div style={{ height: '20px' }}></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo tên"
                                // onChange={(event) => { this.handleOnchangeDesc(event, "nameFind") }}
                                onKeyDown={(event) => { this.handleKeyDown(event, 'nameFind') }}
                            />
                        </div>
                        <div className='row tab-select'>
                            <div className='findByProvince col-6'>
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChangeSelect}
                                    options={arrProvince}
                                    placeholder={'Tìm theo khu vực'}
                                    name={'selectedProvince'}
                                />
                            </div>
                            <div className='findBySpecial col-6'>
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChangeSelectSpecialty}
                                    options={arrSpecialty}
                                    placeholder={'Tìm theo chuyên khoa'}
                                    name={'selectedSpecialty'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='results-doctor'>
                        <p className='title-doctor'>Tất cả bác sĩ :</p>
                        {arrDoctor && arrDoctor.length > 0 && arrDoctor.map((item, index) => {
                            let imageBase64 = '';
                            if (item.User.image) {
                                imageBase64 = new Buffer(item.User.image, 'base64').toString('binary')
                            }
                            return (
                                <div className='results-doctor-item' key={index} onClick={() => this.handleViewDetailDoctor(item.User.id)}>
                                    <div className='avatar' style={{ backgroundImage: `url(${imageBase64})` }}></div>
                                    <div className='content-text'>
                                        <div className='name-doctor'>{item.User.positionData.valueVi + ', ' + item.User.lastName + ' ' + item.User.firstName}</div>
                                        <div className='special'>{item.specialtyData.name}</div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allRequiredDoctorInfor: state.admin.allRequiredDoctorInfor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRequireDoctorInfor: () => dispatch(actions.getRequireDoctorInfor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllDoctor);

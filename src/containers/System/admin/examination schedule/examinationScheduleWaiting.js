import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import './examinationScheduleWaiting.scss';
import { getAllPatientForDoctorS0, postStatusId } from '../../../../services/userService';
import moment from 'moment/moment';
import { toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay-ts';
import Select from 'react-select';
import * as actions from "../../../../store/actions";


class ExaminationScheduleWaiting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: '',
            isShowLoading: false,
            arrDays: [],
            listDoctors: [],
            selectDoctor: { label: 'Tất cả', value: 'All' },
            date: 'All'
        }
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getArrDay = () => {
        let arrDate = [];
        for (let i = 0; i < 7; i++) {
            let oject = {};
            if (this.props.language === languages.VI) {
                if (i === 0) {
                    let DDMM = moment(new Date()).format('DD/MM');
                    let today = `Hôm nay - ${DDMM} `;
                    oject.label = today
                }
                else {
                    let labelVi = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
                    oject.label = this.capitalizeFirstLetter(labelVi);
                }

            }
            else {
                if (i === 0) {
                    let DDMM = moment(new Date()).format('DD/MM');
                    let today = `To day - ${DDMM}`;
                    oject.label = today
                }
                else {
                    oject.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
                }
            }
            oject.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            arrDate.push(oject)
            if (arrDate.length === 7) {
                if (this.props.language === languages.VI) {
                    arrDate.unshift({
                        label: 'Tất Cả',
                        value: 'All'
                    })
                }
                else {
                    arrDate.unshift({
                        label: 'All Days',
                        value: 'All'
                    })
                }
            }
        }
        return arrDate;
    }
    async componentDidMount() {
        this.props.fetchAllDoctor();
        this.getDataPatient('All', 'All');
        //data  select day
        let arrDate = this.getArrDay();
        this.setState({
            arrDays: arrDate,
        })
    }
    buildDataInputSelect = (data) => {
        let result = [];
        let { language } = this.props;
        if (data && data.length > 0) {
            data.map((item, index) => {

                let object = {};
                let labelVI = `${item.lastName} ${item.firstName}`;
                let labelEN = `${item.firstName} ${item.lastName}`;
                object.label = language === languages.VI ? labelVI : labelEN;
                object.value = item.id;
                result.push(object)
                if (data.length === (index + 1)) {
                    if (this.props.language === languages.VI) {
                        result.unshift({
                            label: 'Tất Cả',
                            value: 'All'
                        })
                    }
                    else {
                        result.unshift({
                            label: 'All Doctors',
                            value: 'All'
                        })
                    }
                }
            })
        }
        return result;
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let arrDate = this.getArrDay();
            this.setState({
                arrDays: arrDate,
            })
        }
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            console.log('all doctor:', this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect,
            })
        }
    }

    getDataPatient = async (doctorId, date) => {
        let res = await (await getAllPatientForDoctorS0({ doctorId: doctorId, date: date })).data
        // console.log('res data patient:', res)
        console.log('data all waiting:', res.allScheduleForDoctor)
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.allScheduleForDoctor,
            })
        }

    }

    btnConfirm = async (id, statusId) => {
        let res = await (await postStatusId({ id: id, statusId: statusId })).data;
        console.log('res statusId:', res.data)
        if (res && res.data.errCode === 0 && statusId === 'S2') {
            toast.success('Confirm Success!')
        }
        if (res && res.data.errCode === 0 && statusId === 'S4') {
            toast.success('Cancel Success!')
        }
        if (res && res.data.errCode !== 0 && statusId === 'S2') {
            toast.error('Confirm failed!')
        }
        if (res && res.data.errCode !== 0 && statusId === 'S4') {
            toast.error('Cancel failed!')
        }
        if (!res) {
            toast.error('failed')
        }
    }

    handOnchangeSelect = async (event) => {
        let date = event.target.value;
        let doctorId = this.state.selectDoctor.value;
        console.log('date waiting:', date)
        this.getDataPatient(doctorId, date);
        this.setState({
            date: date,
        })
    }
    handleChangeSlectDoctor = async (selectedOption) => {
        let date = this.state.date;
        this.getDataPatient(selectedOption.value, date);
        this.setState({
            selectDoctor: selectedOption
        });
    }

    convertDate = (dataTime, date) => {
        let language = this.props.language;
        let time = language === languages.VI ? dataTime.valueVi : dataTime.valueEn;
        let day = language === languages.VI ?
            moment.unix(+date / 1000).format('dddd - DD/MM/YYYY')
            :
            moment.unix(+date / 1000).locale('en').format('ddd - MM/DD/YYYY');
        return (<td>{time} {day}</td>)
    }

    render() {
        let { dataPatient, arrDays } = this.state;
        let { language } = this.props;
        console.log('dataPatient', dataPatient)
        return (
            <>
                <LoadingOverlay
                    active={this.state.isShowLoading}
                    spinner
                    text='Loading ...'
                >
                    <div className='manage-patient-container '>
                        <div className='m-p-title'>
                            <p>
                                Quản lý bệnh nhân khám bệnh
                            </p>
                        </div>
                        <div className='manage-patient-body row mt-5'>
                            <div className=' col-6 form-group'>
                                <label>Chọn ngày khám</label>
                                <select onChange={(event) => this.handOnchangeSelect(event)}>
                                    {
                                        arrDays && arrDays.length > 0 && arrDays.map((item, index) => {
                                            return (
                                                <option value={item.value} key={index}>{item.label}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Chọn bác sĩ</label>
                                <Select
                                    value={this.state.selectDoctor}
                                    onChange={this.handleChangeSlectDoctor}
                                    options={this.state.listDoctors}
                                />

                            </div>
                        </div>
                        <div className='all-infor-schedule '>
                            <table>
                                <tbody style={{ textAlign: 'center' }}>
                                    <tr>
                                        <th style={{ width: '2%' }}>STT</th>
                                        <th style={{ width: '11%' }} >Thời Gian</th>
                                        <th style={{ width: '10%' }}>Họ Và Tên</th>
                                        <th style={{ width: '10%' }}>Địa Chỉ</th>
                                        <th style={{ width: '4%' }}>Giới Tính</th>
                                        <th style={{ width: '8%' }}>Số Điện Thoại</th>
                                        <th style={{ width: '10%' }}>Bác sĩ khám</th>
                                        <th style={{ width: '10%' }}>Phòng khám</th>
                                        <th >Lý do khám</th>
                                        <th style={{ width: '10%' }} >Actions</th>
                                    </tr>
                                    {dataPatient && dataPatient.length > 0 ? dataPatient.map((item, index) => {
                                        let timeType = language === languages.VI ? item.timeTypeDataPatient.valueVi : item.timeTypeDataPatient.valueEn
                                        let gender = language === languages.VI ? item.patientData.genderData.valueVi : item.patientData.genderData.valueEn
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                {this.convertDate(item.timeTypeDataPatient, item.date)}
                                                <td>{item.patientData.firstName}</td>
                                                <td>{item.patientData.address}</td>
                                                <td>{gender}</td>
                                                <td>{item.patientData.phoneNumber}</td>
                                                <td>{item.doctorData.lastName + ' ' + item.doctorData.firstName}</td>
                                                <td>{item.doctorData.doctorinfor.nameClinic}<br /><span> <b>Tại địa chỉ :</b> </span> {item.doctorData.doctorinfor.addressClinic}</td>
                                                <td>{item.reason}</td>

                                                <td>
                                                    <button type="button" className="btn btn-success" onClick={() => this.btnConfirm(item.id, 'S2')}>
                                                        Xác Nhận
                                                    </button>
                                                    <button type="button" className="btn btn-danger" onClick={() => this.btnConfirm(item.id, 'S4')}>Hủy</button>
                                                </td>

                                            </tr>
                                        )
                                    })
                                        :
                                        <tr>
                                            <td colSpan={10} style={{ textAlign: 'center' }}>NO DATA</td>
                                        </tr>
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div >

                    <div style={{ height: 200 }}>
                        {/* <button onClick={handleButtonClick}>Toggle active</button> */}
                    </div>
                </LoadingOverlay>
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log('all doctor2:', state.admin.allDoctors)
    return {
        language: state.app.language,
        user: state.user.userInfo,
        allDoctors: state.admin.allDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExaminationScheduleWaiting);

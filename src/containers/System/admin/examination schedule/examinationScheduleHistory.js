import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import {
    getAllPatientForDoctorCancelHistory, getAllPatientForDoctorS0History,
    getAllPatientForDoctorIsActiveHistory, getAllPatientForDoctorNotComeHistory,
    getAllPatientForDoctorDoneHistory, postStatusId, postImagePaied
}

    from '../../../../services/userService';
import moment from 'moment/moment';
import { toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay-ts';
import Select from 'react-select';
import * as actions from "../../../../store/actions";
import './examinationSchedule.scss';
import PayModal from './payModal';
import ConfirmModal from './confirmModal';
import RefuseModal from './refuseModal';

class ExaminationScheduleCancel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: '',
            isShowLoading: false,
            arrDays: [],
            listDoctors: [],
            selectDoctor: { label: 'Tất cả bác sĩ', value: 'All' },
            date: 'All',
            selectStatusId: { label: 'Lịch hẹn đang chờ xác nhận', value: 'S0' },
            selectDay: { label: 'Tất cả ngày', value: 'All' },
            phone: '',
            arrStatusIdVi: [
                { label: 'Lịch hẹn đang chờ xác nhận', value: 'S0' },
                { label: 'Lịch hẹn đang chờ khám', value: 'S2' },
                { label: 'Không thể liên hện', value: 'S4' },
                { label: 'Bệnh nhân muốn thay đổi lịch', value: 'S5' },
                { label: 'Bệnh nhân không đến', value: 'S1' },
                { label: 'Đã khám xong', value: 'S3' },
            ],
            dataModal: '',
            isOpenRemedyModal: false,
            isConfirmModal: false,
            isRefuseModal: false,
            bookingId: ''

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
                        label: 'Tất Cả ngày',
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
        this.getDataPatient('All', 'All', '');
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
                            label: 'Tất Cả bác sĩ',
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

    getDataPatient = async (doctorId, date, phone) => {
        let res;
        let selectStatusId = this.state.selectStatusId.value;

        if (selectStatusId === 'S0') {
            res = await (await getAllPatientForDoctorS0History({ doctorId: doctorId, date: date, phone: phone })).data
        }
        if (selectStatusId === 'S1') {
            res = await (await getAllPatientForDoctorNotComeHistory({ doctorId: doctorId, date: date, phone: phone })).data
        }
        if (selectStatusId === 'S2') {
            res = await (await getAllPatientForDoctorIsActiveHistory({ doctorId: doctorId, date: date, phone: phone })).data
        }
        if (selectStatusId === 'S3') {
            res = await (await getAllPatientForDoctorDoneHistory({ doctorId: doctorId, date: date, phone: phone })).data
        }
        if (selectStatusId === 'S4') {
            res = await (await getAllPatientForDoctorCancelHistory({ doctorId: doctorId, date: date, phone: phone })).data
        }
        if (selectStatusId === 'S5') {
            res = await (await getAllPatientForDoctorNotComeHistory({ doctorId: doctorId, date: date, phone: phone })).data
        }
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
            let doctorId = this.state.selectDoctor.value;
            let phone = this.state.phone;
            let date = this.state.selectDay.value;
            this.getDataPatient(doctorId, date, phone);
            toast.success('Confirm Success!')
        }
        if (res && res.data.errCode === 0 && statusId === 'S4') {
            let doctorId = this.state.selectDoctor.value;
            let phone = this.state.phone;
            let date = this.state.selectDay.value;
            this.getDataPatient(doctorId, date, phone);
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

    handleChangeSlectDoctor = async (selectedOption) => {
        let date = this.state.selectDay.value;
        let phone = this.state.phone
        this.getDataPatient(selectedOption.value, date, phone);
        this.setState({
            selectDoctor: selectedOption
        });
    }
    handleChangeSlectStatus = async (selectedOption) => {

        let selectStatusId = selectedOption.value;
        let res = '';
        if (selectStatusId === 'S0') {
            res = await (await getAllPatientForDoctorS0History({ doctorId: 'All', date: 'All', phone: '' })).data
        }
        if (selectStatusId === 'S1') {
            res = await (await getAllPatientForDoctorNotComeHistory({ doctorId: 'All', date: 'All', phone: '' })).data
        }
        if (selectStatusId === 'S2') {
            res = await (await getAllPatientForDoctorIsActiveHistory({ doctorId: 'All', date: 'All', phone: '' })).data
        }
        if (selectStatusId === 'S3') {
            res = await (await getAllPatientForDoctorDoneHistory({ doctorId: 'All', date: 'All', phone: '' })).data
        }
        if (selectStatusId === 'S4') {
            res = await (await getAllPatientForDoctorCancelHistory({ doctorId: 'All', date: 'All', phone: '' })).data
        }
        if (selectStatusId === 'S5') {
            return;
            res = await (await getAllPatientForDoctorNotComeHistory({ doctorId: 'All', date: 'All', phone: '' })).data
        }
        this.setState({
            selectDay: { label: 'Tất cả ngày', value: 'All' },
            selectDoctor: { label: 'Tất cả bác sĩ', value: 'All' },
            phone: '',
            selectStatusId: selectedOption,
            dataPatient: res.allScheduleForDoctor,
        })
    }
    handleChangeSlectDay = (selectedOption) => {
        let doctorId = this.state.selectDoctor.value;
        let phone = this.state.phone;
        let date = selectedOption.value;
        this.getDataPatient(doctorId, date, phone);
        this.setState({
            selectDay: selectedOption
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

    handleOnchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
        return valueInput;
    }

    handleKeyDown = (event) => {
        let phone = event.target.value
        let doctorId = this.state.selectDoctor.value;
        let date = this.state.selectDay.value;
        if (event.key === "Enter" || event.keyCode === 13) {
            this.getDataPatient(doctorId, date, phone);
        }
    }


    closeModal = () => {
        this.setState({
            isOpenRemedyModal: false,
            isConfirmModal: false,
            isRefuseModal: false,
        })
    }

    payBooking = (id) => {
        this.setState({
            isOpenRemedyModal: true,
            bookingId: id,
        })
    }
    openConfirmModal = (id) => {
        this.setState({
            isConfirmModal: true,
            bookingId: id,
        })
    }
    openRefuseModal = (id) => {
        this.setState({
            isRefuseModal: true,
            bookingId: id,
        })
    }
    paySendImage = async (id, image) => {
        let res = await (await postImagePaied({ id: id, imagePaied: image })).data
        if (res && res.data.errCode === 0) {
            let doctorId = this.state.selectDoctor.value;
            let phone = this.state.phone;
            let date = this.state.selectDay.value;
            this.getDataPatient(doctorId, date, phone);
            toast.success('send image pay success!')
        }
        else {
            toast.error('send image pay errorr! ')
        }
    }


    render() {
        let { dataPatient, arrDays, arrStatusIdVi, listDoctors, isOpenRemedyModal, isConfirmModal, isRefuseModal } = this.state;
        let selectStatusId = this.state.selectStatusId.value
        let { language } = this.props;
        console.log('phone', this.state.phone)
        return (
            <>
                <LoadingOverlay
                    active={this.state.isShowLoading}
                    spinner
                    text='Loading ...'
                >
                    <div className='manage-patient-container '>
                        <div className='m-p-title'>
                            <p style={{ color: 'rgb(255 100 52)', fontSize: '23px' }} >
                                Lịch Sử
                            </p>
                        </div>
                        <div className='manage-patient-body row mt-5'>
                            <div className='col-3 form-group'>
                                <label>Lịch sử của tình trạng lịch hẹn</label>
                                <Select
                                    value={this.state.selectStatusId}
                                    onChange={this.handleChangeSlectStatus}
                                    options={arrStatusIdVi}
                                />

                            </div>
                        </div>
                        <div className='all-infor-schedule '>
                            <table>
                                <tbody style={{ textAlign: 'center' }}>
                                    <tr>
                                        <th style={{ width: '2%' }}>STT</th>
                                        <th style={{ width: '11%' }} ><Select
                                            value={this.state.selectDay}
                                            onChange={this.handleChangeSlectDay}
                                            options={arrDays}
                                        /></th>
                                        <th style={{ width: '10%' }}>Họ Và Tên</th>
                                        <th style={{ width: '10%' }}>Địa Chỉ</th>
                                        <th style={{ width: '4%' }}>Giới Tính</th>
                                        <th style={{ width: '10%' }}>
                                            <input className='form-control'
                                                value={this.state.email}
                                                onChange={(event) => this.handleOnchangeInput(event, 'phone')}
                                                onKeyDown={(event) => { this.handleKeyDown(event, 'phone') }}
                                                placeholder={'Số điện thoại'}
                                            /></th>
                                        <th style={{ width: '10%' }}>
                                            <Select
                                                value={this.state.selectDoctor}
                                                onChange={this.handleChangeSlectDoctor}
                                                options={listDoctors}
                                            />
                                        </th>
                                        <th style={{ width: '10%' }}>Phòng khám</th>
                                        <th >Lý do khám</th>

                                        <th style={{ width: '10%' }} >{selectStatusId === 'S0' ? 'Action' : 'Thanh toán'}</th>
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
                                                {selectStatusId === 'S0'
                                                    ?
                                                    <td>
                                                        <button className="btn btn-success buttonS0" onClick={() => this.openConfirmModal(item.id)}>
                                                            Xác Nhận
                                                        </button>
                                                        <br />
                                                        <button className="btn btn-danger buttonS0" onClick={() => this.openRefuseModal(item.id)}>Hủy</button>
                                                    </td>
                                                    :
                                                    <td className='pay'>
                                                        {item.pay ? 'Đã hoàn thành'
                                                            :
                                                            <button className="btn btn-success buttonS0" onClick={() => this.payBooking(item.id)}>Thanh toán ngay</button>}
                                                    </td>
                                                }



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
                    <div className='modalPlay' style={{ zIndex: '100' }}></div>
                    <PayModal
                        idBooking={this.state.bookingId} isOpenRemedyModal={isOpenRemedyModal}
                        closeModal={this.closeModal} paySendImage={this.paySendImage}
                    />
                    <ConfirmModal
                        btnConfirm={this.btnConfirm} isConfirmModal={isConfirmModal}
                        closeModal={this.closeModal} idBooking={this.state.bookingId}
                    />
                    <RefuseModal
                        btnConfirm={this.btnConfirm} isRefuseModal={isRefuseModal}
                        closeModal={this.closeModal} idBooking={this.state.bookingId}
                    />

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

export default connect(mapStateToProps, mapDispatchToProps)(ExaminationScheduleCancel);

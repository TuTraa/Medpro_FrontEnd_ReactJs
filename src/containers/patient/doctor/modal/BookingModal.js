import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import "./BookingModal.scss"
import { Modal } from 'reactstrap';
import ProfileDoctor from '../profileDoctor';
import _ from "lodash";
import DatePicker from '../../../../components/Input/DatePicker';
import * as actions from "../../../../store/actions";
import Select from 'react-select';
import { postBookingApointment } from '../../../../services/userService';
import { toast } from "react-toastify";
import { Link, withRouter } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay-ts';

class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDescription: false,
            fullName: '',
            phoneNumber: '',
            email: '',
            adress: '',
            reason: '',
            birthday: '',
            gender: '',
            doctorId: '',
            SelectedGender: '',
            timeType: '',
            examinationtime: '',
            doctorName: '',
            priceExamination: '',
            dayTime: '',

            errName: '',
            errPhone: '',
            errEmail: '',
            errAddress: '',
            errReason: '',
            errBirthday: '',
            errGender: '',
            headerModal: 'normal',

            isShowLoading: false,
        }
    }
    async componentDidMount() {
        this.props.getGenders();

    }


    builtDateGender = (data) => {
        let result = [];
        let { language } = this.props;
        if (data && data.length > 0) {
            data.map(item => {
                let object = {};
                object.label = language === languages.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object)
            })
        }
        return result;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let { genderRedux } = this.props;
            this.setState({
                gender: this.builtDateGender(genderRedux)
            })
        }
        if (this.props.genderRedux !== prevProps.genderRedux) {
            let { genderRedux } = this.props;
            this.setState({
                gender: this.builtDateGender(genderRedux)
            })
        }
        if (this.props.dataTime !== prevProps.dataTime) {
            if (this.props.dataTime && !_.isEmpty(this.props.dataTime)) {
                let doctorId = this.props.dataTime.doctorId;
                let timeType = this.props.dataTime.timeType;

                this.setState({
                    doctorId: doctorId,
                    timeType: timeType,
                })
            }
        }
    }


    handleOnchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }

    handleChangeSlect = (selectedOption) => {
        this.setState({
            SelectedGender: selectedOption
        });
    }
    getDateProfile = (date, dayTime) => {
        this.setState({
            examinationtime: date,
            dayTime: dayTime,
        })
    }
    getNamePrice = (nameDoctor, price) => {
        this.setState({
            doctorName: nameDoctor,
            priceExamination: price,
        })
    }

    regexEmail = () => {
        let resErrEmail = true;
        let { email } = this.state;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!regex.test(email.trim())) {
            this.setState({
                errEmail: 'Email invalid !'
            })
            resErrEmail = false;
        }
        return resErrEmail;
    }

    regexPhone = () => {
        let resErrPhone = true;
        let { phoneNumber } = this.state;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneNumber.match(phoneno)) {
            this.setState({
                errPhone: 'Phone Number invalid !'
            })
            resErrPhone = false;
        }
        return resErrPhone;
    }

    checkErrEmpty = () => {
        let resErrEmpty = true;
        let err = ['errName', 'errPhone', 'errEmail', 'errAddress', 'errReason', 'errBirthday', 'errGender'];
        let inputvalue = ['fullName', 'phoneNumber', 'email', 'adress', 'reason', 'birthday', 'SelectedGender'];
        let stateCopy = { ... this.state }
        err.forEach((item, index) => {
            let errx = item;
            if (!stateCopy[inputvalue[index]]) {
                resErrEmpty = false;
                stateCopy[errx] = 'Không được bỏ trống !'
            }
            else {
                stateCopy[errx] = ''
            }
        })
        this.setState({
            ...stateCopy
        })
        let resErrEmail = '';
        if (stateCopy.errEmail === '') {
            resErrEmail = this.regexEmail();
        }
        let resErrPhone = '';
        if (stateCopy.errPhone === '') {
            resErrPhone = this.regexPhone();
        }
        if (!resErrEmpty || !resErrEmail || !resErrPhone) {
            console.log(resErrEmpty, resErrEmail, resErrPhone);
            return false;
        }
    }
    hadleComfirmBooking = async () => {

        let err = this.checkErrEmpty();
        if (err === false) {
            return;
        }
        this.setState({
            isShowLoading: true,
        })
        let res = await postBookingApointment({

            doctorId: this.state.doctorId,
            date: this.state.birthday,
            timeType: this.state.timeType,
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            adress: this.state.adress,
            reason: this.state.reason,
            SelectedGender: this.state.SelectedGender.value,
            language: this.props.language,
            examinationtime: this.state.examinationtime,
            doctorName: this.state.doctorName,
            priceExamination: this.state.priceExamination,
            dayTime: this.state.dayTime,
        });
        if (res && res.data && res.data.errCode === 0) {
            toast.success("save infor patient succeed!");
            this.setState({
                fullName: '',
                phoneNumber: '',
                email: '',
                adress: '',
                reason: '',
                birthday: '',
                SelectedGender: '',
                headerModal: 'success',
                isShowLoading: false,


            })
            return;
        }
        if (res && res.data && res.data.errCode === 3) {
            toast.error("Appointment schedule already exists!")
            this.setState({
                headerModal: 'exist',
                isShowLoading: false,

            })
            return;
        }
        if (res && res.data && res.data.errCode !== 3 && res.data.errCode !== 0) {
            this.setState({
                isShowLoading: false,
            })
            toast.error("save infor error!");
            return;
        }

    }

    closeModalState = () => {
        this.setState({
            errName: '',
            errPhone: '',
            errEmail: '',
            errAddress: '',
            errReason: '',
            errBirthday: '',
            errGender: '',
            headerModal: 'normal',
        })
        this.props.closeModal();
    }

    render() {
        let { isModalBooking, dataTime } = this.props;
        let { isDescription, headerModal, doctorName } = this.state;
        let doctorId;
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId;
        }
        let today = new Date(new Date().setHours(0, 0, 0, 0));
        let { errName, errPhone, errEmail, errAddress, errReason, errBirthday, errGender } = this.state;
        return (
            <LoadingOverlay
                active={this.state.isShowLoading}
                spinner
                text='Loading ...'
            >
                <Modal isOpen={isModalBooking} className={"booking-modal-container"}
                    size="lg"
                    centered
                    backdrop={true}
                >
                    <div className='booking-modal-content'>
                        <div className='booking-modal-header'>
                            <span className={headerModal === 'exist' ? 'left err-exists' : 'left'}>{headerModal === 'exist' ? `Không thể đăng ký thêm !Do đã có 1 lịch hẹn với bác sĩ ${doctorName} đang đợi bạn xác nhận ở email.` : <FormattedMessage id="patient.modal.header" />}</span>
                            <span className='right' onClick={() => this.closeModalState()}><i className="fas fa-times"></i></span>
                        </div>
                        {
                            headerModal === 'normal' || headerModal === 'exist' ?

                                <div className='booking-modal-body'>
                                    {/* {JSON.stringify(dataTime)} */}
                                    <div className='doctor-infor'>
                                        <ProfileDoctor doctorId={doctorId} dataTime={dataTime} isDescription={isDescription} getDateProfile={this.getDateProfile} getNamePrice={this.getNamePrice} />

                                    </div>
                                    <div className='container'>

                                        <div className='row mt-2'>
                                            <div className='col-6 form-group'>
                                                <label><FormattedMessage id="patient.modal.full-name" /></label>
                                                <input className={errName ? 'form-control err-input' : 'form-control'}
                                                    value={this.state.fullName}
                                                    onChange={(event) => this.handleOnchangeInput(event, 'fullName')}
                                                />
                                                {errName && <span className='err-validate'>{errName}</span>}
                                            </div>
                                            <div className='col-6 form-group'>
                                                <label><FormattedMessage id="patient.modal.phoneNumber" /></label>
                                                <input className={errPhone ? 'form-control err-input' : 'form-control'}
                                                    value={this.state.phoneNumber}
                                                    onChange={(event) => this.handleOnchangeInput(event, 'phoneNumber')}
                                                    type="text"
                                                />
                                                {errPhone && <span className='err-validate'>{errPhone}</span>}
                                            </div>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-6 form-group'>
                                                <label><FormattedMessage id="patient.modal.email" /></label>
                                                <input className={errEmail ? 'form-control err-input' : 'form-control'}
                                                    value={this.state.email}
                                                    onChange={(event) => this.handleOnchangeInput(event, 'email')}
                                                />
                                                {errEmail && <span className='err-validate'>{errEmail}</span>}
                                            </div>
                                            <div className='col-6 form-group'>
                                                <label><FormattedMessage id="patient.modal.adress" /></label>
                                                <input className={errAddress ? 'form-control err-input' : 'form-control'}
                                                    value={this.state.adress}
                                                    onChange={(event) => this.handleOnchangeInput(event, 'adress')}
                                                />
                                                {errAddress && <span className='err-validate'>{errAddress}</span>}
                                            </div>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-12 form-group'>
                                                <label><FormattedMessage id="patient.modal.reason" /></label>
                                                <input className={errReason ? 'form-control err-input' : 'form-control'}
                                                    value={this.state.reason}
                                                    onChange={(event) => this.handleOnchangeInput(event, 'reason')}
                                                />
                                                {errReason && <span className='err-validate'>{errReason}</span>}
                                            </div>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-6 form-group'>
                                                <label><FormattedMessage id="patient.modal.birthDay" /></label>
                                                <DatePicker
                                                    className={errBirthday ? 'form-control err-input' : 'form-control'}
                                                    onChange={this.handleOnchangeDatePicker}
                                                    value={this.state.birthday}
                                                    maxDate={today}
                                                />
                                                {errBirthday && <span className='err-validate'>{errBirthday}</span>}
                                            </div>
                                            <div className='col-6 form-group'>
                                                <label><FormattedMessage id="patient.modal.sex" /></label>
                                                <Select
                                                    className={errGender ? 'err-input' : ''}
                                                    value={this.state.SelectedGender}
                                                    onChange={this.handleChangeSlect}
                                                    options={this.state.gender}
                                                />
                                                {errGender && <span className='err-validate'>{errGender}</span>}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                :
                                <div className='body-success'>
                                    <p>Xin vui lòng xác nhận lịch hẹn qua email đã đăng ký !</p>
                                    <Link to={`/your_schedule_examination`} className='link-to-my-examination'>
                                        Xem thông tin lịch hẹn tại đây
                                    </Link>
                                </div>
                        }
                        <div className='booking-modal-footer'>
                            {headerModal === 'normal' || headerModal === 'exist' ? <button type="button" className="btn btn-primary" onClick={this.hadleComfirmBooking}><FormattedMessage id="patient.modal.confirm" /></button> : <></>}
                            <button type="button" className="btn btn-danger" onClick={() => { this.closeModalState() }}><FormattedMessage id="patient.modal.cancel" /></button>
                        </div>
                    </div>
                </Modal>
            </LoadingOverlay>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenders: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);

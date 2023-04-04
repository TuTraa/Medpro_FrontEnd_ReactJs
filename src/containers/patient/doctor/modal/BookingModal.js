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
            dayTime: ''
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
    hadleComfirmBooking = async () => {
        if (!this.state.fullName) {
            alert('Missing Fullname !')
            return;
        }
        if (!this.state.phoneNumber) {
            alert('Missing Phone Number !')
            return;
        }
        if (!this.state.email) {
            alert('Missing Email !')
            return;
        }
        let date = new Date(this.state.birthday).getTime();
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
            this.props.closeModal();
        }
        else {
            toast.error("save infor error!")
        }
    }

    render() {
        let { isModalBooking, dataTime, closeModal } = this.props;
        let { isDescription } = this.state;
        let doctorId;
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId;
        }
        return (
            <Modal isOpen={isModalBooking} className={"booking-modal-container"}
                size="lg"
                centered
                backdrop={true}
            >
                <div className='booking-modal-content'>
                    <div className='booking-modal-header'>
                        <span className='left'><FormattedMessage id="patient.modal.header" /></span>
                        <span className='right' onClick={closeModal}><i className="fas fa-times"></i></span>
                    </div>
                    <div className='booking-modal-body'>
                        {/* {JSON.stringify(dataTime)} */}
                        <div className='doctor-infor'>
                            <ProfileDoctor doctorId={doctorId} dataTime={dataTime} isDescription={isDescription} getDateProfile={this.getDateProfile} getNamePrice={this.getNamePrice} />

                        </div>
                        <div className='container'>

                            <div className='row mt-2'>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id="patient.modal.full-name" /></label>
                                    <input className='form-control'
                                        value={this.state.fullName}
                                        onChange={(event) => this.handleOnchangeInput(event, 'fullName')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id="patient.modal.phoneNumber" /></label>
                                    <input className='form-control'
                                        value={this.state.phoneNumber}
                                        onChange={(event) => this.handleOnchangeInput(event, 'phoneNumber')}
                                        type="text"
                                        pattern="(\+84|0)\d{9,10}"
                                    />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id="patient.modal.email" /></label>
                                    <input className='form-control'
                                        value={this.state.email}
                                        onChange={(event) => this.handleOnchangeInput(event, 'email')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id="patient.modal.adress" /></label>
                                    <input className='form-control'
                                        value={this.state.adress}
                                        onChange={(event) => this.handleOnchangeInput(event, 'adress')}
                                    />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 form-group'>
                                    <label><FormattedMessage id="patient.modal.reason" /></label>
                                    <input className='form-control'
                                        value={this.state.reason}
                                        onChange={(event) => this.handleOnchangeInput(event, 'reason')}
                                    />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id="patient.modal.birthDay" /></label>
                                    <DatePicker
                                        onChange={this.handleOnchangeDatePicker}
                                        className="form-control"
                                        value={this.state.birthday}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id="patient.modal.sex" /></label>
                                    <Select
                                        value={this.state.SelectedGender}
                                        onChange={this.handleChangeSlect}
                                        options={this.state.gender}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='booking-modal-footer'>
                        <button type="button" className="btn btn-primary" onClick={this.hadleComfirmBooking}><FormattedMessage id="patient.modal.confirm" /></button>
                        <button type="button" className="btn btn-danger" onClick={closeModal}><FormattedMessage id="patient.modal.cancel" /></button>
                    </div>
                </div>
            </Modal>
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

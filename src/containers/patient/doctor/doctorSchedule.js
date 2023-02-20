import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './doctorSchedule.scss';
import { languages } from '../../../utils/constant';
import Select from 'react-select';
import moment from 'moment/moment';
import localization from 'moment/locale/vi';
import { getSchedulebyDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import BookingModal from './modal/BookingModal';

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDays: [],
            arrTime: [],
            isModalBooking: false,
            dataScheduleTimeModal: {}
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
        }
        return arrDate;
    }
    async componentDidMount() {
        // let { language } = this.props;

        // console.log(moment(new Date()).format('dddd - DD/MM'))
        // console.log(moment(new Date()).locale('en').format('dddd - DD/MM'));
        let arrDate = this.getArrDay();
        this.setState({
            arrDays: arrDate,
        })

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let arrDate = this.getArrDay();
            this.setState({
                arrDays: arrDate,
            })
        }
        if (this.props.doctorId !== prevProps.doctorId) {
            let res = await getSchedulebyDate(this.props.doctorId, this.state.arrDays[0].value);
            this.setState({
                arrTime: res.data.data
            })
        }
    }
    handOnchangeSelect = async (event) => {
        let date = event.target.value;
        if (this.props.doctorId) {
            let id = this.props.doctorId;
            let res = await (await getSchedulebyDate(id, date)).data;
            console.log("timetypeData:", res.data)
            if (res.errCode === 0) {
                this.setState({
                    arrTime: res.data
                })
            }
        }
    }
    handScheduleTime = (time) => {

        this.setState({
            dataScheduleTimeModal: time,
            isModalBooking: true
        })
    }
    closeModal = () => {
        this.setState({
            isModalBooking: false,
        })
    }
    render() {
        let { arrDays, arrTime, isModalBooking, dataScheduleTimeModal } = this.state;
        let { language } = this.props;
        // console.log(arrTime)
        return (
            <>
                <div className='doctor-schedule-container'>
                    <div className='all-schedule'>
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
                    <div className='all-availible-time'>
                        <div className='text-calendar'>
                            <span><i class="fas fa-calendar-alt"></i> <FormattedMessage id="patient.detail-doctor.schedule" /></span>
                        </div>
                        <div className='time-content'>
                            {arrTime && arrTime.length > 0 ? arrTime.map((item, index) => {
                                let timeDisolay = language === languages.VI ? item.timeTypeData.valueVi : item.timeTypeData.valueEn;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => this.handScheduleTime(item)}
                                    >{timeDisolay}</button>

                                )
                            })
                                :
                                <div className='no-schedule'><FormattedMessage id="patient.detail-doctor.no-schedule" /></div>}
                        </div>
                        {arrTime && arrTime.length > 0 ? <div className='hand-booking'><FormattedMessage id="patient.detail-doctor.select" />
                            <i class="far fa-hand-point-up"></i>
                            <FormattedMessage id="patient.detail-doctor.put" /><sup><FormattedMessage id="patient.detail-doctor.money" /></sup>) </div> : ''}



                    </div>
                </div>
                <BookingModal isModalBooking={isModalBooking} closeModal={this.closeModal} dataTime={dataScheduleTimeModal} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);

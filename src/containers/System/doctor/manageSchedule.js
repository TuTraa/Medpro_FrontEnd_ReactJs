import React, { Component } from 'react';
import { connect } from "react-redux";
import './manageSchedule.scss';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from "../../../store/actions";
import { CRUD_ACTION, languages, dateFormat } from '../../../utils/constant';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment';
import _ from 'lodash';
import { saveBulkScheduleDoctor, getSchedulebyDate, getAllPatientForDoctor, deleteBulkScheduleDoctor } from '../../../services/userService';
import { toast } from "react-toastify"

class ManageSchedule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDate: '',
            rangeTime: [],
            arrTime: '',
        }
    }

    async componentDidMount() {
        let { user } = this.props;
        this.props.fetchAllScheduleTime();
        let today = moment(new Date()).startOf('day').valueOf();
        let res = await getSchedulebyDate(user.id, today);
        this.setState({
            arrTime: res.data.data
        })
    }
    async componentDidUpdate(prevProps, prevstate, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            })
        }
        if (prevProps.allScheduleTime !== this.props.allScheduleTime) {

            let { user } = this.props;
            let today = moment(new Date()).startOf('day').valueOf();
            let timeRegistered = [];
            let res = await getSchedulebyDate(user.id, today);
            let resAllPaitent = await (await getAllPatientForDoctor({ doctorId: user.id, date: today })).data;


            let data = this.props.allScheduleTime;
            if (data && data.length > 0 && resAllPaitent) {
                let arrTime = res.data.data;
                timeRegistered = resAllPaitent.allScheduleForDoctor;
                // let isSelected = this.isSelected(item)
                // data = data.map(item => this.setIsSelected  ({ ...item, isSelected: false }))
                function setIsSelected(item) {
                    let isSelected = false;
                    let registered = false;
                    for (let i = 0; i < arrTime.length; i++) {
                        if (item.keyMap === arrTime[i].timeType) {
                            isSelected = true;
                        }
                    }
                    for (let i = 0; i < timeRegistered.length; i++) {
                        if (item.keyMap === timeRegistered[i].timeType)
                            registered = true
                    }
                    return isSelected ? { ...item, isSelected: true, registered: registered } : { ...item, isSelected: false, registered: registered };;
                }
                let resButton = data.map(setIsSelected)

                this.setState({
                    rangeTime: resButton,
                })
            }

        }
    }

    handleChangeDatePicker = async (date) => {
        let formatDate = this.state.currentDate;
        let { user } = this.props;
        let res = await getSchedulebyDate(user.id, formatDate);
        let resAllPaitent = await (await getAllPatientForDoctor({ doctorId: user.id, date: formatDate })).data;

        let data = this.props.allScheduleTime;
        let arrTime = '';
        let timeRegistered = [];
        if (data && data.length > 0) {
            if (res && res.data && res.data.data && res.data.errCode === 0) {
                arrTime = res.data.data
                timeRegistered = resAllPaitent.allScheduleForDoctor
            }

            function setIsSelected(item) {
                let isSelected = false;
                let registered = false;
                for (let i = 0; i < arrTime.length; i++) {
                    if (item.keyMap === arrTime[i].timeType) {
                        isSelected = true;
                    }
                }
                for (let i = 0; i < timeRegistered.length; i++) {
                    if (item.keyMap === timeRegistered[i].timeType)
                        registered = true
                }
                return isSelected ? { ...item, isSelected: true, registered: registered } : { ...item, isSelected: false, registered: registered };
            }
            let resButton = data.map(setIsSelected)

            this.setState({
                rangeTime: resButton,
            })
        }
        let selectDate = new Date(date[0]).getTime();
        this.setState({
            currentDate: selectDate
        })
    }
    handClickBtnTime = (time) => {
        let rangeTime = this.state.rangeTime;
        if (rangeTime && rangeTime.length > 0) {
            rangeTime = rangeTime.map(item => {
                if (item.id === time.id) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            }
            )
            this.setState({
                rangeTime: rangeTime
            })
        }
    }
    handleSaveSchedule = async () => {
        let { rangeTime, currentDate } = this.state;

        let { user } = this.props;
        let result = [];
        let notSelect = [];
        if (!currentDate) {
            alert('Bạn chưa chọn ngày')
            return;
        }
        let formatDate = new Date(currentDate).getTime();
        if (rangeTime && rangeTime.length > 0) {
            let selectedTime = rangeTime.filter(item => item.isSelected === true)
            let notSelectedTime = rangeTime.filter(item => item.isSelected === false);

            if (selectedTime && selectedTime.length > 0) {
                selectedTime.map(time => {
                    let object = {};
                    object.doctorId = user.id;
                    object.date = formatDate;
                    object.timeType = time.keyMap;
                    result.push(object)
                })
            }
            if (notSelectedTime && notSelectedTime.length > 0) {
                notSelectedTime.map(time => {
                    let object = {};
                    object.doctorId = user.id;
                    object.date = formatDate;
                    object.timeType = time.keyMap;
                    notSelect.push(object)
                })
            }
        }
        let res = await saveBulkScheduleDoctor({ arrSchedule: result, doctorId: user.id, date: "" + formatDate });
        let resNot = await deleteBulkScheduleDoctor({ arrSchedule: notSelect, doctorId: user.id, date: "" + formatDate });
        if (res.data.errCode === 0 && res && resNot.data.errCode === 0) {
            toast.success("save infor succeed!")
        }
    }
    render() {
        let { rangeTime } = this.state;
        let { language } = this.props;
        let yesterday = new Date(new Date().setHours(0, 0, 0, 0));
        return (
            <div className='manage-schedule-container'>
                <div className='m-s-title'>
                    <FormattedMessage id="manage-schedule.title" />
                </div>
                <div className='container'>
                    <div className='row'>

                        <div className='col-3 form-group'>
                            <label>Chọn ngày khám</label>
                            <DatePicker
                                onChange={this.handleChangeDatePicker}
                                className="form-control"
                                value={this.state.currentDate}
                                minDate={yesterday}
                            />
                        </div>
                        <div className='col-12 pick-hour-container'>
                            {rangeTime && rangeTime.length > 0 &&
                                rangeTime.map((item, index) => {
                                    return (
                                        <button className={item.isSelected === true ? "btn btn-schedule active" : "btn btn-schedule "}
                                            key={index}
                                            onClick={() => {
                                                this.handClickBtnTime(item)
                                            }}
                                            disabled={item.registered}
                                        >
                                            {language === languages.VI ? item.valueVi : item.valueEn}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className=' col-12'>
                            <button className='btn btn-primary btn-save-schedule'
                                onClick={() => this.handleSaveSchedule()}
                            >
                                <FormattedMessage id="manage-schedule.save" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allScheduleTime: state.admin.allScheduleTime,
        user: state.user.userInfo,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);

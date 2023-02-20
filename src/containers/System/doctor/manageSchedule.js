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
import { saveBulkScheduleDoctor } from '../../../services/userService';
import { toast } from "react-toastify"

class ManageSchedule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listDoctors: [],
            selectDoctor: {},
            currentDate: '',
            rangeTime: [],

        }
    }

    componentDidMount() {
        this.props.fetchAllDoctor();
        this.props.fetchAllScheduleTime();
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
            })
        }
        return result;
    }
    componentDidUpdate(prevProps, prevstate, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            })
        }
        if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
            let data = this.props.allScheduleTime;
            if (data && data.length > 0) {
                data = data.map(item => ({ ...item, isSelected: false }))
                this.setState({
                    rangeTime: data,
                })
            }

        }

    }
    handleChangeSlect = async (selectedOption) => {
        this.setState({
            selectDoctor: selectedOption
        });
    }

    handleChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
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
        let { rangeTime, selectDoctor, currentDate } = this.state;
        let result = [];
        if (!currentDate) {
            alert('Bạn chưa chọn ngày')
            return;
        }
        if (selectDoctor && _.isEmpty(selectDoctor)) {
            alert('chưa nhập bác sĩ')
            return;
        }
        // let formatDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER)
        // let formatDate = moment(currentDate).unix();
        let formatDate = new Date(currentDate).getTime();
        if (rangeTime && rangeTime.length > 0) {
            let selectedTime = rangeTime.filter(item => item.isSelected === true)

            if (selectedTime && selectedTime.length > 0) {
                selectedTime.map(time => {
                    let object = {};
                    object.doctorId = selectDoctor.value;
                    object.date = formatDate;
                    object.timeType = time.keyMap;
                    result.push(object)
                })

            }
            else {
                alert('chưa chọn mốc thời gian nào')
            }
        }
        let res = await saveBulkScheduleDoctor({ arrSchedule: result, doctorId: selectDoctor.value, date: "" + formatDate });
        if (res.data.errCode === 0 && res) {
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
                        <div className='col-6 form-group'>
                            <label><FormattedMessage id="manage-schedule.chosse-doctor" /></label>
                            <Select
                                value={this.state.selectDoctor}
                                onChange={this.handleChangeSlect}
                                options={this.state.listDoctors}
                            />

                        </div>
                        <div className='col-6 form-group'>
                            <label><FormattedMessage id="manage-schedule.chosse-doctor" /></label>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);

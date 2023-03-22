import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import './managePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';
import { getAllPatientForDoctor, postSendRemedy } from '../../../services/userService';
import moment from 'moment/moment';
import RemedyModal from './remedyModal';
import { toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay-ts';



class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: '',
            isOpenRemedyModal: false,
            dataModal: {},
            isShowLoading: false,
        }
    }
    async componentDidMount() {
        let { currentDate } = this.state;
        this.getDataPatient(currentDate);

    }

    getDataPatient = async (currentDate) => {
        let { user } = this.props;
        let res = await (await getAllPatientForDoctor({ doctorId: user.id, date: currentDate })).data
        // console.log('res data patient:', res)
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.allScheduleForDoctor,
            })
        }

    }

    btnConfirm = (item) => {
        let data = {
            doctorId: item.doctorId,
            patientId: item.patientId,
            patientName: item.patientData.firstName,
            email: item.patientData.email,
            timeType: item.timeType,
        }
        this.setState({
            isOpenRemedyModal: true,
            dataModal: data,
        })
        console.log('check data:', data)
    }

    closeModal = () => {
        this.setState({
            isOpenRemedyModal: false,
        })
    }

    sendRemedy = async (datachild) => {
        this.setState({
            isShowLoading: true,
        })
        let { dataModal } = this.state;
        let res = await postSendRemedy({
            ...datachild,
            doctorId: dataModal.doctorId,
            patientId: dataModal.patientId,
            timeType: dataModal.timeType,
            language: this.props.language,
            patientName: dataModal.patientName,

        });
        // console.log('check modal:', res.data);
        if (res.data.errCode === 0) {
            this.setState({
                isShowLoading: false,
            })
            toast.success('Send Remedy Success!');
            this.getDataPatient(moment(new Date()).startOf('day').valueOf());
        }
        else {
            this.setState({
                isShowLoading: false,
            })
            toast.error('Send Remedy error!');
            console.log('err:', res.ereMessage)
        }
        this.setState({
            isOpenRemedyModal: false,
        })
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        }, () => {
            let { user } = this.props;
            let currentDate = new Date(date[0]).getTime();
            this.getDataPatient(currentDate);
        })
    }
    render() {
        let yesterday = new Date(new Date().setHours(0, 0, 0, 0));
        let { dataPatient, isOpenRemedyModal, dataModal } = this.state;
        let { language } = this.props;
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
                                <DatePicker
                                    onChange={this.handleChangeDatePicker}
                                    className="form-control"
                                    value={this.state.currentDate}
                                    minDate={yesterday}
                                />
                            </div>
                        </div>
                        <div className='all-infor-schedule '>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th >Thời Gian</th>
                                        <th>Họ Và Tên</th>
                                        <th>Địa Chỉ</th>
                                        <th>Giới Tính</th>
                                        <th>Số Điện Thoại</th>
                                        <th>Actions</th>
                                    </tr>
                                    {dataPatient && dataPatient.length > 0 ? dataPatient.map((item, index) => {
                                        let timeType = language === languages.VI ? item.timeTypeDataPatient.valueVi : item.timeTypeDataPatient.valueEn
                                        let gender = language === languages.VI ? item.patientData.genderData.valueVi : item.patientData.genderData.valueEn
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{timeType}</td>
                                                <td>{item.patientData.firstName}</td>
                                                <td>{item.patientData.address}</td>
                                                <td>{gender}</td>
                                                <td>{item.patientData.phoneNumber}</td>
                                                <td>
                                                    <button type="button" className="btn btn-warning" onClick={() => this.btnConfirm(item)}>
                                                        Xác Nhận
                                                    </button>
                                                </td>

                                            </tr>
                                        )
                                    })
                                        :
                                        <tr>
                                            <td colSpan={7} style={{ textAlign: 'center' }}>NO DATA</td>
                                        </tr>
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div >
                    <RemedyModal dataModal={dataModal} isOpenRemedyModal={isOpenRemedyModal}
                        closeModal={this.closeModal} sendRemedy={this.sendRemedy} />

                    <div style={{ height: 200 }}>
                        {/* <button onClick={handleButtonClick}>Toggle active</button> */}
                    </div>
                </LoadingOverlay>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../utils/constant';
import { FormattedMessage } from 'react-intl';
import "./notifyModal.scss"
import _ from "lodash";
import * as actions from "../../store/actions";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { notifyDoctor, checkedNotify } from '../../services/userService';
import { toast } from "react-toastify";
import moment from 'moment/moment';


class NotifyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrNotify: []
        }
    }
    async componentDidMount() {
        this.props.getGenders();
        if (this.props.doctorId) {
            let res = await notifyDoctor({ doctorId: this.props.doctorId, result: 'no data', statusId: 'S2' });
            if (res && res.data && res.data.errCode === 0) {
                this.setState({
                    arrNotify: res.data.allNotify,
                })
            }
        }

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doctorId !== prevProps.doctorId) {
            let res = await notifyDoctor(this.props.doctorId);
            if (res && res.data && res.data.errCode === 0) {
                this.setState({
                    arrNotify: res.data.allNotify,
                })
            }
        }
    }

    checked = async (bookingId) => {
        let res = await checkedNotify(bookingId);
        if (res && res.data && res.data.errCode === 0) {
            this.props.setLength();
            let res = await notifyDoctor({ doctorId: this.props.doctorId, result: 'no data', statusId: 'S2' });
            if (res && res.data && res.data.errCode === 0) {
                this.setState({
                    arrNotify: res.data.allNotify,
                })
            }
            toast.success('checked success!');
            return;
        }
        else {
            toast.error('checked failed!')
        }
    }

    render() {
        let { arrNotify } = this.state;
        let { language } = this.props;
        console.log('arrNotify', arrNotify)

        return (

            <Modal isOpen={this.props.isOpen} className={"booking-modal-container"}
                size="lg"
                centered
                backdrop={true}
            >
                <div className="modal-header">
                    <h5 className="modal-title">Lịch hẹn mới</h5>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.openCloseModal}>
                        <span aria-hidden="true"><i class="fas fa-times color-i"></i></span>
                    </button>
                </div>
                <ModalBody >
                    <div className='text-confirm' style={{ textAlign: 'center' }}>
                        <table className='notify-modal'>
                            <tbody>
                                <tr >
                                    <th style={{ width: '10%' }}>stt</th>
                                    <th>Tên</th>
                                    <th>Thời gian</th>
                                    <th>Action</th>
                                </tr>
                                {arrNotify && arrNotify.length > 0 ? arrNotify.map((item, index) => {
                                    let date = language === languages.VI ?
                                        `${item.timeTypeDataPatient.valueVi} - ${moment.unix(+item.date / 1000).format('dddd - DD/MM/YYYY')}`
                                        :
                                        `${item.timeTypeDataPatient.valueEn} - ${moment.unix(+item.date / 1000).locale('en').format('ddd - MM/DD/YYYY')}`;
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.patientData.firstName}</td>
                                            <td>{date}</td>
                                            <td className='action' >
                                                <i
                                                    onClick={() => this.checked(item.id)}
                                                    class="fas fa-check-circle">

                                                </i>
                                            </td>
                                        </tr>
                                    )

                                })
                                    :
                                    <tr>
                                        <td style={{ textAlign: 'center' }} colSpan={4}> No data </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.openCloseModal} >Xác nhận</Button>{' '}
                </ModalFooter>

            </Modal >
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

export default connect(mapStateToProps, mapDispatchToProps)(NotifyModal);

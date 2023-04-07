import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import "./remedyModal.scss"
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash";
import { postStatusId, sendResult } from '../../../services/userService';
import Select from 'react-select';
import { toast } from "react-toastify";
import CommonUtils from '../../../utils/CommonUtils';


class RemedyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: '',
            cancelOrFinish: false,
            result: '',
        }
    }
    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email,

            })
        }

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataModal !== this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email,
            })
        }
    }

    handleOchangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    handleOchangeResult = (event) => {
        this.setState({
            result: event.target.value,
        })
    }
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            // let objUrl = URL.createObjectURL(file);
            this.setState({
                imgBase64: base64,
            })
        }

    }

    handleSendRemedy = async () => {
        let { cancelOrFinish, dataModal } = this.props;
        let id = dataModal.idBooking;
        let { email, imgBase64, result } = this.state;
        if (cancelOrFinish) {
            let res = await (await postStatusId({ id: id, statusId: "S1" })).data;
            if (res && res.data.errCode === 0) {
                this.props.renderPage();
                toast.success('cancel booking success!')
            }
            else {
                toast.error('Cancel Booking error!')
            }
        } else {
            let resSendResult = await sendResult({ id: id, result: result })
            console.log('resSendResult:', resSendResult)
            this.props.sendRemedy({ email: email, imgBase64: imgBase64 })
        }
    }

    render() {
        let { isOpenRemedyModal, closeModal, cancelOrFinish } = this.props;

        return (
            <Modal isOpen={isOpenRemedyModal} className={"booking-modal-container"}
                size="modal-sm"
                centered
                backdrop={true}
            >
                <div className="modal-header">
                    <h5 className="modal-title">{cancelOrFinish ? 'Hủy đơn' : 'Gửi đơn thuốc'}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
                        {/* <span aria-hidden="true"><i class="fas fa-times"></i></span> */}
                    </button>
                </div>
                <ModalBody>
                    {cancelOrFinish
                        ?
                        <div>Khách hàng không đến !</div>
                        :
                        <div className='row'>
                            <div className='col-6 form-goup'>
                                <label>Email Patient</label>
                                <input className='form-control' type='email' value={this.state.email}
                                    onChange={(event) => { this.handleOchangeEmail(event) }}
                                >

                                </input>
                            </div>
                            <div className='col-6 form-goup'>
                                <label>Chon file don thuoc</label>
                                <input className='form-control-file' type='file'
                                    onChange={(event) => { this.handleOnchangeImage(event) }}
                                >

                                </input>
                            </div>
                            <div className='col-12 form-goup'>
                                <label>Chẩn đoán của bác sĩ</label>
                                <textarea className='form-control' type='text'
                                    onChange={(event) => { this.handleOchangeResult(event) }}
                                />

                            </div>
                        </div>
                    }

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleSendRemedy()}>Xác nhận</Button>{' '}
                    <Button color="secondary" onClick={closeModal}>Đóng</Button>
                </ModalFooter>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);

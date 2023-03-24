import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash";
import { postImagePaied } from '../../../../services/userService';
import { toast } from "react-toastify";
import { CommonUtils } from '../../../../utils';

class PayModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageDataBase: '',
            previewImgUrl: '',
        }
    }
    async componentDidMount() {
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objUrl,
                imageDataBase: base64,
            })
        }

    }


    handleSendRemedy = async () => {

        let id = this.props.idBooking;
        let { imageDataBase } = this.state;
        this.props.paySendImage(id, imageDataBase);
        this.props.closeModal();
    }

    render() {
        let { isOpenRemedyModal } = this.props;

        return (
            <div className='modalPay'>
                <Modal isOpen={isOpenRemedyModal} className={"booking-modal-container"}
                    size="modal-sm"
                    centered
                    backdrop={true}
                >
                    <div className="modal-header">
                        <h5 className="modal-title">Gửi ảnh thanh toán để xác nhận</h5>
                        <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <ModalBody >
                        <div className='row'>
                            <div className='col-5'></div>
                            <div className='col-3 form-goup'>
                                <div className="form-group input-image" >
                                    <div className='preview-img-container'>
                                        <input type="file"
                                            onChange={(event) => { this.handleOnchangeImage(event) }}
                                            className="form-control" id="previewImg" hidden />
                                        <label className='lable-upload' htmlFor='previewImg'>tải ảnh <i className="fas fa-upload"></i> </label>
                                        <div
                                            className='preview-image'
                                            style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'></div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleSendRemedy()}>Send</Button>{' '}
                        <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
                    </ModalFooter>

                </Modal>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PayModal);

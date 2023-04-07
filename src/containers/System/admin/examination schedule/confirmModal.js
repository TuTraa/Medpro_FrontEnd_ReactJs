import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash";
import { CommonUtils } from '../../../../utils';

class ConfirmModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    confirmInformation = () => {
        let id = this.props.idBooking;
        this.props.btnConfirm(id, 'S2');
        this.props.closeModal();
    }

    render() {
        let { isConfirmModal } = this.props;

        return (
            <div className='modalPay'>
                <Modal isOpen={isConfirmModal} className={"booking-modal-container"}
                    size="modal-sm"
                    centered
                    backdrop={true}
                >
                    <div className="modal-header">
                        <h5 className="modal-title">Xác nhận lịch hẹn</h5>
                        <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                    <ModalBody >
                        <div className='text-confirm' style={{ textAlign: 'center' }}>
                            Bạn đã liên hệ và thông tin đã chính xác !
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.confirmInformation()}>Xác nhận</Button>{' '}
                        <Button color="secondary" onClick={this.props.closeModal}>Hủy</Button>
                    </ModalFooter>

                </Modal>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);

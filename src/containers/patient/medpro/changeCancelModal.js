import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import "./changeCancelModal.scss"
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash";
import { postStatusId } from '../../../services/userService';
import { toast } from "react-toastify";


class ChangeCancelModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    confirmModal = async () => {
        this.props.changeStatusId();
        this.props.closeModal();
    }

    render() {
        let { isOpenCancelChangeModal, cancelOrChange, closeModal } = this.props;

        return (
            <Modal isOpen={isOpenCancelChangeModal} className={"booking-modal-container"}
                size="modal-sm"
                centered
                backdrop={true}
            >
                <div className="modal-header">
                    <h5 className="modal-title">{cancelOrChange === "S4" ? 'Hủy đơn' : 'Thay đổi lịch khám'}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
                        {/* <span aria-hidden="true">×</span> */}
                    </button>
                </div>
                <ModalBody>
                    <div className='col-6 form-group'>
                        <label>Nhập lý do </label>
                        <input className='form-control'
                            placeholder={'Nhập lý do bạn muốn thay đổi'}
                        />
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.confirmModal()}>Xác nhận</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCancelModal);

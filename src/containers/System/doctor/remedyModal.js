import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import "./remedyModal.scss"
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash";
import Select from 'react-select';
import { toast } from "react-toastify";
import CommonUtils from '../../../utils/CommonUtils';


class RemedyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: '',
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
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objUrl = URL.createObjectURL(file);
            this.setState({
                imgBase64: base64,
            })
        }

    }

    handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
    }

    render() {
        let { isOpenRemedyModal, dataModal, closeRemedyModal } = this.props;

        return (
            <Modal isOpen={isOpenRemedyModal} className={"booking-modal-container"}
                size="lg"
                centered
                backdrop={true}
            >
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <ModalBody>
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
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleSendRemedy()}>Send</Button>{' '}
                    <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
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

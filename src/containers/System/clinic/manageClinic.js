import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import "./manageClinic.scss";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import CommonUtils from '../../../utils/CommonUtils';
import { createNewClinic } from '../../../services/userService';
import { toast } from "react-toastify";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            imageBase64: "",
            descriptionMarkdown: "",
            descriptionHTML: "",
        }
    }
    async componentDidMount() {
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleOnchangeInput = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy,
        })
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionMarkdown: text,
            descriptionHTML: html,
        })
    }
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            // let objUrl = URL.createObjectURL(file);
            this.setState({
                // imageBase64: objUrl,
                imageBase64: base64,
            })
        }

    }
    handleSaveNewClinic = async () => {
        let res = await createNewClinic(this.state);
        console.log("res specialty:", res)
        if (res && res.data && res.data.errCode === 0) {
            toast.success("Create New Specialty Success !");
            this.setState({
                name: "",
                imageBase64: "",
                address: "",
                descriptionMarkdown: "",
                descriptionHTML: "",
            })
        }
        else {
            toast.error("Create New Specialty failed !");
            console.log("create specialty err :", res)
        }
    }
    render() {

        return (
            <div className='manage-specialty-container'>
                <div className='ms-title'>Quản lý phòng khám</div>
                <div className='add-new-specialty'>
                    <div className='row mb-4'>
                        <div className='col-6 form-group'>
                            <label>Tên phòng khám </label>
                            <input className='form-control '
                                value={this.state.name}
                                onChange={(event) => this.handleOnchangeInput(event, "name")}
                            />
                        </div>
                        <div className='col-6 form-group'>
                            <label>Ảnh phòng khám </label><br></br>
                            <input className='form-control-file ' type='file'
                                onChange={(event) => this.handleOnchangeImage(event)} />
                        </div>
                        <div className='col-6 form-group'>
                            <label>Địa chỉ phòng khám </label>
                            <input className='form-control '
                                value={this.state.address}
                                onChange={(event) => this.handleOnchangeInput(event, "address")}
                            />
                        </div>
                    </div>

                    <MdEditor style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.descriptionMarkdown} />
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={() => this.handleSaveNewClinic()}>Lưu</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);

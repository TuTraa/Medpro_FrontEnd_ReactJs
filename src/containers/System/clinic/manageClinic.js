import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import "./manageClinic.scss";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import CommonUtils from '../../../utils/CommonUtils';
import { createNewClinic, getAllClinic, deleteClinic, editClinic } from '../../../services/userService';
import { toast } from "react-toastify";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOrCreate: false,
            name: "",
            address: "",
            imageBase64: "",
            descriptionMarkdown: "",
            descriptionHTML: "",
            arrClinic: '',
        }
    }
    async componentDidMount() {
        let arrClinic = await getAllClinic();
        if (arrClinic && arrClinic.data && arrClinic.data.errCode === 0) {
            this.setState({
                arrClinic: arrClinic.data.data
            })
        }
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
        let { name, address, imageBase64, descriptionMarkdown, descriptionHTML } = this.state;
        let res = await createNewClinic({ name: name, address: address, imageBase64: imageBase64, descriptionMarkdown: descriptionMarkdown, descriptionHTML: descriptionHTML });
        if (res && res.data && res.data.errCode === 0) {
            this.setState({
                id: '',
                name: "",
                imageBase64: "",
                address: "",
                descriptionMarkdown: "",
                descriptionHTML: "",
            })
        }
        else {
            toast.error("Create New Specialty failed !");
        }
    }
    deleteClinic = async (id) => {
        let res = await deleteClinic(id);
        if (res && res.data && res.data.data.errCode === 0) {
            toast.success('delete clinic success!')
        }
        else {
            toast.error('delete clinic failed!')
        }
    }
    builtDataEdit = (data) => {
        this.setState({
            id: data.id,
            name: data.name,
            address: data.address,
            descriptionMarkdown: data.descriptionMarkdown,
            editOrCreate: true
        })
    }
    editClinic = async (data) => {
        let { name, address, imageBase64, descriptionMarkdown, descriptionHTML, id } = this.state;
        let res = await editClinic({ id: id, name: name, address: address, imageBase64: imageBase64, descriptionMarkdown: descriptionMarkdown, descriptionHTML: descriptionHTML });
        if (res) {
            let arrClinic = await getAllClinic();
            if (arrClinic && arrClinic.data && arrClinic.data.errCode === 0) {
                this.setState({
                    arrClinic: arrClinic.data.data
                })
            }
            toast.success('delete clinic success!')
            this.setState({
                editOrCreate: false,
                name: "",
                address: "",
                imageBase64: "",
                descriptionMarkdown: "",
                descriptionHTML: "",
            })
        }
        else {
            toast.error('delete clinic failed!')
        }
    }
    render() {
        let { arrClinic, editOrCreate } = this.state;
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
                {editOrCreate
                    ?
                    <button type="button" className="btn btn-secondary mt-3" onClick={() => this.editClinic()}>Sửa</button>

                    :
                    <button type="button" className="btn btn-primary mt-3" onClick={() => this.handleSaveNewClinic()}>Thêm mới</button>

                }
                <div className='edit-specialty'>
                    <div className='table-data-specialty'>
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{ width: '10%' }}>Stt</th>
                                    <th>Tên Phòng khám</th>
                                    <th style={{ width: '19%' }} > Action</th>
                                </tr>
                                {arrClinic && arrClinic.length > 0 && arrClinic.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button type="button" className="btn btn-warning" onClick={() => { this.builtDataEdit(item) }}>Sửa</button>
                                                <button type="button" className="btn btn-danger"
                                                    onClick={() => { this.deleteClinic(item.id) }}
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
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

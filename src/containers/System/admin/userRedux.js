import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { languages } from '../../../utils';
import * as actions from "../../../store/actions";
import './userRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import TableManageUser from './tableManageUser';
import CommonUtils from '../../../utils/CommonUtils';


class UserRedux extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: '',
            isOpen: false,


            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',

            isEditUser: false,
        }
    }

    async componentDidMount() {

        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // try {
        //     let res = await getAllCodeService('gender');
        //     console.log(res.data.data)
        //     if (res && res.data.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data.data,
        //         })
        //     }
        // }
        // catch (e) {
        //     console.log(e);
        // }
    }
    onchangeInput = (event, id) => {
        let copyState = { ...this.state };

        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        }, () => {
        })
    }
    componentDidUpdate(prevProps, prevstate, snapshot) {
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: this.props.roleRedux,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
            })
        }
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;

            this.setState({
                genderArr: this.props.genderRedux,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',

            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : '',

            })
        }
        if (prevProps.users !== this.props.users) {
            this.setState({
                id: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: '',
                position: '',
                role: '',
                avatar: '',
                previewImgUrl:''
            })
        }
    }
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objUrl,
                avatar: base64,
            })
        }

    }

    openPreviewImage = () => {
        if (!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid == false) {
            return;
        } else {
            this.props.createNewUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                gender: this.state.gender,
                roleId: this.state.role,
                phoneNumber: this.state.phoneNumber,
                positionId: this.state.position,
                avatar: this.state.avatar,
            })
        }
    }


    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address', 'gender', 'position', 'role'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required : ' + arrCheck[i]);
                break;
            }
        }
        return isValid;
    }
    clickEditUser = (users) => {
        let arrGenders = this.state.genderArr;
        let arrPositions = this.state.positionArr;
        let arrRoles = this.state.roleArr;
        let imageBase64 = '';
        if (users.image) {

            imageBase64 = new Buffer(users.image, 'base64').toString('binary');
            console.log('click edit users',imageBase64)
        }
        this.setState({
            id: users.id,
            email: users.email,
            password: '123456',
            firstName: users.firstName,
            lastName: users.lastName,
            phoneNumber: users.phoneNumber,
            address: users.address,
            gender: arrGenders && arrPositions.length > 0 ? users.gender : '',
            position: arrPositions && arrPositions.length > 0 ? users.positionId : '',
            role: arrRoles && arrRoles.length > 0 ? users.roleId : '',
            previewImgUrl: imageBase64,

            isEditUser: true,

        }
        )
    }

    saveEditUser = () => {
        this.props.EditUser(
            {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                gender: this.state.gender,
                roleId: this.state.role,
                phoneNumber: this.state.phoneNumber,
                positionId: this.state.position,
                avatar:this.state.avatar,
            }
        );
        this.setState({
            isEditUser: false,

        }, console.log(this.state))
    }
    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let getGender = this.props.loadingGender;
        let users = this.props.users;

        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state;


        return (
            <div className=' user-redux-container'>
                <div className='title'>
                    <div className="text-center" ><FormattedMessage id="manage-user.add" /></div>
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4"><FormattedMessage id="manage-user.email" /></label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder="email"
                                    onChange={(event) => this.onchangeInput(event, 'email')} value={email} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.password" /></label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                                    onChange={(event) => this.onchangeInput(event, 'password')} value={password} />
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4"><FormattedMessage id="manage-user.firstName" /></label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder=""
                                    onChange={(event) => this.onchangeInput(event, 'firstName')} value={firstName} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.lastName" /></label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder=""
                                    onChange={(event) => this.onchangeInput(event, 'lastName')} value={lastName} />
                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className="form-group  col-md-4">
                                <label for="inputAddress2"><FormattedMessage id="manage-user.phoneNumber" /></label>
                                <input type="number" className="form-control" id="inputAddress2" placeholder="enter numbers only"
                                    onChange={(event) => this.onchangeInput(event, 'phoneNumber')}
                                    value={phoneNumber} />
                            </div>
                            <div className="form-group  col-md-8">
                                <label for="inputAddress"><FormattedMessage id="manage-user.adress" /></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                                    onChange={(event) => this.onchangeInput(event, 'address')}
                                    value={address} />
                            </div>
                        </div>
                        <div className='col-12'>{getGender ? 'loading gender' : ""}</div>
                        <div className="form-row row mt-4">

                            <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id="manage-user.gender" /></label>
                                <select id="inputState" className="form-control"
                                    onChange={(event) => this.onchangeInput(event, 'gender')}
                                    value={gender}
                                >
                                    {genders && genders.length && genders.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id="manage-user.positon" /></label>
                                <select id="inputState" className="form-control"
                                    onChange={(event) => this.onchangeInput(event, 'position')} value={position}
                                >
                                    {positions && positions.length && positions.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id="manage-user.roleId" /></label>
                                <select id="inputState" className="form-control"
                                    onChange={(event) => this.onchangeInput(event, 'role')} value={role}
                                >
                                    {roles && roles.length && roles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id="manage-user.image" /></label>
                                <div className='preview-img-container'>
                                    <input type="file"
                                        onChange={(event) => { this.handleOnchangeImage(event) }}
                                        className="form-control" id="previewImg" hidden />
                                    <label className='lable-upload' htmlFor='previewImg'>tải ảnh <i class="fas fa-upload"></i> </label>
                                    <div
                                        className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>

                        </div>
                        {
                            this.state.isEditUser ?
                                <div className="form-group ">
                                    <button
                                        type="submit"
                                        className="btn btn btn-warning mt-2"
                                        onClick={() => this.saveEditUser()}
                                    >
                                        Sửa
                                        {/* <FormattedMessage id="manage-user.save" /> */}
                                    </button>
                                </div> :
                                <div className="form-group ">
                                    <button
                                        type="submit"
                                        className="btn btn-primary mt-2"
                                        onClick={() => this.handleSaveUser()}
                                    >
                                        <FormattedMessage id="manage-user.save" />
                                    </button>
                                </div>

                        }
                        <div className='mt-4'>
                            <TableManageUser clickEditUser={this.clickEditUser} />
                        </div>

                    </div>
                </div>
                {this.state.isOpen && <Lightbox
                    mainSrc={this.state.previewImgUrl}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />

                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
        loadingGender: state.admin.isLoadingGender,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        users: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
        // changLangueAPPRedux: (language) => dispatch(actions.changLangueAPP(language))
        getGenderStart: () => dispatch(actions.fetchGenderStart()),

        getPositionStart: () => dispatch(actions.fetchPositionStart()),

        getRoleStart: () => dispatch(actions.fetchRoleStart()),

        createNewUser: (data) => dispatch(actions.createNewUser(data)),

        EditUser: (data) => dispatch(actions.EditUser(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

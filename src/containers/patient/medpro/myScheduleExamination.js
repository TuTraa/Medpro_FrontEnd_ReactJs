import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './myScheduleExamination.scss';
import BannerMedpro from '../../HomePage/bannerMedpro';
import { getMyEmination, postImagePaied, postStatusId } from '../../../services/userService';
import moment from 'moment/moment';
import { languages } from '../../../utils/constant';
import NumberFormat from 'react-number-format';
import CommonUtils from '../../../utils/CommonUtils';
import Lightbox from 'react-image-lightbox';
import { toast } from "react-toastify";
import ChangeCancelModal from './changeCancelModal';
import HomeFooter from '../../HomePage/HomeFooter';

class MyScheduleExamination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            name: '',
            allInforExaminaions: '',
            statusId: 'S',
            statusIdNull: '',
            isOpen: false,
            imageDataBase: '',
            previewImgUrl: '',
            noSuccess: 0,
            isOpenCancelChangeModal: false,
            cancelOrChange: false,
            idBooking: '',

            errPhone: '',
            errEmail: '',



        }
    }
    async componentDidMount() {

    }
    convertDate = (dataTime, date) => {
        let language = this.props.language;
        let time = language === languages.VI ? dataTime.valueVi : dataTime.valueEn;
        let day = language === languages.VI ?
            moment.unix(+date / 1000).format('dddd - DD/MM/YYYY')
            :
            moment.unix(+date / 1000).locale('en').format('ddd - MM/DD/YYYY');
        return (<td>{time} {day}</td>)
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleOnchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
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

    regexEmail = () => {
        let resErrEmail = true;
        let { email } = this.state;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!regex.test(email.trim())) {
            this.setState({
                errEmail: 'Email invalid !'
            })
            resErrEmail = false;
        }
        return resErrEmail;
    }

    regexPhone = () => {
        let resErrPhone = true;
        let { phone } = this.state;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(phoneno)) {
            this.setState({
                errPhone: 'Phone Number invalid !'
            })
            resErrPhone = false;
        }
        return resErrPhone;
    }

    checkErrEmpty = () => {
        let resErrEmpty = true;
        let err = ['errPhone', 'errEmail'];
        let inputvalue = ['phone', 'email'];
        let stateCopy = { ... this.state }
        err.forEach((item, index) => {
            let errx = item;
            if (!stateCopy[inputvalue[index]]) {
                resErrEmpty = false;
                stateCopy[errx] = 'Không được bỏ trống !'
            }
            else {
                stateCopy[errx] = ''
            }
        })
        this.setState({
            ...stateCopy
        })
        let resErrEmail = '';
        if (stateCopy.errEmail === '') {
            resErrEmail = this.regexEmail();
        }
        let resErrPhone = '';
        if (stateCopy.errPhone === '') {
            resErrPhone = this.regexPhone();
        }
        if (!resErrEmpty || !resErrEmail || !resErrPhone) {
            console.log(resErrEmpty, resErrEmail, resErrPhone);
            return false;
        }
    }

    findInforByEmailPhone = async () => {
        this.checkErrEmpty();
        let { email, phone } = this.state;
        let res = await getMyEmination({ email, phone });
        if (res && res.data && res.data.data && res.data.errCode === 0) {
            let AllData = res.data.data
            this.setState({
                name: AllData.firstName,
                allInforExaminaions: AllData.patientData,
                statusId: 'oke',
                noSuccess: 0,
            })
        }
        else {

            this.setState({
                statusIdNull: 'null',
                noSuccess: this.state.noSuccess + 1,
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }

    sendImagePaied = async (id) => {
        let { imageDataBase } = this.state;
        let res = await (await postImagePaied({ id: id, imagePaied: imageDataBase })).data
        if (res && res.data.errCode === 0) {
            let { email, phone } = this.state;
            let res = await getMyEmination({ email, phone });
            if (res && res.data && res.data.data && res.data.errCode === 0) {
                let AllData = res.data.data
                this.setState({
                    name: AllData.firstName,
                    allInforExaminaions: AllData.patientData,
                })
            }
            toast.success('send image pay success!')
        }
        else {
            toast.error('send image pay errorr! ')
        }
    }
    closeModal = () => {
        this.setState({
            isOpenCancelChangeModal: false,
        })
    }
    reload = async () => {
        let { email, phone } = this.state;
        let res = await getMyEmination({ email, phone });
        if (res && res.data && res.data.data && res.data.errCode === 0) {
            let AllData = res.data.data
            this.setState({
                allInforExaminaions: AllData.patientData,
            })
        }
    }
    openModalCancelChange = (id, statusId) => {
        this.setState({
            cancelOrChange: statusId,
            isOpenCancelChangeModal: true,
            idBooking: id,

        })
    }
    changeStatusId = async () => {
        let { cancelOrChange, idBooking } = this.state;
        let res = await (await postStatusId({ id: idBooking, statusId: cancelOrChange })).data;
        if (res && res.data.errCode === 0) {
            let { email, phone } = this.state;
            let res = await getMyEmination({ email, phone });
            if (res && res.data && res.data.data && res.data.errCode === 0) {
                let AllData = res.data.data
                this.setState({
                    name: AllData.firstName,
                    allInforExaminaions: AllData.patientData,
                })
            }
            toast.success('Change booking success!')
        }
        else {
            let { email, phone } = this.state;
            let res = await getMyEmination({ email, phone });
            if (res && res.data && res.data.data && res.data.errCode === 0) {
                let AllData = res.data.data
                this.setState({
                    name: AllData.firstName,
                    allInforExaminaions: AllData.patientData,
                })
            }
            toast.error('Change Booking error!')
        }
    }
    render() {
        // let timeType = this.state.allInforExaminaions.timeTypeDataPatient;
        let { statusId, isOpenCancelChangeModal, cancelOrChange, errEmail, errPhone } = this.state;
        let { name, allInforExaminaions } = this.state;
        console.log('1111:', allInforExaminaions)
        return (
            <div className='my-schedule-examination'>
                <BannerMedpro isShowBanner={false} />
                <div className='bg-my-schedule-examination'>
                    <p>LỊCH KHÁM CỦA BẠN</p>
                </div>
                {statusId === 'S' ?
                    <div className='input-email-phone '>
                        <div className='text-input-emai-phone'>Nhập Email và Số điện thoại để xem Lịch khám của bạn</div>
                        <div className="form-group mt-5 ">
                            <label >Email</label>
                            <input type="text" className={errEmail ? 'form-control err-input' : 'form-control'}
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={this.state.fullName}
                                onChange={(event) => this.handleOnchangeInput(event, 'email')}
                            />
                            {errEmail && <span className='err-validate'>{errEmail}</span>}
                        </div>
                        <div className="form-group mt-4">
                            <label >Số điện thoại</label>
                            <input type="phoneNumber" className={errPhone ? 'form-control err-input' : 'form-control'}
                                id="exampleInputPassword1" placeholder="số điện thoại"
                                value={this.state.fullName}
                                onChange={(event) => this.handleOnchangeInput(event, 'phone')}
                            />
                            {errPhone && <span className='err-validate'>{errPhone}</span>}
                        </div>
                        <button className="btn btn-primary mt-3" onClick={() => this.findInforByEmailPhone()}>Submit</button>
                        {this.state.statusIdNull === 'null' && <div className='mt-3' style={{ color: 'red' }}><i>Email hoặc Số điện thoại đăng ký không chính xác ({this.state.noSuccess})</i> </div>}
                    </div>
                    :
                    <div className='form-schedule-examination'>
                        <div className='text-hello'>Thông tin lịch khám của {name}</div>
                        {allInforExaminaions && allInforExaminaions.length > 0 && allInforExaminaions.map((item, index) => {
                            return (
                                <div className='table-infor' key={index}>
                                    <table >
                                        <tbody>
                                            <tr>
                                                <th style={{ width: '15%' }}>Danh Mục</th>
                                                <th style={{ textAlign: 'center' }}>Thông Tin</th>
                                                <th className='status' style={{ width: '25%', textAlign: 'center' }} >
                                                    Trạng Thái
                                                    <i class="fas fa-sync"
                                                        onClick={() => this.reload()}
                                                    >

                                                    </i>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Thời gian</td>
                                                {this.convertDate(item.timeTypeDataPatient, item.date)}
                                                <td rowSpan={item.statusId === "S2" || "S3" ? "7" : "6"}>
                                                    {
                                                        item.statusId === 'S00' &&
                                                        <div className='waiting'>Đặt lịch chưa được xác nhận
                                                            <p>Vui lòng vào email "{this.state.email}" xác thực! </p>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S0' &&
                                                        < div className='not-come'>
                                                            Đang chờ xác nhận
                                                            <p>Medpro sẽ liên hệ bạn sớm nhất </p>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S1' && item.pay &&
                                                        < div className='not-come'>
                                                            Medpro rất tiếc khi bạn không đến
                                                            <p>Bạn muốn đặt lại hay hoàn trả lại chi phí đã thanh toán </p>
                                                            <p>Xin vui lòng liên hệ 0123456789</p>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S3' &&
                                                        < div className='not-come'>
                                                            Cảm ơn quý khách rất nhiều khi đã đến với Medpro!
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S4' && item.pay &&
                                                        < div className='not-come'>
                                                            Lịch hẹn đã được hủy !
                                                            <p>Bạn muốn đặt lại hay hoàn trả lại chi phí đã thanh toán </p>
                                                            <p>Xin vui lòng liên hệ 0123456789</p>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S4' && item.pay !== true &&
                                                        < div className='not-come'>
                                                            Lịch hẹn đã được hủy !
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S5' &&
                                                        < div className='not-come'>
                                                            Bạn muốn thay đổi lịch hẹn
                                                            <p>Chúng tôi sẽ liên hệ với bạn sớm nhất</p>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S2' && item.pay !== true &&
                                                        <div className='pay'>
                                                            <div className='waiting'>
                                                                <p>Thanh Toán ngay để được giảm 10% viện phí</p>
                                                            </div>
                                                            <div className='qr'></div>
                                                            <div className='stk'>
                                                                0123456788888<br />
                                                                <span>Chủ tài khoản "Medpro"</span>
                                                                <br />
                                                                <span>Ngân hàng Mb chi nhánh Hà Nội</span>
                                                                <br />
                                                                <span>Nội dung : tên + số điện thoại</span>
                                                                <br />
                                                                <div className='send-image'>
                                                                    <div className="form-group col-md-3 input-image" >
                                                                        <label for="inputState">Gửi ảnh thanh toán để Xác nhận thông tin</label>
                                                                        <div className='preview-img-container'>
                                                                            <input type="file"
                                                                                onChange={(event) => { this.handleOnchangeImage(event) }}
                                                                                className="form-control" id="previewImg" hidden />
                                                                            <label className='lable-upload' htmlFor='previewImg'>tải ảnh <i className="fas fa-upload"></i> </label>
                                                                            <div
                                                                                className='preview-image'
                                                                                style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}
                                                                                onClick={() => this.openPreviewImage()}
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='button mt-1'> <button type="button" className="btn btn-secondary" onClick={() => this.sendImagePaied(item.id)}>Send</button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S2' && item.pay === true &&
                                                        <div className='not-come'>
                                                            <p>Bạn đã thanh toán thành Công</p>
                                                            <p>Vui lòng đến sớm 15p để chúng tôi có thể phục vụ bạn  1 cách tốt nhất </p>
                                                        </div>
                                                    }

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Bác Sĩ</td>
                                                <td>   {item.doctorData.lastName} {item.doctorData.firstName} </td>
                                            </tr>
                                            <tr>
                                                <td>Phòng khám</td>
                                                <td>{item.doctorData.doctorinfor.nameClinic} </td>
                                            </tr>
                                            <tr>
                                                <td>Địa chỉ</td>
                                                <td>{item.doctorData.doctorinfor.addressClinic} </td>
                                            </tr>
                                            <tr>
                                                <td>Lý do khám</td>
                                                <td>{item.reason} </td>
                                            </tr>
                                            <tr>
                                                <td>Chi phí</td>

                                                <td>
                                                    {this.props.language === languages.VI ?
                                                        <NumberFormat
                                                            value={item.doctorData.doctorinfor.priceTypeData.valueVi}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                        />
                                                        :
                                                        `${item.doctorData.doctorinfor.priceTypeData.valueEn}`} <FormattedMessage id="patient.detail-doctor.money" />
                                                </td>
                                            </tr>
                                            {
                                                item.statusId === "S2" && <tr>
                                                    <td>Thay đổi/Hủy</td>

                                                    <td className='changeS2'>
                                                        <button type="button" className="btn btn-secondary " onClick={() => this.openModalCancelChange(item.id, "S5")}>Thay đổi</button>
                                                        <button type="button" className="btn btn-warning " onClick={() => this.openModalCancelChange(item.id, "S4")}>Hủy</button>
                                                    </td>
                                                </tr>
                                            }
                                            {
                                                item.statusId === "S3" && <tr>
                                                    <td>Kết quả chuẩn đoán </td>
                                                    <td >
                                                        {item.result}
                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })}

                    </div>
                }


                {
                    this.state.isOpen && <Lightbox
                        mainSrc={this.state.previewImgUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />

                }
                <ChangeCancelModal isOpenCancelChangeModal={isOpenCancelChangeModal} closeModal={this.closeModal}
                    changeStatusId={this.changeStatusId} cancelOrChange={cancelOrChange} />
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyScheduleExamination);

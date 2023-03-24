import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './myScheduleExamination.scss';
import BannerMedpro from '../../HomePage/bannerMedpro';
import { getMyEmination, postImagePaied } from '../../../services/userService';
import moment from 'moment/moment';
import { languages } from '../../../utils/constant';
import NumberFormat from 'react-number-format';
import CommonUtils from '../../../utils/CommonUtils';
import Lightbox from 'react-image-lightbox';
import { toast } from "react-toastify";

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

    findInforByEmailPhone = async () => {
        if (this.state.email === '') {
            alert('bạn chưa nhập email!');
            return;
        }
        if (this.state.phone === '') {
            alert('bạn chưa nhập phone');
            return;
        }
        let { email, phone } = this.state;
        console.log('emai:', email, 'phone:', phone)
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
            toast.success('send image pay success!')
        }
        else {
            toast.error('send image pay errorr! ')
        }
    }
    render() {
        // let timeType = this.state.allInforExaminaions.timeTypeDataPatient;
        let { statusId } = this.state;
        let { name, allInforExaminaions } = this.state;
        console.log('state infor examination:', this.state)
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
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={this.state.fullName}
                                onChange={(event) => this.handleOnchangeInput(event, 'email')}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label >Số điện thoại</label>
                            <input type="phoneNumber" className="form-control" id="exampleInputPassword1" placeholder="số điện thoại"
                                value={this.state.fullName}
                                onChange={(event) => this.handleOnchangeInput(event, 'phone')}
                            />
                        </div>
                        <button className="btn btn-primary mt-3" onClick={() => this.findInforByEmailPhone()}>Submit</button>
                        {this.state.statusIdNull === 'null' && <div className='mt-3' style={{ color: 'red' }}><i>Email hoặc Số điện thoại đăng ký không chính xác ({this.state.noSuccess})</i> </div>}
                    </div>
                    :
                    <div className='form-schedule-examination'>
                        <div className='text-hello'>Thông tin lịch khám của {name}</div>
                        {allInforExaminaions && allInforExaminaions.length > 0 && allInforExaminaions.map((item, index) => {
                            return (
                                <div className='table-infor'>
                                    <table >
                                        <tbody>
                                            <tr>
                                                <th style={{ width: '15%' }}></th>
                                                <th style={{ textAlign: 'center' }}>Thông Tin</th>
                                                <th style={{ width: '25%', textAlign: 'center' }}>Trạng Thái</th>
                                            </tr>
                                            <tr>
                                                <td>Thời gian</td>
                                                {this.convertDate(item.timeTypeDataPatient, item.date)}
                                                <td rowSpan={6}>
                                                    {
                                                        item.statusId === 'S00' &&
                                                        <div className='waiting'>Đặt lịch chưa được xác nhận
                                                            <p>Vui lòng vào email "{this.state.email}" xác thực! </p>
                                                        </div>
                                                    }
                                                    {
                                                        item.statusId === 'S0' &&
                                                        < div className='waiting'>
                                                            Đang chờ xác nhận
                                                            <p>Medpro sẽ liên hệ bạn sớm nhất </p>
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
                                                        <div className='waiting'>
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

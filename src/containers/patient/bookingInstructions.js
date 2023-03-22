import React, { Component } from 'react';
import { connect } from "react-redux";
import './bookingInstructions.scss'
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../HomePage/bannerMedpro';

class BookingIntroduction extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }
    render() {

        return (
            <div className='booking-intructions'>
                <BannerMedpro isShowBanner={false} />
                <div className='bg-booking-intructions'>
                    <p>QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH</p>
                </div>
                <div className='content-booking-intructions'>
                    <div className='row'>
                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-sm-12 text-content-left'>BƯỚC 1</div>
                        <div className='col-9 col-sm-9 col-12 text-conent-right'>
                            <h4>ĐẶT LỊCH KHÁM</h4>
                            <p>  >> Chọn chuyên khoa hoặc chọn phòng khám phù hợp với bệnh và vị trí</p>
                            <p>  >> Chọn Bác sĩ và khung thời gian</p>
                            <p>  >> Nhập thông tin bệnh nhân </p>
                            <p>  >> Check Email để xác nhận thông tin</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-sm-12 text-content-left'>BƯỚC 2</div>
                        <div className='col-9 col-sm-9 col-12 text-conent-right'>
                            <h4>XÁC NHẬN VÀ THANH TOÁN</h4>
                            <p>  >> Nhân viên hỗ trợ sẽ liên hệ theo số điện thoại để xác nhận</p>
                            <p>  >> Thanh Toán</p>
                            <p>  >> Vào phần <b>Lịch Khám Của Bạn</b> để xác nhận đặt lịch thành công</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-sm-12 text-content-left'>BƯỚC 3</div>
                        <div className='col-9 col-sm-9 col-12 text-conent-right'>
                            <h4>KHÁM VÀ THỰC HIỆN CẬN LÂM SÀNG</h4>
                            <p>  >> Người bệnh khám tại các phòng khám chuyên khoa theo thông tin khám đã đặt.</p>
                            <p>  >> Thực hiện cận lâm sàng (nếu có) và đóng phí tại các quầy thu ngân hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</p>
                            <p>  >> Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-sm-12 text-content-left'>BƯỚC 4</div>
                        <div className='col-9 col-sm-9 col-12 text-conent-right'>
                            <h4>NHẬN THUỐC</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-sm-12 text-content-left'>BƯỚC 5</div>
                        <div className='col-9 col-sm-9 col-12 text-conent-right'>
                            <h4>ĐẶT LỊCH TÁI KHÁM</h4>
                            <p>  >> Sử dụng phần mềm đặt hẹn tái khám như BƯỚC 1 và BƯỚC 2 để nhận phiếu khám điện tử.</p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingIntroduction);

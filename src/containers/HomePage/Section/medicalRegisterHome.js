import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import './medicalRegisterHome.scss';
import { Link } from "react-router-dom";

class MedicalRegisterHome extends Component {
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
            <div className='medical-register'>
                <div className='bg-medical-register'>
                    <div className='container  '>
                        <div className='row content-top'>
                            <div className='col-xxl-1 col-xl-1 col-lg-1'></div>
                            <div className='content-left col-xxl-3 col-xl-3 col-lg-10'>
                                <div className='label'>Giới THiệu</div>
                                <div className='text'>MEDPRO <br />Đặt Lịch Khám Bệnh</div>
                            </div>
                            <div className='content-right col-xxl-7 col-xl-7 col-lg-10'>Medpro là giải pháp đặt lịch khám bệnh, chăm sóc sức khỏe trực tuyến cho cả gia đình.
                                Người dùng chủ động trong việc khám chữa bệnh, được lựa chọn dịch vụ, chuyên khoa, bác sĩ tại các bệnh viện và phòng khám
                                hàng đầu Việt Nam như Bệnh viện Đại học Y Dược TP.HCM, Bệnh viện Chợ Rẫy, Bệnh viện Nhi Đồng Thành Phố.
                            </div>
                            <div className='col-xxl-1 col-xl-1 col-lg-1'></div>
                        </div>
                        <div className='row content-bottom'>
                            <div className='col-xxl-1 col-xl-1 col-lg-1'></div>
                            <div className='col-xxl-10 col-xl-10 col-lg-10'>
                                <div className='row'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 content-bottom-x'>
                                        <div className='content-bottom-1' >
                                            <div className='text-content'>
                                                <div className='label-combo3'>Đặt khám nhanh tróng</div>
                                                <div className='content-combo3'>Bệnh Nhân chủ động chọn thông tin đặt khám (ngày khám và giờ khám)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 content-bottom-x'>
                                        <div className='content-bottom-2' >
                                            <div className='text-content'>
                                                <div className='label-combo3'>Thanh toán dễ dàng</div>
                                                <div className='content-combo3'>Người dùng chọn và thực hiện thanh toán trên phần mềm</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 content-bottom-x'>
                                        <div className='content-bottom-3' >
                                            <div className='text-content'>
                                                <div className='label-combo3'>Nhận phiếu trực tuyến</div>
                                                <div className='content-combo3'>Bạn sẽ nhận được phiếu khám ngay trên phần mềm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xxl-1 col-xl-1 col-lg-1'></div>
                            </div>
                        </div>
                    </div>
                    <div className='link-register'>
                        <p>Tìm hiểu về quy trình <Link to={'/booking-introduction'}>  đăng ký khám bệnh </Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalRegisterHome);

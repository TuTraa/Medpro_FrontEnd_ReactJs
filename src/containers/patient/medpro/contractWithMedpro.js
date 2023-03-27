import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import HomeFooter from '../../HomePage/HomeFooter';

class ContractWithMedpro extends Component {
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
            <div className='complain'>
                <BannerMedpro isShowBanner={false} />
                <div className='bg-my-schedule-examination'>
                    <p>Liên hệ chúng tôi</p>
                </div>
                <div className='content-complain'>
                    <h2 className='mt-4'>Thông tin liên hệ :</h2>
                    <div className='detail'>
                        <p><strong>Nền tảng Đặt kh&aacute;m BookingCare</strong></p>
                        <p>ĐT: 02473.012.468</p>
                        <p>Email: support@bookingcare.vn</p>
                        <p><strong><em>Trực thuộc:</em></strong></p>
                        <p>C&ocirc;ng ty CP C&ocirc;ng nghệ BookingCare</p>
                        <p>ĐKKD số: 0106790291, Sở &nbsp;KH-ĐT H&agrave; Nội cấp ng&agrave;y: 16/03/2015</p>
                        <p>Địa chỉ: 28 Th&agrave;nh Th&aacute;i, Dịch Vọng, Cầu Giấy, H&agrave; Nội</p>
                    </div>
                </div>
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContractWithMedpro);

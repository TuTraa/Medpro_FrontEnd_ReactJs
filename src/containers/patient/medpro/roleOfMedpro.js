import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import HomeFooter from '../../HomePage/HomeFooter';
import DoctorItem from './role Item/doctorItem';

class RoleOfMedpro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRoleId: 'S1'
        }
    }
    changeRoleId = (id) => {
        this.setState({
            isRoleId: id
        })
    }
    render() {
        let { isRoleId } = this.state;
        return (
            <div className='complain'>
                <BannerMedpro isShowBanner={false} />
                <div className='bg-my-schedule-examination'>
                    <p>Vai trò của Medpro</p>
                </div>
                <div className='All-Role'>
                    <div className='all-role-item row'>
                        <div className='role-item col-3' onClick={() => this.changeRoleId('S1')}><div className='flex'><i className={isRoleId === 'S1' ? " is-active fas fa-user-md" : " fas fa-user-md"}></i></div><p>Bác sĩ uy tín </p></div>
                        <div className='role-item col-3' onClick={() => this.changeRoleId('S2')}><div className='flex'><i className={isRoleId === 'S2' ? " is-active fas fa-check-circle" : " fas fa-check-circle"}></i></div><p className='p-distance'>Đúng người đúng bệnh</p></div>
                        <div className='role-item col-3' onClick={() => this.changeRoleId('S3')}><div className='flex'><i className={isRoleId === 'S3' ? " is-active fas fa-headphones" : " fas fas fa-headphones"}></i></div><p>Hỗ trợ chu đáo</p></div>
                        <div className='role-item col-3' onClick={() => this.changeRoleId('S4')}><div className='flex'><i className={isRoleId === 'S4' ? " is-active fas fa-clock" : " fas fa-clock"}></i></div><p>Đặt lịch 24/7</p></div>
                    </div>
                    {
                        isRoleId === 'S1' &&
                        < DoctorItem title={'Bác sĩ uy tín'} content={'<p>BookingCare gi&uacute;p bệnh nh&acirc;n dễ d&agrave;ng lựa chọn đ&uacute;ng b&aacute;c sĩ từ mạng lưới b&aacute;c sĩ chuy&ecirc;n khoa giỏi, với th&ocirc;ng tin đ&atilde; x&aacute;c thực v&agrave; đặt lịch nhanh ch&oacute;ng.</p> <p>B&aacute;c sĩ chuy&ecirc;n khoa giỏi, được nhiều bệnh nh&acirc;n tin tưởng, đồng nghiệp đ&aacute;nh gi&aacute; cao, c&oacute; uy t&iacute;n trong ng&agrave;nh.</p> <p>C&aacute;c b&aacute;c sĩ đ&atilde;, đang c&ocirc;ng t&aacute;c tại c&aacute;c bệnh viện h&agrave;ng đầu như: Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh viện TW Qu&acirc;n đội 108, Bệnh viện Qu&acirc;n Y 103, Bệnh viện Nhi TW, Bệnh viện Tai Mũi Họng TW, Viện Tim mạch Việt Nam, Bệnh viện Chợ Rẫy, Bệnh viện Đại học Y dược TP.HCM, Bệnh viện Nh&acirc;n d&acirc;n 115&hellip;</p> <p>C&aacute;c b&aacute;c sĩ c&oacute; lịch kh&aacute;m tại c&aacute;c bệnh viện c&ocirc;ng lớn hoặc ph&ograve;ng kh&aacute;m tư nh&acirc;n uy t&iacute;n, được chọn lọc kỹ lưỡng tại H&agrave; Nội v&agrave; TP.HCM.</p> <p>B&ecirc;n cạnh đ&oacute;, hệ thống ghi nhận &yacute; kiến đ&aacute;nh gi&aacute; phản hồi của bệnh nh&acirc;n sau khi đi kh&aacute;m v&agrave; phương &aacute;n điều trị của từng b&aacute;c sĩ. Từ đ&oacute; ch&uacute;ng t&ocirc;i c&oacute; th&ecirc;m th&ocirc;ng tin để giới thiệu tr&ecirc;n hệ thống những b&aacute;c sĩ uy t&iacute;n, chuy&ecirc;n m&ocirc;n cao.</p> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'} />
                    }
                    {
                        isRoleId === 'S2' &&
                        <DoctorItem title={'Đúng người đúng bệnh'} content={'<div id="bc-vaitro"> <div className="vung-bao"> <div className="ct kh"> <div className="baiviet-noidung py-2"> <p>C&aacute;c chuy&ecirc;n khoa được tổ chức khoa học, th&ocirc;ng tin v&agrave; kinh nghiệm b&aacute;c sĩ được x&aacute;c thực, nội dung b&agrave;i viết cẩm nang dễ hiểu c&ugrave;ng với sự gợi &yacute; từ hệ thống, bệnh nh&acirc;n đặt kh&aacute;m đ&uacute;ng b&aacute;c sĩ chuy&ecirc;n khoa giỏi ph&ugrave; hợp với vấn đề của m&igrave;nh.</p> <p>&ldquo;Đ&uacute;ng b&aacute;c sĩ&rdquo; gi&uacute;p bệnh nh&acirc;n được gặp đ&uacute;ng b&aacute;c sĩ chuy&ecirc;n khoa giỏi với căn bệnh của m&igrave;nh. Qua đ&oacute;, tiết kiệm thời gian, chi ph&iacute;, g&oacute;p phần n&acirc;ng cao hiệu quả kh&aacute;m chữa bệnh.</p> <p>Hệ thống BookingCare nỗ lực kết nối bệnh nh&acirc;n đến&nbsp;<strong>"đ&uacute;ng b&aacute;c sĩ"</strong>&nbsp;với vấn đề của m&igrave;nh.</p> </div> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'} />

                    }
                    {
                        isRoleId === 'S3' &&
                        <DoctorItem title={'Hỗ trợ chu dáo'} content={'<div id="bc-vaitro"> <div className="vung-bao"> <div className="ct kh"> <div className="baiviet-noidung py-2"> <p><strong>Gi&uacute;p bệnh nh&acirc;n dễ d&agrave;ng lựa chọn đ&uacute;ng b&aacute;c sĩ từ mạng lưới b&aacute;c sĩ chuy&ecirc;n khoa giỏi với th&ocirc;ng tin đ&atilde; x&aacute;c thực v&agrave; đặt lịch nhanh.</strong></p> <ul> <li>Mạng lưới b&aacute;c sĩ chuy&ecirc;n khoa giỏi, uy t&iacute;n, th&ocirc;ng tin minh bạch, r&otilde; r&agrave;ng</li> <li>Sắp xếp đ&uacute;ng b&aacute;c sĩ m&agrave; bệnh nh&acirc;n đặt lịch kh&aacute;m</li> <li>Hỗ trợ trước, trong v&agrave; sau khi đi kh&aacute;m</li> <li>Bảo vệ quyền lợi của bệnh nh&acirc;n khi đi kh&aacute;m</li> </ul> <p><strong>Hỗ trợ trước, trong v&agrave; sau khi đi kh&aacute;m.</strong></p> <p>Trước kh&aacute;m</p> <ul> <li>Nhắc lịch kh&aacute;m, dặn d&ograve; chuẩn bị trước khi đi kh&aacute;m</li> <li>Hướng dẫn đi lại, quy tr&igrave;nh l&agrave;m thủ tục kh&aacute;m</li> </ul> <p>Trong khi kh&aacute;m</p> <ul> <li>Hỗ trợ giải quyết c&aacute;c vướng mắc trong khi kh&aacute;m</li> <li>Hỗ trợ người bệnh những y&ecirc;u cầu nảy sinh</li> </ul> <p>Sau khi kh&aacute;m</p> <ul> <li>Ghi nhận &yacute; kiến của bệnh nh&acirc;n sau kh&aacute;m</li> <li>Hỗ trợ giải đ&aacute;p, l&agrave;m r&otilde; những vấn đề chuy&ecirc;n m&ocirc;n</li> <li>Hỗ trợ bảo vệ quyền lợi của bệnh nh&acirc;n sau khi đi kh&aacute;m</li> </ul> <p><strong>Kh&aacute;m lại miễn ph&iacute;</strong></p> <ul> <li>Sau khi đi kh&aacute;m, nếu người bệnh kh&ocirc;ng h&agrave;i l&ograve;ng với qui tr&igrave;nh kh&aacute;m, tư vấn v&agrave; phương &aacute;n điều trị của b&aacute;c sĩ, hệ thống sẽ hỗ trợ bệnh nh&acirc;n gặp lại b&aacute;c sĩ để được kh&aacute;m v&agrave; tư vấn kỹ hơn (nếu bệnh nh&acirc;n c&oacute; y&ecirc;u cầu).</li> <li>Bệnh nh&acirc;n được hỗ trợ kh&aacute;m miễn ph&iacute; với b&aacute;c sĩ kh&aacute;c c&ugrave;ng chuy&ecirc;n khoa (nếu y&ecirc;u cầu của bệnh nh&acirc;n ph&ugrave; hợp).</li> </ul> <p>BookingCare kh&ocirc;ng trực tiếp cung cấp dịch vụ kh&aacute;m, chữa bệnh m&agrave; đ&oacute;ng vai tr&ograve; trung gian kết nối giữa bệnh nh&acirc;n v&agrave; b&aacute;c sĩ. Trong thực tế kh&aacute;m chữa bệnh, những vướng nảy sinh l&agrave; kh&oacute; tr&aacute;nh khỏi. V&igrave; c&oacute; quan hệ đối t&aacute;c tin cậy với c&aacute;c b&aacute;c sĩ, cơ sở y tế, ch&uacute;ng t&ocirc;i sẽ hỗ trợ giải quyết băn khoăn của bệnh nh&acirc;n một c&aacute;ch thấu đ&aacute;o. Trong thực tế, nhiều thắc mắc của bệnh nh&acirc;n đ&atilde; được giải đ&aacute;p r&otilde; r&agrave;ng hoặc hỗ trợ kh&aacute;m lại miễn ph&iacute;.</p> </div> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'} />
                    }
                    {
                        isRoleId === 'S4' &&
                        <DoctorItem title={'Đặt lịch 24/7'} content={'<div id="bc-vaitro"> <div className="vung-bao"> <div className="ct kh"> <div className="baiviet-noidung py-2"> <p>BookingCare.vn hoạt động li&ecirc;n tục 24 giờ một ng&agrave;y, 7 ng&agrave;y một tuần, v&agrave; 365 ng&agrave;y một năm, kể cả ng&agrave;y nghỉ v&agrave; ng&agrave;y lễ để bạn c&oacute; thể đặt lịch trực tuyến. Đ&acirc;y l&agrave; một lợi thế lớn của hệ thống đặt lịch kh&aacute;m tr&ecirc;n Internet, hoạt động li&ecirc;n tục 24/7 thay v&igrave; chỉ giới hạn trong giờ h&agrave;nh ch&iacute;nh như dịch vụ truyền thống.</p> <p><strong>Cụ thể như sau:</strong></p> <p>Đặt lịch trực tuyến: 24 giờ/ng&agrave;y, 7 ng&agrave;y/tuần, 365 ng&agrave;y/năm. Người d&ugrave;ng đặt kh&aacute;m trực tuyến bằng c&aacute;ch chọn chuy&ecirc;n khoa, b&aacute;c sĩ, bệnh viện hoặc ph&ograve;ng kh&aacute;m theo nhu cầu kh&aacute;m chữa bệnh.</p> <p>Từ 6h30 - 18h00 h&agrave;ng ng&agrave;y (trừ ng&agrave;y nghỉ, ng&agrave;y lễ, Tết): Đội ngũ hỗ trợ của BookingCare sẽ hỗ trợ trực tiếp với những trường hợp kh&oacute; khăn lựa chọn chuy&ecirc;n khoa, b&aacute;c sĩ để đặt kh&aacute;m.</p> <p>Bạn c&oacute; thể sử dụng dịch vụ đặt lịch kh&aacute;m của BookingCare bất cứ l&uacute;c n&agrave;o nếu bạn c&oacute; một t&igrave;nh trạng sức khỏe kh&ocirc;ng khẩn cấp, c&oacute; kế hoạch thăm kh&aacute;m chủ động. Hoặc đơn giản l&agrave; muốn c&oacute; một lựa chọn ph&ugrave; hợp, hiệu quả thay cho việc đến đăng k&yacute; kh&aacute;m trực tiếp, xếp h&agrave;ng v&agrave; chờ đợi tại c&aacute;c cơ sở y tế.</p> </div> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'} />

                    }

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

export default connect(mapStateToProps, mapDispatchToProps)(RoleOfMedpro);

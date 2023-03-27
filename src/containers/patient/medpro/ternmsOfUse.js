import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import HomeFooter from '../../HomePage/HomeFooter';

class TernmsOfUser extends Component {
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
                    <p>Điều khoản sử dụng</p>
                </div>
                <div className='content-complain'>
                    <h2 className='mt-4'>Thông tin chi tiết :</h2>
                    <div className='detail'>
                        <p><strong>ĐI&Ecirc;̀U KHOẢN VÀ ĐI&Ecirc;̀U KI&Ecirc;̣N SỬ DỤNG</strong></p>
                        <p><strong>GIỚI THI&Ecirc;̣U</strong></p>
                        <p>Chúng t&ocirc;i,&nbsp;C&ocirc;ng ty CP C&ocirc;ng nghệ BookingCare, đơn vị sở hữu v&agrave; vận h&agrave;nh &ldquo;<strong>Nền tảng Y tế Chăm s&oacute;c sức khỏe to&agrave;n diện BookingCare&rdquo;</strong> bao gồm hệ thống website v&agrave; c&aacute;c ứng dụng di động. BookingCare&nbsp;cung c&acirc;́p nền tảng c&ocirc;ng nghệ để bệnh nh&acirc;n thuận tiện trong việc đặt lịch dịch vụ y tế với b&aacute;c sĩ v&agrave; cơ sở y tế. Bằng vi&ecirc;̣c truy c&acirc;̣p hoặc sử dụng dịch vụ của BookingCare, bạn hoàn toàn đ&ocirc;̀ng ý theo c&aacute;c đi&ecirc;̀u khoản, đi&ecirc;̀u ki&ecirc;̣n dưới đ&acirc;y.</p>
                        <p>Chúng t&ocirc;i duy trì quy&ecirc;̀n thay đ&ocirc;̉i hoặc điều chỉnh b&acirc;́t kỳ đi&ecirc;̀u khoản và đi&ecirc;̀u ki&ecirc;̣n n&agrave;o dưới đ&acirc;y. Mọi sửa đ&ocirc;̉i nếu c&oacute; sẽ có hi&ecirc;̣u lực ngay l&acirc;̣p tức sau khi đăng tải tr&ecirc;n hệ thống trang này.</p>
                        <p><strong>SỬ DỤNG BOOKINGCARE</strong></p>
                        <p><strong>Th&ocirc;ng tin người cung cấp dịch vụ &ldquo;Kh&aacute;m chữa bệnh&rdquo;</strong></p>
                        <p>Hệ thống BookingCare đăng tải th&ocirc;ng tin v&agrave; lịch kh&aacute;m của b&aacute;c sỹ, dịch vụ y tế v&agrave; cơ sở y tế. C&aacute;c th&ocirc;ng tin về b&aacute;c sĩ, dịch vụ y tế, cơ sở y tế (gọi chung l&agrave; &ldquo;Người cung cấp dịch vụ Kh&aacute;m chữa bệnh&rdquo;) được cung c&acirc;́p bởi ch&iacute;nh &ldquo;Người cung cấp dịch vụ Kh&aacute;m chữa bệnh&rdquo; v&agrave; c&aacute;c nguồn th&ocirc;ng tin tin cậy kh&aacute;c do ch&uacute;ng t&ocirc;i lựa chọn bi&ecirc;n tập.</p>
                        <p>Chúng t&ocirc;i cố gắng t&igrave;m hiểu v&agrave; lựa chọn th&ocirc;ng tin ch&iacute;nh x&aacute;c để đăng tải tr&ecirc;n hệ thống. Tuy nhi&ecirc;n, ch&uacute;ng t&ocirc;i kh&ocirc;ng đủ điều kiện x&aacute;c minh sự ch&iacute;nh x&aacute;c tuyệt đối của th&ocirc;ng tin đ&atilde; đăng tải.</p>
                        <p><strong>Dịch vụ đặt lịch kh&aacute;m trực tuyến</strong></p>
                        <p>BookingCare cung c&acirc;́p nền tảng c&ocirc;ng nghệ, phương tiện để kết nối bệnh nh&acirc;n v&agrave; b&aacute;c sĩ, cơ sở y tế. Qua đ&oacute; cung cấp dịch vụ đặt lịch kh&aacute;m trực tuyến.</p>
                        <p>Bệnh nh&acirc;n lựa chọn b&aacute;c sĩ, dịch vụ hoặc cơ sở y tế ph&ugrave; hợp tr&ecirc;n hệ thống BookingCare để đặt lịch kh&aacute;m. BookingCare kh&ocirc;ng phải l&agrave; người cung cấp dịch vụ y tế v&agrave; cũng kh&ocirc;ng đại diện cho bất kỳ &ldquo;Người cung cấp dịch vụ kh&aacute;m chữa bệnh&rdquo; n&agrave;o. Vai trò duy nh&acirc;́t của chúng t&ocirc;i l&agrave; tạo ra các c&ocirc;ng cụ, phương ti&ecirc;̣n đ&ecirc;̉ cung c&acirc;́p &ldquo;<strong>dịch vụ đặt lịch kh&aacute;m trực tuyến</strong>&rdquo;.</p>
                        <p>Nhằm hỗ trợ việc đặt lịch kh&aacute;m hiệu quả cao, ch&uacute;ng t&ocirc;i c&oacute; thể kết nối th&ecirc;m với người c&oacute; nhu cầu đặt lịch th&ocirc;ng qua ứng dụng (Apps),tin nhắn SMS, email, dịch vụ OTT v&agrave; cuộc gọi thoại.</p>
                        <p><strong>Sai lệch thời gian &amp; hủy lịch kh&aacute;m</strong></p>
                        <p>Lịch hẹn kh&aacute;m qua hệ thống BookingCare v&agrave; thời gian kh&aacute;m thực tế c&oacute; thể sai kh&aacute;c so với lịch hẹn ban đầu do đặc th&ugrave; của hoạt động kh&aacute;m chữa bệnh. Ch&uacute;ng t&ocirc;i cố gắng để giảm thiểu sự sai lệch về thời gian v&agrave; giảm thiểu thời gian chờ đợi của người bệnh.</p>
                        <p>Lịch hẹn kh&aacute;m c&oacute; thể bị hủy hoặc thay đổi đột xuất v&igrave; một l&yacute; do n&agrave;o đ&oacute;, v&iacute; dụ như b&aacute;c sĩ c&oacute; c&ocirc;ng việc đột xuất. Việc n&agrave;y vẫn thỉnh thoảng xảy ra, nhất l&agrave; với c&aacute;c b&aacute;c sĩ, chuy&ecirc;n gia giỏi rất bận rộn. Ch&uacute;ng t&ocirc;i sẽ th&ocirc;ng b&aacute;o sự thay đổi đ&oacute; trong thời gian sớm nhất bằng một hoặc đồng thời c&aacute;c ứng dụng tin nhắn SMS, Push, email, dịch vụ OTT v&agrave; cuộc gọi thoại.</p>
                        <p>Tuy nhi&ecirc;n, v&igrave; một l&yacute; do n&agrave;o đ&oacute;, chẳng hạn như lỗi đường truyền hoặc sai lệch th&ocirc;ng tin, bạn c&oacute; thể kh&ocirc;ng nhận được th&ocirc;ng b&aacute;o kịp thời. Trong trường hợp n&agrave;y, BookingCare mong nhận được th&ocirc;ng tin từ người bệnh để ch&uacute;ng t&ocirc;i c&oacute; thể sắp xếp lịch kh&aacute;m bổ sung ph&ugrave; hợp với y&ecirc;u cầu của bạn.</p>
                        <p><strong>Ph&iacute; dịch vụ đặt lịch</strong></p>
                        <p>Thời điểm hiện tại, BookingCare cung cấp dịch vụ đặt lịch kh&aacute;m trực tuyến <strong>ho&agrave;n to&agrave;n miễn ph&iacute;</strong> đối với người bệnh khi đặt lịch kh&aacute;m th&ocirc;ng qua BookingCare.</p>
                        <p>Trong một số trường hợp, bệnh nh&acirc;n c&ograve;n nhận được ưu đ&atilde;i chi ph&iacute; kh&aacute;m chữa bệnh khi đặt qua hệ thống.</p>
                        <p>Ch&iacute;nh s&aacute;ch ho&agrave;n trả chi ph&iacute; dịch vụ &quot;B&aacute;c sĩ từ xa&quot;</p>
                        <p>1.Trường hợp b&aacute;c sĩ từ chối nhận kh&aacute;m (t&igrave;nh trạng bệnh kh&ocirc;ng ph&ugrave; hợp kh&aacute;m từ xa/ kh&ocirc;ng đ&uacute;ng chuy&ecirc;n m&ocirc;n của b&aacute;c sĩ): Bệnh nh&acirc;n được ho&agrave;n 100% chi ph&iacute;.</p>
                        <p>2. Trường hợp bệnh nh&acirc;n chủ động y&ecirc;u cầu hủy lịch:</p>
                        <ul>
                            <li>Y&ecirc;u cầu hủy lịch&lt;1 giờ trước giờ hẹn: Ph&iacute; hủy lịch l&agrave; 50%</li>
                            <li>Y&ecirc;u cầu hủy lịch&gt;1 giờ trước giờ hẹn: bệnh nh&acirc;n được ho&agrave;n 100% chi ph&iacute;</li>
                        </ul>
                        <p><br /></p>
                        <p>3. Chi ph&iacute; sẽ được ho&agrave;n lại trong v&ograve;ng 5 &ndash; 7 ng&agrave;y (kh&ocirc;ng t&iacute;nh thứ 7, Chủ Nhật)</p>
                        <p><strong>Trường hợp bệnh nh&acirc;n Cấp cứu</strong></p>
                        <p>BookingCare&nbsp;<strong>KH&Ocirc;NG</strong> ph&ugrave; hợp trong c&aacute;c trường hợp bệnh nh&acirc;n cấp cứu. Nếu gặp trường hợp khẩn cấp ch&uacute;ng t&ocirc;i khuy&ecirc;n bạn (hoặc người th&acirc;n) kh&ocirc;ng n&ecirc;n sử dụng dịch vụ đặt lịch kh&aacute;m BookingCare.</p>
                        <p>Bạn n&ecirc;n gọi số cấp cứu y tế&nbsp;<strong>115</strong> hoặc đến cơ sở y tế gần nhất để được thăm kh&aacute;m.</p>
                        <p><strong>Quyền miễn trừ</strong></p>
                        <p>BookingCare cung cấp &ldquo;dịch vụ đặt lịch kh&aacute;m&rdquo;,&nbsp;chúng t&ocirc;i<strong>&nbsp;kh&ocirc;ng cung c&acirc;́p</strong> dịch vụ y t&ecirc;́ v&agrave; kh&ocirc;ng đại diện cho bất kỳ&nbsp;<strong>&ldquo;</strong>Người cung cấp dịch vụ kh&aacute;m chữa bệnh<strong>&rdquo;</strong> n&agrave;o. Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu tr&aacute;ch nhiệm về chất lượng, hiệu quả kh&aacute;m chữa bệnh, chi ph&iacute;, gi&aacute; cả dịch vụ m&agrave; bạn nhận được từ &ldquo;Người cung cấp dịch vụ kh&aacute;m chữa bệnh<strong>&rdquo;</strong>.</p>
                        <p>Ch&uacute;ng t&ocirc;i cũng kh&ocirc;ng chịu tr&aacute;ch nhiệm ph&aacute;p l&yacute; li&ecirc;n quan đến hoạt động kh&aacute;m chữa bệnh của &ldquo;người cung cấp dịch vụ kh&aacute;m chữa bệnh<strong>&rdquo;</strong>.</p>
                        <p><strong>Giới hạn tr&aacute;ch nhiệm ph&aacute;p l&yacute;</strong></p>
                        <p>Chúng t&ocirc;i chịu trách nhi&ecirc;̣m pháp lý về những g&igrave; kh&ocirc;ng th&ecirc;̉ bị loại trừ theo quy định của ph&aacute;p luật Việt Nam.</p>
                        <p>Những ph&aacute;t sinh (nếu c&oacute;) li&ecirc;n quan tới vi&ecirc;̣c sử dụng dịch vụ đặt lịch kh&aacute;m BookingCare sẽ được hỗ trợ như mục &ldquo;<strong>vai tr&ograve; của BookingCare</strong>&rdquo;</p>
                        <p><strong>Vai tr&ograve; của BookingCare</strong></p>
                        <p><strong>Hỗ trợ trước, trong v&agrave; sau khi đi kh&aacute;m</strong></p>
                        <p>Trước kh&aacute;m</p>
                        <ul>
                            <li>Nhắc lịch kh&aacute;m, dặn d&ograve; chuẩn bị trước kh&aacute;m</li>
                            <li>Hướng dẫn đi lại, qui tr&igrave;nh l&agrave;m thủ tục kh&aacute;m</li>
                        </ul>
                        <p>Trong khi kh&aacute;m</p>
                        <ul>
                            <li>Hỗ trợ giải quyết c&aacute;c vướng mắc trong khi kh&aacute;m</li>
                            <li>Hỗ trợ người bệnh những y&ecirc;u cầu nảy sinh</li>
                        </ul>
                        <p>Sau khi kh&aacute;m</p>
                        <ul>
                            <li>Ghi nhận &yacute; kiến của bệnh nh&acirc;n sau kh&aacute;m</li>
                            <li>Hỗ trợ giải đ&aacute;p, l&agrave;m r&otilde; những vấn đề chuy&ecirc;n m&ocirc;n (nếu c&oacute; y&ecirc;u cầu)</li>
                            <li>Hỗ trợ quyền lợi của bệnh nh&acirc;n sau khi đi kh&aacute;m (nếu c&oacute; y&ecirc;u cầu)</li>
                        </ul>
                        <p><strong>Hỗ trợ kh&aacute;m lại miễn ph&iacute;</strong></p>
                        <ul>
                            <li>Sau khi đi kh&aacute;m, nếu người bệnh kh&ocirc;ng h&agrave;i l&ograve;ng với qui tr&igrave;nh kh&aacute;m, tư vấn v&agrave; phương &aacute;n điều trị của b&aacute;c sĩ, hệ thống sẽ hỗ trợ bệnh nh&acirc;n gặp lại b&aacute;c sĩ để được kh&aacute;m v&agrave; tư vấn kỹ hơn nếu y&ecirc;u cầu đ&oacute; của bệnh nh&acirc;n được ch&uacute;ng t&ocirc;i đ&aacute;nh gi&aacute; l&agrave; ch&iacute;nh đ&aacute;ng, ph&ugrave; hợp.</li>
                            <li>Bệnh nh&acirc;n được hỗ trợ kh&aacute;m miễn ph&iacute; (kh&ocirc;ng bao gồm chi ph&iacute; x&eacute;t nghiệm v&agrave; thuốc) với b&aacute;c sĩ kh&aacute;c c&ugrave;ng chuy&ecirc;n khoa nếu ch&uacute;ng t&ocirc;i nhận thấy rằng y&ecirc;u cầu của bệnh nh&acirc;n l&agrave; ch&iacute;nh đ&aacute;ng, ph&ugrave; hợp.</li>
                        </ul>
                        <p>Tuy nhi&ecirc;n, ch&uacute;ng t&ocirc;i c&oacute; quyền từ chối y&ecirc;u cầu hỗ trợ kh&aacute;m lại miễn ph&iacute; của bệnh nh&acirc;n, nếu ch&uacute;ng t&ocirc;i nhận thấy rằng y&ecirc;u cầu đ&oacute; l&agrave; kh&ocirc;ng ph&ugrave; hợp hoặc kh&ocirc;ng ch&iacute;nh đ&aacute;ng.</p>
                        <p><strong>Th&ocirc;ng báo</strong></p>
                        <p>Chúng t&ocirc;i sẽ gửi cho bạn th&ocirc;ng b&aacute;o qua ứng dụng (Apps),tin nhắn SMS, email, dịch vụ OTT, gọi điện thoại đ&ecirc;̉ th&ocirc;ng báo cho bạn v&ecirc;̀ vấn đề mà bạn c&oacute; thể quan t&acirc;m. Bạn có th&ecirc;̉ bỏ đăng ký bằng cách li&ecirc;n h&ecirc;̣ với chúng t&ocirc;i hoặc bằng cách sử dụng lựa chọn hủy bỏ đăng ký trong các bản c&acirc;̣p nh&acirc;̣t email, tin nhắn, hoặc từ chối th&ocirc;ng tin mà chúng t&ocirc;i gửi cho bạn.</p>
                        <p><strong>Khiếu nại</strong></p>
                        <p>Nhằm kh&ocirc;ng ngừng n&acirc;ng cao chất lượng dịch vụ v&agrave; trải nghiệm tốt hơn cho người d&ugrave;ng, ch&uacute;ng t&ocirc;i mong nhận được những &yacute; kiến phản hồi hoặc khiếu nại về chất lượng dịch vụ.</p>
                        <p>Xin vui l&ograve;ng li&ecirc;n hệ:</p>
                        <p><strong>C&ocirc;ng ty CP C&ocirc;ng nghệ BookingCare</strong></p>
                        <p>ĐKKD số: 0106790291, Sở &nbsp;KH-ĐT H&agrave; Nội cấp ng&agrave;y: 16/03/2015</p>
                        <p>Địa chỉ: 28 Th&agrave;nh Th&aacute;i, Dịch Vọng, Cầu Giấy, H&agrave; Nội</p>
                        <p>Tel: 024.7301.2468</p>


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

export default connect(mapStateToProps, mapDispatchToProps)(TernmsOfUser);

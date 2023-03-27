import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class PriceAndPay extends Component {
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
            <>
                <h3>Giá và thanh toán</h3>
                <div className='question'>
                    <QuestionItem
                        question={'“Đặt khám miễn phí” nghĩa là gì?'}
                        answer={'Có nghĩa là BookingCare "miễn phí đặt lịch" (không thu phí) khi thực hiện đặt khám qua hệ thống BookingCare. Phí khám và các chi phí dịch vụ xét nghiệm, chụp chiếu người bệnh sẽ chi trả trực tiếp theo bảng giá niêm yết tại bệnh viện/phòng khám.'}
                    />
                    <QuestionItem
                        question={'Làm thế nào để tôi biết phí khám của bệnh viện/phòng khám'}
                        answer={'<p><span>Chi ph&iacute; kh&aacute;m sẽ hiện ngay b&ecirc;n dưới lịch kh&aacute;m của b&aacute;c sĩ. Ngo&agrave;i chi ph&iacute; kh&aacute;m, c&ograve;n c&oacute; một số chi ph&iacute; dịch vụ li&ecirc;n quan đến chuy&ecirc;n khoa của b&aacute;c sĩ. C&aacute;c chi ph&iacute; n&agrave;y đều theo bảng gi&aacute; ni&ecirc;m yết tại bệnh viện/ph&ograve;ng kh&aacute;m.</span></p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Làm thế nào để tôi biết chi phí những dịch vụ liên quan của bệnh viện/phòng khám?'}
                        answer={'<p>Chi ph&iacute; dịch vụ hiện ngay b&ecirc;n dưới lịch kh&aacute;m của b&aacute;c sĩ. Bạn nhấn v&agrave;o &ldquo;xem th&ecirc;m&rdquo; tr&ecirc;n phần Gi&aacute; kh&aacute;m để biết được chi ph&iacute; dịch vụ. C&aacute;c chi ph&iacute; n&agrave;y đều theo quy định của ph&ograve;ng kh&aacute;m/bệnh viện.</p><p>Ngo&agrave;i c&aacute;c dịch vụ li&ecirc;n quan, trong qu&aacute; tr&igrave;nh thăm kh&aacute;m c&oacute; thể ph&aacute;t sinh th&ecirc;m c&aacute;c x&eacute;t nghiệm kh&aacute;c theo chỉ định của b&aacute;c sĩ m&agrave; chưa c&oacute; gi&aacute; thể hiện ở đ&acirc;y. Ch&uacute;ng t&ocirc;i khuy&ecirc;n bạn n&ecirc;n trao đổi với b&aacute;c sĩ hoặc nh&acirc;n vi&ecirc;n y tế để biết trước khi đồng &yacute; l&agrave;m c&aacute;c dịch vụ.</p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi có cần nộp tiền đặt cọc khi làm thủ tục khám không?'}
                        answer={'<p>Bạn kh&ocirc;ng cần đặt cọc trước cho BookingCare. BookingCare miễn ph&iacute; đặt kh&aacute;m v&agrave; c&aacute;c chi ph&iacute; bạn chi trả trực tiếp tại ph&ograve;ng kh&aacute;m/bệnh viện.</p><p>Tại nhiều bệnh viện, ph&ograve;ng kh&aacute;m tr&ecirc;n Nền tảng BookingCare, người đi kh&aacute;m bệnh kh&ocirc;ng cần đặt cọc tiền mặt trước.</p><p>Tuy nhi&ecirc;n, c&oacute; một số bệnh viện lớn v&igrave; rất đ&ocirc;ng bệnh nh&acirc;n đến kh&aacute;m, nhằm mục đ&iacute;ch tạo điều kiện giảm thời gian chờ v&agrave; r&uacute;t ngắn qui tr&igrave;nh thanh to&aacute;n cho bệnh nh&acirc;n khi cần chụp chiếu, x&eacute;t nghiệm th&igrave; người bệnh c&oacute; thể phải nộp trước một lượng tiền đặt cọc. Sau khi kh&aacute;m xong người bệnh sẽ nhận lại tiền thừa sau khi đ&atilde; t&iacute;nh đủ c&aacute;c chi ph&iacute; x&eacute;t nghiệm, chụp chiếu.</p><p>Đặt cọc tiền trước hiện đang &aacute;p dụng tại Khu vực kh&aacute;m theo Y&ecirc;u cầu - Bệnh viện Việt Đức.</p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi cần chuẩn bị bao nhiêu tiền khi đi khám bệnh?'}
                        answer={'<p>T&ugrave;y thuộc v&agrave;o chuy&ecirc;n khoa v&agrave; t&igrave;nh trạng của bạn m&agrave; số tiền mang theo khi đi kh&aacute;m bệnh l&agrave; kh&aacute;c nhau. Tr&ecirc;n hệ thống BookingCare c&oacute; cung cấp ph&iacute; kh&aacute;m của b&aacute;c sĩ v&agrave; một số chi ph&iacute; dịch vụ li&ecirc;n quan, bạn c&oacute; thể tham khảo.</p><p>Ch&uacute;ng t&ocirc;i thường khuy&ecirc;n người đi kh&aacute;m n&ecirc;n mang th&ecirc;m một &iacute;t tiền dự ph&ograve;ng trong trường hợp ph&aacute;t sinh chụp chiếu, x&eacute;t nghiệm hoặc mua thuốc theo đơn b&aacute;c sĩ.</p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi muốn thanh toán chi phí trực tuyến (online) có được không?'}
                        answer={'<p>T&ugrave;y thuộc v&agrave;o ph&ograve;ng kh&aacute;m/bệnh viện m&agrave; bạn đến kh&aacute;m, bạn sẽ chi trả c&aacute;c chi ph&iacute; kh&aacute;m chữa bệnh trực tiếp tại ph&ograve;ng kh&aacute;m, bệnh viện.</p><p>Tuy nhi&ecirc;n, để qu&aacute; tr&igrave;nh kh&aacute;m được hiệu quả, bạn n&ecirc;n chuẩn bị tiền mặt khi đi kh&aacute;m, kể cả khi m&agrave; bạn mang theo thẻ r&uacute;t tiền tự động (c&aacute;c loại thẻ ATM),v&igrave; đ&ocirc;i khi m&aacute;y quẹt thẻ tại bệnh viện/ph&ograve;ng kh&aacute;m c&oacute; thể bị lỗi.</p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Bệnh viện/phòng khám trên BookingCare có thanh toán quẹt thẻ/chuyển khoản không?'}
                        answer={'<p><span>C&oacute;. T&ugrave;y thuộc theo bệnh viện/ph&ograve;ng kh&aacute;m. Th&ocirc;ng tin n&agrave;y xuất hiện tại phần gi&aacute; kh&aacute;m ngay b&ecirc;n dưới b&aacute;c sĩ, bạn c&oacute; thể tra cứu theo b&aacute;c sĩ m&agrave; bạn sẽ thăm kh&aacute;m.</span></p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Đặt khám qua BookingCare có đắt hơn/có mất thêm phí gì không?'}
                        answer={'<p><span>Kh&ocirc;ng. BookingCare miễn ph&iacute; đặt kh&aacute;m. Bạn sẽ chi trả to&agrave;n bộ c&aacute;c chi ph&iacute; kh&aacute;m, chi ph&iacute; dịch vụ tại bệnh viện/ph&ograve;ng kh&aacute;m - nơi m&agrave; bạn đến kh&aacute;m - theo bảng gi&aacute; ni&ecirc;m yết v&agrave; được &aacute;p dụng như nhau cho bệnh nh&acirc;n đặt kh&aacute;m qua BookingCare hay kh&ocirc;ng đặt qua BookingCare</span></p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Giá khám và giá dịch vụ cho người nước ngoài của các bệnh viện/phòng khám trên BookingCare có khác so với người Việt không?'}
                        answer={'<p>T&ugrave;y thuộc theo &aacute;p dụng tại từng bệnh viện/ph&ograve;ng kh&aacute;m. Hiện tr&ecirc;n hệ thống BookingCare c&oacute; nhiều bệnh viện/ph&ograve;ng kh&aacute;m m&agrave; chi ph&iacute; dịch vụ cho người nước ngo&agrave;i cũng tương đương d&agrave;nh cho người Việt Nam.</p><p>Tuy nhi&ecirc;n, tại một số cơ sở th&igrave; chi ph&iacute; kh&aacute;m chữa bệnh cho người nước ngo&agrave;i cao hơn. Khi đặt kh&aacute;m cho người nước ngo&agrave;i sẽ nhận được th&ocirc;ng tin chi tiết.</p><div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi phải thanh toán các khoản chi phí với BookingCare hay tại bệnh viện/phòng khám?'}
                        answer={'Bạn thanh toán chi phí trực tiếp tại bệnh viện/phòng khám'}
                    />
                </div>
            </>

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

export default connect(mapStateToProps, mapDispatchToProps)(PriceAndPay);

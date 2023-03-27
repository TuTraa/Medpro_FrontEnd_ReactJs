import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class UserManual extends Component {
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
                <h3>Hướng dẫn sử dụng</h3>
                <div className='question'>
                    <QuestionItem
                        question={'Tôi đặt lịch nhiều lần nhưng bận không đi khám được có sao không?'}
                        answer={'<p>Khi muốn thay đổi lịch kh&aacute;m vui l&ograve;ng b&aacute;o lại để BookingCare hỗ trợ sắp xếp lịch kh&aacute;m gi&uacute;p bạn v&agrave; nhường lịch đặt cho bệnh nh&acirc;n kh&aacute;c</p><p>Nếu bạn hủy lịch m&agrave; kh&ocirc;ng th&ocirc;ng b&aacute;o cho BookingCare 2 lần li&ecirc;n tiếp, ch&uacute;ng t&ocirc;i c&oacute; thể c&acirc;n nhắc ngừng hỗ trợ đặt kh&aacute;m cho bạn v&agrave;o lần tiếp theo.</p>'}
                    />
                    <QuestionItem
                        question={'Làm thế nào để đặt lịch khám trên BookingCare?'}
                        answer={'<p>3 bước đặt kh&aacute;m tr&ecirc;n BookingCare</p><ul><li>Bước 1. Bạn truy cập trang web http://bookingcare.vn hoặc tải ứng dụng (Apps) của BookingCare tr&ecirc;n hệ điều h&agrave;nh Android v&agrave; iOS</li><li>Bước 2. Chọn b&aacute;c sĩ hoặc cơ sở y tế ph&ugrave; hợp với nhu cầu kh&aacute;m chữa bệnh</li><li>Bước 3. Điền th&ocirc;ng tin theo mẫu v&agrave; x&aacute;c nhận đặt lịch</li></ul><p>Trong trường hợp kh&ocirc;ng lựa chọn được b&aacute;c sĩ ph&ugrave; hợp, bạn c&oacute; thể để lại lời nhắn tr&ecirc;n mục &quot;Hỗ trợ&quot; tr&ecirc;n BookingCare, ch&uacute;ng t&ocirc;i sẽ gọi lại v&agrave; hướng dẫn chu đ&aacute;o.</p>'}
                    />
                    <QuestionItem
                        question={'Nếu nhập sai thông tin khi đặt lịch, BookingCare có thể giúp tôi được không?'}
                        answer={'<p>C&oacute;. Bạn vui l&ograve;ng để lại th&ocirc;ng tin cho BookingCare trong phần &quot;Hỗ trợ&quot;.</p>'}
                    />
                    <QuestionItem
                        question={'Khi muốn thay đổi /hủy lịch khám, BookingCare có thể giúp tôi được không?'}
                        answer={'<p>C&oacute;. Bạn vui l&ograve;ng để lại th&ocirc;ng tin cho BookingCare trong phần &quot;Hỗ trợ&quot;.&nbsp;</p>'}
                    />
                    <QuestionItem
                        question={'Nếu muốn khám bác sĩ khác tôi phải làm thế nào?'}
                        answer={'<p>Bạn vui l&ograve;ng chọn lại b&aacute;c sĩ bạn muốn đặt kh&aacute;m tr&ecirc;n hệ thống, sau đ&oacute; l&agrave;m thao t&aacute;c đặt kh&aacute;m như l&uacute;c đầu. Sau khi nhận được th&ocirc;ng tin, BookingCare sẽ li&ecirc;n hệ lại cho bạn để x&aacute;c nhận về việc thay đổi lịch.</p>'}
                    />
                    <QuestionItem
                        question={'BookingCare có thể hướng dẫn đường đi đến bệnh viện/phòng khám giúp tôi được không?'}
                        answer={'<p>BookingCare sẽ gửi cho bạn hướng dẫn đi kh&aacute;m sau khi bạn đặt kh&aacute;m. Trong hướng dẫn n&agrave;y c&oacute; phần hướng dẫn đường đi đến ph&ograve;ng kh&aacute;m v&agrave; k&egrave;m với bản đồ. Bạn c&oacute; thể xem th&ecirc;m để biết vị tr&iacute; của ph&ograve;ng kh&aacute;m.</p>'}
                    />
                    <QuestionItem
                        question={'Nếu quên đi khám theo hẹn tôi nên làm thế nào?'}
                        answer={'<p>Bạn vui l&ograve;ng b&aacute;o lại để BookingCare gi&uacute;p bạn chuyển lịch kh&aacute;m v&agrave;o ng&agrave;y kh&aacute;c.</p>'}
                    />
                    <QuestionItem
                        question={'Tôi muốn hủy lịch khám thì làm như thế nào?'}
                        answer={'<p>Để hủy lịch đ&atilde; đặt, bạn vui l&ograve;ng thực hiện theo c&aacute;c bước sau:</p><p>Bước 1: Tải<strong>&nbsp;App BookingCare</strong> về điện thoại theo đường dẫn https://bookingcare.vn/app&nbsp;</p><p>Bước 2: Đăng nhập App bằng số điện thoại bạn đ&atilde; đăng k&yacute; lịch.</p><p>Bước 3: Trong mục&nbsp;<strong>Th&ocirc;ng b&aacute;o</strong>, bạn v&agrave;o chọn phần&nbsp;<strong>Hướng dẫn đi kh&aacute;m</strong>, chọn&nbsp;<strong>Hủy</strong>.&nbsp;</p><p>Bước 4: Bạn chọn l&yacute; do hủy sau đ&oacute; chọn x&aacute;c nhận.</p>'}
                    />
                    <QuestionItem
                        question={'Tôi bận việc nên đến muộn khoảng 30 phút so với Giờ đã hẹn có được không?'}
                        answer={'<p>Nếu bạn c&oacute; việc v&agrave; đến muộn hơn giờ đặt hẹn, bạn vui l&ograve;ng b&aacute;o cho BookingCare để tr&aacute;nh ảnh hưởng đến quyền lợi của bạn khi bạn đến kh&aacute;m v&agrave; để BookingCare sắp xếp lịch hẹn cho c&aacute;c bệnh nh&acirc;n kh&aacute;c.</p>'}
                    />
                    <QuestionItem
                        question={'Tôi đã đặt khám qua BookingCare, vậy tôi có được khám đúng theo giờ hẹn khám không?'}
                        answer={'<p>Ch&uacute;ng t&ocirc;i phối hợp với b&aacute;c sĩ, cơ sở y tế để cố gắng hỗ trợ người bệnh được kh&aacute;m theo lịch đ&atilde; hẹn trước.</p><p>Đi kh&aacute;m b&aacute;c sĩ l&agrave; một hoạt động đặc th&ugrave; m&agrave; thời gian kh&aacute;m thực tế c&oacute; thể sai kh&aacute;c với lịch hẹn trước. Việc n&agrave;y xuất ph&aacute;t từ nhiều nguy&ecirc;n nh&acirc;n kh&aacute;c nhau như l&agrave; qu&aacute; tải ở bệnh viện, thời gian kh&aacute;m cho từng bệnh nh&acirc;n k&eacute;o d&agrave;i hơn dự kiến, b&aacute;c sĩ cần th&ecirc;m hội chẩn chuy&ecirc;n m&ocirc;n v&agrave; c&oacute; cả sự sắp xếp chưa khoa học ở c&aacute;c cơ sở y tế.</p><p>Tuy nhi&ecirc;n, ch&uacute;ng t&ocirc;i lu&ocirc;n cố gắng cập nhật lịch kh&aacute;m b&aacute;c sĩ theo thời gian thực v&agrave; tối ưu h&oacute;a qui tr&igrave;nh để giảm thiểu thời gian chờ kh&aacute;m của bệnh nh&acirc;n. Ở một số b&aacute;c sĩ hoặc cơ sở y tế tr&ecirc;n BookingCare, bệnh nh&acirc;n c&oacute; thể chọn dịch vụ hẹn kh&aacute;m ch&iacute;nh x&aacute;c theo giờ đ&atilde; hẹn.</p><p>Thực tế, đặt kh&aacute;m qua BookingCare bạn sẽ được ưu ti&ecirc;n kh&aacute;m trước, giảm thiểu thời gian chờ v&agrave; đi kh&aacute;m c&oacute; kế hoạch.&nbsp;</p>'}
                    />
                    <QuestionItem
                        question={'Tôi đã đặt khám qua BookingCare, vậy có cần làm lại thủ tục khám khi đến bệnh viện/phòng khám không?'}
                        answer={'<p>Bạn cần đến bộ phận tiếp đ&oacute;n tại nơi đến kh&aacute;m để kiểm tra th&ocirc;ng tin một lần nữa trước khi v&agrave;o kh&aacute;m với b&aacute;c sĩ.&nbsp;</p>'}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManual);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class DefaultClass extends Component {
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
                <h3>Cơ sở y tế</h3>
                <div className='question'>
                    <QuestionItem
                        question={'Bệnh viện và phòng khám trên BookingCare có uy tín không?'}
                        answer={'<p>C&oacute;. BookingCare lu&ocirc;n t&igrave;m hiểu kỹ lưỡng v&agrave; lựa chọn c&aacute;c bệnh viện, ph&ograve;ng kh&aacute;m uy t&iacute;n để hợp t&aacute;c nhằm mang đến sự cậy về chất lượng kh&aacute;m chữa bệnh v&agrave; gi&aacute; cả dịch vụ ph&ugrave; hợp cho người bệnh v&agrave; gia đ&igrave;nh.</p><p>Ngo&agrave;i sự chất lượng chuy&ecirc;n m&ocirc;n v&agrave; dịch vụ, c&aacute;c bệnh viện, ph&ograve;ng kh&aacute;m đối t&aacute;c tr&ecirc;n BookingCare c&oacute; đủ giấy ph&eacute;p, chứng chỉ h&agrave;nh nghề chuy&ecirc;n m&ocirc;n theo quy định kh&aacute;m chữa bệnh hiện h&agrave;nh.</p>'}
                    />
                    <QuestionItem
                        question={'Bệnh viện trên BookingCare là bệnh viện công hay bệnh viên tư?'}
                        answer={'<p><span>Cả hai. BookingCare kết nối mạng lưới c&aacute;c cơ sơ y tế cả c&ocirc;ng v&agrave; tư để người bệnh c&oacute; nhiều sự lựa chọn theo b&aacute;c sĩ, theo chuy&ecirc;n khoa, theo l&yacute; do kh&aacute;m hoặc chọn kh&aacute;m theo cơ sở y tế.</span></p>'}
                    />
                    <QuestionItem
                        question={'Làm thế nào để tôi biết được địa chỉ của bệnh viện/phòng khám?'}
                        answer={'<p>Địa chỉ ph&ograve;ng kh&aacute;m/bệnh viện nơi b&aacute;c sĩ thăm kh&aacute;m được hiển thị r&otilde; r&agrave;ng trong trang th&ocirc;ng tin giới thiệu về b&aacute;c sĩ hoặc hiển thị trong trang giới thiệu về cơ sở y tế.</p><p>Ngo&agrave;i ra sau khi x&aacute;c nhận đặt kh&aacute;m, BookingCare sẽ gửi cho bạn một Hướng dẫn đi kh&aacute;m chi tiết về đường đi đến bệnh viện, ph&ograve;ng kh&aacute;m.</p>'}
                    />
                    <QuestionItem
                        question={'Làm thế nào để tôi biết bệnh viện/phòng khám có trang bị các loại thiết bị gì?'}
                        answer={'<p><span>Với từng ph&ograve;ng kh&aacute;m/bệnh viện, BookingCare đưa th&ocirc;ng tin về chi ph&iacute; kh&aacute;m của b&aacute;c sĩ v&agrave; chi ph&iacute; dịch vụ li&ecirc;n quan. Chi ph&iacute; dịch vụ n&agrave;y tương ứng với c&aacute;c loại thiết bị m&agrave; ph&ograve;ng kh&aacute;m/bệnh viện hiện c&oacute;.</span></p>'}
                    />
                    <QuestionItem
                        question={'BookingCare có thể cho tôi biết những bến xe để đến bệnh viện/phòng khám không?'}
                        answer={'<p><span>Trước khi bạn đi kh&aacute;m, BookingCare sẽ gửi cho bạn một bản Hướng dẫn đi kh&aacute;m, bao gồm hướng dẫn đường đi đến bệnh viện/ph&ograve;ng kh&aacute;m v&agrave; bản đồ. Bạn c&oacute; thể tham khảo th&ecirc;m để biết được vị tr&iacute; v&agrave; đường đi đến bệnh viện/ph&ograve;ng kh&aacute;m</span></p>'}
                    />
                    <QuestionItem
                        question={'Các bệnh viện công lập trên hệ thống có khám vào thứ 7 và chủ nhật không?'}
                        answer={'<p>Một số bệnh viện c&ocirc;ng lập l&agrave;m việc v&agrave;o ng&agrave;y cuối tuần. Bạn sử dụng c&ocirc;ng cụ t&igrave;m kiếm tr&ecirc;n trang chủ của BookingCare để v&agrave;o bệnh viện bạn muốn t&igrave;m hiểu v&agrave; xem th&ecirc;m th&ocirc;ng tin.</p><p>Ngo&agrave;i ra, bạn c&oacute; thể để lại y&ecirc;u cầu tr&ecirc;n mục "Hỗ trợ", đội ngũ của ch&uacute;ng t&ocirc;i hỗ trợ 7 ng&agrave;y/tuần để bạn cập nhật th&ocirc;ng tin.</p>'}
                    />
                    <QuestionItem
                        question={'Bệnh viện/phòng khám mà BookingCare hỗ trợ đặt lịch có nhận khám cho người nước ngoài không?'}
                        answer={'<p>T&ugrave;y thuộc từng bệnh viện/ph&ograve;ng kh&aacute;m hoặc b&aacute;c sĩ bạn đặt kh&aacute;m. Vui l&ograve;ng để lại th&ocirc;ng tin hoặc đặt kh&aacute;m với b&aacute;c sĩ mong muốn để BookingCare hỗ trợ cho bạn.&nbsp;</p><p>Một lưu &yacute; l&agrave; chi ph&iacute; kh&aacute;m cho người nước ngo&agrave;i thường cao hơn v&igrave; c&oacute; thể cần th&ecirc;m phi&ecirc;n dịch vi&ecirc;n hoặc hỗ trợ kh&aacute;m trong qu&aacute; tr&igrave;nh thăm kh&aacute;m.</p>'}
                    />
                    <QuestionItem
                        question={'BookingCare hỗ trợ đặt lịch khám được với tất cả các bệnh viện/phòng khám đúng không?'}
                        answer={'<p>Kh&ocirc;ng. Hiện tại BookingCare hỗ trợ đặt kh&aacute;m với tr&ecirc;n 70 bệnh viện/ph&ograve;ng kh&aacute;m c&ocirc;ng lập v&agrave; tư nh&acirc;n tại H&agrave; Nội v&agrave; Tp. Hồ Ch&iacute; Minh. Mạng lưới đối t&aacute;c của ch&uacute;ng t&ocirc;i lu&ocirc;n tăng trưởng kh&ocirc;ng ngừng.</p><p>Bạn vui l&ograve;ng truy cập trang web v&agrave; c&aacute;c ứng dụng của BookingCare để xem th&ecirc;m th&ocirc;ng tin về c&aacute;c cơ sở y tế đang hỗ trợ đặt kh&aacute;m.</p>'}
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class AboutDoctor extends Component {
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
                <h3>Về bác sĩ</h3>
                <div className='question'>
                    <QuestionItem
                        question={'Bác sĩ trên hệ thống Medpro có giỏi không?'}
                        answer={'<p>Medpro gi&uacute;p bệnh nh&acirc;n dễ d&agrave;ng lựa chọn b&aacute;c sĩ từ mạng lưới b&aacute;c sĩ chuy&ecirc;n khoa giỏi, với th&ocirc;ng tin đ&atilde; được x&aacute;c thực.</p><p>B&aacute;c sĩ tr&ecirc;n hệ thống Medpro l&agrave; c&aacute;c b&aacute;c sĩ chuy&ecirc;n khoa giỏi, được nhiều bệnh nh&acirc;n tin tưởng, đồng nghiệp đ&aacute;nh gi&aacute; cao, c&oacute; uy t&iacute;n trong ng&agrave;nh. C&aacute;c b&aacute;c sĩ đ&atilde;, đang c&ocirc;ng t&aacute;c tại c&aacute;c bệnh viện h&agrave;ng đầu như: Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh viện TW Qu&acirc;n đội 108, Bệnh viện Qu&acirc;n Y 103, Bệnh viện Nhi TW, Bệnh viện Tai Mũi Họng TW, Viện Tim mạch Việt Nam&hellip;</p><p>C&aacute;c b&aacute;c sĩ c&oacute; lịch kh&aacute;m tại c&aacute;c bệnh viện c&ocirc;ng lập, bệnh viện v&agrave; ph&ograve;ng kh&aacute;m tư nh&acirc;n uy t&iacute;n, được chọn lọc kỹ lưỡng. B&ecirc;n cạnh đ&oacute;, Medpro cũng ghi nhận &yacute; kiến đ&aacute;nh gi&aacute; phản hồi của bệnh nh&acirc;n sau khi đi kh&aacute;m v&agrave; phương &aacute;n điều trị của từng b&aacute;c sĩ. Từ đ&oacute; ch&uacute;ng t&ocirc;i c&oacute; th&ecirc;m th&ocirc;ng tin để giới thiệu b&aacute;c sĩ chuy&ecirc;n khoa ph&ugrave; hợp cho người bệnh.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Thế nào là “bác sĩ phù hợp”?'}
                        answer={'<p><span>C&aacute;c chuy&ecirc;n khoa được tổ chức khoa học, th&ocirc;ng tin v&agrave; kinh nghiệm của b&aacute;c sĩ được x&aacute;c thực, nội dung b&agrave;i viết cẩm nang dễ hiểu c&ugrave;ng với sự gợi &yacute; từ hệ thống, gi&uacute;p bệnh nh&acirc;n chọn đặt kh&aacute;m với&nbsp; b&aacute;c sĩ chuy&ecirc;n khoa ph&ugrave; hợp với t&igrave;nh trạng bệnh tật của m&igrave;nh.</span></p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Bác sĩ trên Medpro có tư vấn qua điện thoại không?'}
                        answer={'<p><span>Hiện tại Medpro đang hỗ trợ bệnh nh&acirc;n đặt lịch theo 2 h&igrave;nh thức: K</span><span>h&aacute;m trực tiếp tại ph&ograve;ng kh&aacute;m/ bệnh viện v&agrave; kh&aacute;m từ xa qua Video.</span></p><p><span>Với bệnh nh&acirc;n đăng k&yacute; kh&aacute;m trực tiếp, b&aacute;c sĩ sẽ tư vấn khi bệnh nh&acirc;n đến kh&aacute;m tại cơ sở y tế.</span></p><p>Với bệnh nh&acirc;n đăng k&yacute; kh&aacute;m từ xa qua Video, b&aacute;c sĩ sẽ tư vấn cho bệnh nh&acirc;n qua cuộc gọi Video tr&ecirc;n app Medpro.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi có thể được biết số điện thoại và thông tin cá nhân của bác sĩ không?'}
                        answer={'<p>Kh&ocirc;ng. Medpro kh&ocirc;ng cung cấp c&aacute;c th&ocirc;ng tin c&aacute; nh&acirc;n của b&aacute;c sĩ ngo&agrave;i c&aacute;c th&ocirc;ng tin được đăng tải tr&ecirc;n hệ thống.</p><p>Medpro l&agrave; Nền tảng Y tế Chăm s&oacute;c sức khỏe to&agrave;n diện gi&uacute;p bệnh nh&acirc;n dễ d&agrave;ng lựa chọn đ&uacute;ng b&aacute;c sĩ, dịch vụ từ mạng lưới b&aacute;c sĩ chuy&ecirc;n khoa giỏi, cơ sở y tế uy t&iacute;n, với th&ocirc;ng tin đ&atilde; x&aacute;c thực v&agrave; đặt lịch nhanh ch&oacute;ng.</p><p>Với người bệnh đăng k&yacute; kh&aacute;m trực tiếp tại cơ sở y tế: Sau khi đặt lịch, người bệnh đến cơ sở y tế để được b&aacute;c sĩ trực tiếp thăm kh&aacute;m, tư vấn v&agrave; điều trị.</p><p>Với ngời bệnh đăng k&yacute; dịch vụ "B&aacute;c sĩ từ xa": Sau khi đặt lịch th&agrave;nh c&ocirc;ng, b&aacute;c sĩ sẽ li&ecirc;n hệ cho người bệnh th&ocirc;ng qua App Medpro.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Medpro có thể giúp tôi đặt khám với một bác sĩ không có trên hệ thống không?'}
                        answer={'<p>Đối với c&aacute;c trường hợp b&aacute;c sĩ chưa c&oacute; tr&ecirc;n hệ thống, Medpro sẵn s&agrave;ng cung cấp cho người bệnh c&aacute;c th&ocirc;ng tin về nơi kh&aacute;m của b&aacute;c sĩ hoặc sự hỗ trợ cần thiết kh&aacute;c trong phạm vi hiểu biết của ch&uacute;ng t&ocirc;i.&nbsp;</p><p>Ngo&agrave;i ra, bạn cũng c&oacute; thể t&igrave;m một b&aacute;c sĩ kh&aacute;c với chuy&ecirc;n khoa tương đương tr&ecirc;n Medpro để đi kh&aacute;m. C&aacute;c b&aacute;c sĩ tr&ecirc;n hệ thống đều c&oacute; th&ocirc;ng tin r&otilde; r&agrave;ng v&agrave; được Medpro x&aacute;c thực.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi chưa lựa chọn được bác sĩ phù hợp, Medpro có thể hỗ trợ tôi được không?'}
                        answer={'<p>Trong trường hợp bạn chưa chọn được b&aacute;c sĩ chuy&ecirc;n khoa ph&ugrave; hợp, c&oacute; thể để lại lời nhắn trong phần hỗ trợ tr&ecirc;n website của Medpro:&nbsp; https://medpro.vn/hotro hoặc tr&ecirc;n trang fanpage: https://www.facebook.com/medpro/&nbsp;</p><p>Medpro sẵn s&agrave;ng hỗ trợ v&agrave; giải đ&aacute;p cho bạn. Tuy nhi&ecirc;n, Medpro cung cấp giải ph&aacute;p c&ocirc;ng nghệ, ch&uacute;ng t&ocirc;i kh&ocirc;ng c&oacute; chức năng tư vấn lựa chọn b&aacute;c sĩ. V&igrave; vậy, ch&uacute;ng t&ocirc;i lu&ocirc;n khuy&ecirc;n người bệnh hiểu về nhu cầu đi kh&aacute;m của m&igrave;nh để lựa chọn b&aacute;c sĩ chuy&ecirc;n khoa ph&ugrave; hợp.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Thông tin về bác sĩ trên Medpro được lấy từ đâu? có chính xác không?'}
                        answer={'<p>Th&ocirc;ng tin b&aacute;c sĩ, cơ sở y tế được lấy từ c&aacute;c nguồn sau:</p><ul><li>Do b&aacute;c sĩ trực tiếp cung cấp</li><li>Do cơ sở y tế nơi b&aacute;c sĩ c&ocirc;ng t&aacute;c cung cấp</li><li>Dựa theo bằng cấp chuy&ecirc;n m&ocirc;n v&agrave; chứng chỉ h&agrave;nh nghề</li><li>Ch&uacute;ng t&ocirc;i thu thập bổ sung từ c&aacute;c nguồn th&ocirc;ng tin ch&iacute;nh thống kh&aacute;c như: website bệnh viện, trang tin chuy&ecirc;n ng&agrave;nh, c&aacute;c b&aacute;o c&aacute;o nghi&ecirc;n cứu,.. v&agrave; c&oacute; kiểm tra, đối chiếu, x&aacute;c thực.</li></ul><p>Về nguy&ecirc;n tắc, Medpro lu&ocirc;n nỗ lực để th&ocirc;ng tin về b&aacute;c sĩ đảm bảo sự tin cậy v&agrave; c&oacute; độ ch&iacute;nh x&aacute;c cao nhất. Tuy nhi&ecirc;n, ch&uacute;ng t&ocirc;i chưa đủ điều kiện để x&aacute;c thực tất cả th&ocirc;ng tin l&agrave; ch&iacute;nh x&aacute;c tuyệt đối hoặc kh&ocirc;ng c&oacute; sai s&oacute;t n&agrave;o xảy ra. Đ&ocirc;i khi trong qu&aacute; tr&igrave;nh c&ocirc;ng t&aacute;c b&aacute;c sĩ thay đổi chức danh, vị tr&iacute; c&ocirc;ng việc, học h&agrave;m, học vị hoặc bằng cấp chứng chỉ chuy&ecirc;n m&ocirc;n m&agrave; hệ thống chưa kịp cập nhật.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi phải làm thế nào để gặp được bác sĩ?'}
                        answer={'<p>Sau khi đặt kh&aacute;m qua Medpro, bạn nhận được Hướng dẫn chi tiết về thời gian, địa chỉ, h&igrave;nh thức để gặp b&aacute;c sĩ.&nbsp;</p><p>Ngo&agrave;i ra, hướng dẫn đi kh&aacute;m c&ograve;n cung cấp th&ocirc;ng tin hỗ trợ trước kh&aacute;m, trong khi đi kh&aacute;m v&agrave; sau kh&aacute;m cụ thể, chi tiết.</p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Bác sĩ trên hệ thống Medpro có phẫu thuật không?'}
                        answer={'Bạn có thể đặt lịch khám với bác sĩ chuyên khoa trên Medpro. Sau khi thăm khám bác sĩ ra đưa ra phương án điều trị phù hợp theo tình trạng của người bệnh.Điều trị bằng phương pháp phẫu thuật thường được tiến hành ở các cơ sở y tế được cấp phép và bác sĩ chuyên khoa có chứng chỉ hành nghề chuyên môn ngoại khoa. Bạn nên cân nhắc lựa chọn bác sĩ hoặc cơ sở y tế có chuyên môn phù hợp đã được giới thiệu trên hệ thống.'}
                    />
                    <QuestionItem
                        question={'Bác sĩ trên Medpro có đến khám tại nhà không?'}
                        answer={'Không. Medpro hỗ trợ bạn đặt khám với các bác sĩ, bạn sẽ đến gặp bác sĩ trực tiếp tại phòng khám/bệnh viện - nơi mà bác sĩ thăm khám.'}
                    />
                    <QuestionItem
                        question={'Tôi muốn được tư vấn trước với bác sĩ, sau đó mới đặt lịch khám được không?'}
                        answer={'<p><span>B&aacute;c sĩ tr&ecirc;n hệ thống Medpro kh&ocirc;ng tư vấn trước, b&aacute;c sĩ cần gặp trực tiếp người bệnh để kh&aacute;m, tư vấn v&agrave; đưa ra phương &aacute;n điều trị ph&ugrave; hợp. Bạn vui l&ograve;ng đặt kh&aacute;m để gặp trực tiếp b&aacute;c sĩ.</span></p><div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi muốn được tư vấn trước với bác sĩ, sau đó mới đặt lịch khám được không?'}
                        answer={'Bác sĩ trên hệ thống Medpro không tư vấn trước, bác sĩ cần gặp trực tiếp người bệnh để khám, tư vấn và đưa ra phương án điều trị phù hợp. Bạn vui lòng đặt khám để gặp trực tiếp bác sĩ.'}
                    />
                    <QuestionItem
                        question={'Các bác sĩ trên hệ thống Medpro có nhận tư vấn kết quả khi không có bệnh nhân không?'}
                        answer={'Hầu hết bác sĩ trên hệ thống Medpro không nhận tư vấn kết quả khi không có người bệnh, vì bác sĩ cần gặp trực tiếp bệnh nhân để hỏi bệnh và khám lâm sàng. Tuy nhiên, trong một số trường hợp đặc biệt, ví dụ người bệnh không thể di chuyển được, bác sĩ có thể nhận tư vấn cho người nhà dựa trên kết quả xét nghiệm đã có. Nếu đây là trường hợp mà bạn đang quan tâm, vui lòng liên hệ để Medpro hướng dẫn cho bạn theo từng trường hợp cụ thể.'}
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutDoctor);

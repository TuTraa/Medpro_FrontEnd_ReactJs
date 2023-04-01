import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class AfterExamination extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <h3>Hỏi đáp sau khám</h3>
                <div className='question'>
                    <QuestionItem
                        question={'Tại sao giá dịch vụ khám chữa bệnh hiển thị trên Medpro khác với chi phí thực tế tại phòng khám/bệnh viện?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p>T&ograve;an bộ chi ph&iacute; kh&aacute;m v&agrave; chi ph&iacute; dịch vụ hiện tr&ecirc;n c&aacute;c ứng dụng (website, apps) của Medpro đều theo ni&ecirc;m yết tại ph&ograve;ng kh&aacute;m/bệnh viện - nơi m&agrave; b&aacute;c sĩ thăm kh&aacute;m cho người bệnh. Trong qu&aacute; tr&igrave;nh hợp t&aacute;c giữa Medpro v&agrave; ph&ograve;ng kh&aacute;m/bệnh viện c&oacute; thể c&oacute; sự thay đổi về ch&iacute;nh s&aacute;ch gi&aacute; của ph&ograve;ng kh&aacute;m/bệnh viện m&agrave; Medpro chưa cập nhật kịp thời l&ecirc;n c&aacute;c ứng dụng.</p> <p>Nếu gặp trường hợp n&agrave;y, mong bạn b&aacute;o lại gi&uacute;p Medpro, ch&uacute;ng t&ocirc;i ghi nhận th&ocirc;ng tin v&agrave; nhanh ch&oacute;ng cập nhật l&ecirc;n c&aacute;c ứng dụng. Medpro tr&acirc;n trọng cảm ơn bạn.</p> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi quên hỏi bác sĩ về chế đô ăn uống cũng như chế độ luyện tập sau khi đi khám? Medpro có thể giúp tôi được không?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p>C&oacute;. Nhưng trước hết, bạn c&oacute; thể xem lại Sổ kh&aacute;m bệnh của m&igrave;nh, nếu c&oacute; số điện thoại li&ecirc;n hệ của b&aacute;c sĩ trong sổ, bạn c&oacute; thể trực tiếp li&ecirc;n hệ cho b&aacute;c sĩ để hỏi th&ecirc;m bạn nh&eacute;. Trong trường hợp kh&ocirc;ng c&oacute;, bạn vui l&ograve;ng để lại lời nhắn tr&ecirc;n hệ thống, Medpro sẽ hỗ trợ bạn kết nối với bệnh viện/ph&ograve;ng kh&aacute;m/b&aacute;c sĩ để bạn hỏi th&ecirc;m về chế độ sinh hoạt ph&ugrave; hợp cho t&igrave;nh trạng của m&igrave;nh.</p> <p>Ngo&agrave;i ra trước khi đi kh&aacute;m, Medpro cũng gửi cho bạn một Hướng dẫn đi kh&aacute;m chi tiết v&agrave; đầy đủ, bao gồm cả những c&acirc;u hỏi bạn cần chuẩn bị trong l&uacute;c gặp b&aacute;c sĩ, mong bạn đọc kỹ để qu&aacute; tr&igrave;nh kh&aacute;m chữa bệnh được hiệu quả hơn.</p> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi bị dị ứng sau khi sử dụng thuốc theo đơn của bác sĩ, vậy tôi phải làm thế nào?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p><span>C&oacute;. Nhưng trước hết, bạn c&oacute; thể xem lại Sổ kh&aacute;m bệnh của m&igrave;nh, nếu c&oacute; số điện thoại li&ecirc;n hệ của b&aacute;c sĩ trong sổ, bạn c&oacute; thể trực tiếp li&ecirc;n hệ cho b&aacute;c sĩ để hỏi th&ecirc;m. Trong trường hợp kh&ocirc;ng c&oacute;, bạn vui l&ograve;ng li&ecirc;n hệ đến Medpro, Medpro sẽ hỗ trợ bạn kết nối với bệnh viện/ph&ograve;ng kh&aacute;m/b&aacute;c sĩ gi&uacute;p bạn.</span></p> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Sau khi đi khám và điều trị theo lời khuyên của bác sĩ bệnh tình của tôi không tiến triển tốt, tôi phải làm thế nào?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p><span>C&oacute;. Nhưng trước hết, bạn c&oacute; thể xem lại Sổ kh&aacute;m bệnh của m&igrave;nh, nếu c&oacute; số điện thoại li&ecirc;n hệ của b&aacute;c sĩ trong sổ, bạn c&oacute; thể trực tiếp li&ecirc;n hệ cho b&aacute;c sĩ để hỏi th&ecirc;m bạn nh&eacute;. Trong trường hợp kh&ocirc;ng c&oacute;, bạn vui l&ograve;ng li&ecirc;n hệ đến Medpro, Medpro sẽ hỗ trợ bạn kết nối với bệnh viện/ph&ograve;ng kh&aacute;m/b&aacute;c sĩ gi&uacute;p bạn.</span></p> </div> </div> </div> <div id="eJOY__extension_root" className="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Bệnh tình của tôi đã khá hơn nhiều, giờ tôi muốn cảm ơn bác sĩ thì làm thế nào?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p><span>Bạn c&oacute; thể gửi th&ocirc;ng tin v&agrave;o phần Phản hồi &yacute; kiến cho B&aacute;c sĩ, Medpro sẽ đăng tải những phải hồi (kh&ocirc;ng k&egrave;m theo th&ocirc;ng tin c&aacute; nh&acirc;n) của bạn l&ecirc;n c&ugrave;ng th&ocirc;ng tin B&aacute;c sĩ để hỗ trợ c&aacute;c bệnh nh&acirc;n kh&aacute;c gặp t&igrave;nh trạng tương tự bạn sẽ t&igrave;m được b&aacute;c sĩ ph&ugrave; hợp v&agrave; điều trị hiệu quả.</span></p> </div> </div> </div>'}
                    />
                    <QuestionItem
                        question={'Tôi ở xa không xuống tái khám được, bệnh viện/phòng khám có chuyển phát nhanh thuốc theo đơn không?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p><span>Kh&ocirc;ng. Bạn n&ecirc;n đến t&aacute;i kh&aacute;m với b&aacute;c sĩ để c&oacute; đơn thuốc mới ph&ugrave; hợp với t&igrave;nh trạng của bạn. Sau khi bạn điều trị một thời gian, đơn thuốc cũ c&oacute; thể kh&ocirc;ng tiếp tục d&ugrave;ng được. V&igrave; vậy bạn cần kh&aacute;m lại để biết ch&iacute;nh x&aacute;c t&igrave;nh trạng v&agrave; đơn thuốc ph&ugrave; hợp.</span></p> </div> </div> </div>'}
                    />
                    <QuestionItem
                        question={'Tôi ở xa không xuống tái khám được, bệnh viện/phòng khám có chuyển phát nhanh thuốc theo đơn không?'}
                        answer={'Không. Bạn nên đến tái khám với bác sĩ để có đơn thuốc mới phù hợp với tình trạng của bạn. Sau khi bạn điều trị một thời gian, đơn thuốc cũ có thể không tiếp tục dùng được. Vì vậy bạn cần khám lại để biết chính xác tình trạng và đơn thuốc phù hợp.'}
                    />
                    <QuestionItem
                        question={'Sau khi điều trị bệnh tình của tôi đã tiến triển tốt, vậy tôi có cần tái khám theo hẹn không?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p><span>C&oacute;. Bạn n&ecirc;n t&aacute;i kh&aacute;m theo hẹn của b&aacute;c sĩ. Đ&ocirc;i khi bệnh t&igrave;nh tiến triển l&agrave; biểu hiện b&ecirc;n ngo&agrave;i, cần kh&aacute;m v&agrave; xem x&eacute;t liệu đ&atilde; ho&agrave;n to&agrave;n khỏi bệnh chưa. Ch&iacute;nh v&igrave; vậy bạn n&ecirc;n t&aacute;i kh&aacute;m theo hẹn để đảm bảo bạn đ&atilde; ho&agrave;n to&agrave;n khỏe mạnh.</span></p> </div> </div> </div>'}
                    />
                    <QuestionItem
                        question={'Tôi cảm thấy bệnh tình của tôi không đỡ hơn sau khi điều trị, vậy tôi có nên tái khám với bác sĩ đã khám không?'}
                        answer={'<div className="faq open"> <div className="faq open"> <div className="faq open"> <p>Nếu bạn đ&atilde; đi kh&aacute;m đ&uacute;ng b&aacute;c sĩ chuy&ecirc;n khoa ph&ugrave; hợp với t&igrave;nh trạng của bạn, bạn n&ecirc;n đi t&aacute;i kh&aacute;m đ&uacute;ng hẹn.</p> <p>Ph&aacute;c đồ điều trị m&agrave; b&aacute;c sĩ đưa ra trong lần kh&aacute;m đầu ti&ecirc;n dựa tr&ecirc;n t&igrave;nh trạng của bạn, lần t&aacute;i kh&aacute;m đặc biệt quan trọng v&igrave; b&aacute;c sĩ sẽ xem phương ph&aacute;p điều trị trước đ&oacute; c&oacute; thực sự hiệu quả với cơ thể của bạn kh&ocirc;ng v&agrave; điều chỉnh cho ph&ugrave; hợp hơn. Nếu bạn đi kh&aacute;m với một b&aacute;c sĩ kh&aacute;c, c&oacute; thể quy tr&igrave;nh n&agrave;y sẽ lặp lại từ đầu, như vậy bạn sẽ cần th&ecirc;m thời gian v&agrave; chi ph&iacute;.</p> </div> </div> </div>'}
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

export default connect(mapStateToProps, mapDispatchToProps)(AfterExamination);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class CustomerBenefits extends Component {
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
                <h3>Lợi ích khác hàng</h3>
                <div className='question'>
                    <QuestionItem
                        question={'Đặt lịch khám thông qua Medpro được lợi ích gì?'}
                        answer={'<div class="faq open"> <div class="faq open"> <div class="faq open"> <p>Hệ thống đặt kh&aacute;m gi&uacute;p bệnh nh&acirc;n dễ d&agrave;ng lựa chọn đ&uacute;ng b&aacute;c sĩ v&agrave; đặt lịch nhanh ch&oacute;ng</p> <ul> <li>Mạng lưới b&aacute;c sĩ chuy&ecirc;n khoa giỏi, uy t&iacute;n với th&ocirc;ng tin đ&atilde; x&aacute;c thực</li> <li>Lịch kh&aacute;m của b&aacute;c sĩ tr&ecirc;n hệ thống theo thời gian thực tế của b&aacute;c sĩ tại cơ sở y tế (bệnh viện, ph&ograve;ng kh&aacute;m)</li> <li>Kh&aacute;m đ&uacute;ng b&aacute;c sĩ m&agrave; bệnh nh&acirc;n đ&atilde; chọn đặt lịch</li> <li>Cơ sở y tế uy t&iacute;n, tin cậy, chi ph&iacute; kh&aacute;m chữa bệnh hợp l&yacute;, r&otilde; r&agrave;ng, minh bạch (Ch&uacute;ng t&ocirc;i kh&ocirc;ng hợp t&aacute;c với cơ sở y tế thiếu uy t&iacute;n).</li> <li>Hỗ trợ trước, trong v&agrave; sau khi đi kh&aacute;m</li> <li>Bảo vệ quyền lợi của bệnh nh&acirc;n khi đi kh&aacute;m.</li> <li>Kh&aacute;m lại miễn ph&iacute;</li> </ul> <p>Sau khi đi kh&aacute;m, nếu người bệnh kh&ocirc;ng h&agrave;i l&ograve;ng với quy tr&igrave;nh kh&aacute;m, tư vấn v&agrave; phương &aacute;n điều trị của b&aacute;c sĩ, hệ thống sẽ hỗ trợ bệnh nh&acirc;n gặp lại b&aacute;c sĩ để được kh&aacute;m v&agrave; tư vấn kỹ hơn (nếu bệnh nh&acirc;n c&oacute; y&ecirc;u cầu v&agrave; ph&ugrave; hợp). Bệnh nh&acirc;n được hỗ trợ kh&aacute;m miễn ph&iacute; với b&aacute;c sĩ kh&aacute;c c&ugrave;ng chuy&ecirc;n khoa (nếu y&ecirc;u cầu của bệnh nh&acirc;n ph&ugrave; hợp).</p> <p>&nbsp;</p> <p>Medpro kh&ocirc;ng trực tiếp cung cấp dịch vụ kh&aacute;m, chữa bệnh m&agrave; đ&oacute;ng vai tr&ograve; kết nối giữa bệnh nh&acirc;n v&agrave; b&aacute;c sĩ. Trong thực tế kh&aacute;m chữa bệnh, những vướng nảy sinh l&agrave; kh&oacute; tr&aacute;nh khỏi. V&igrave; c&oacute; quan hệ đối t&aacute;c tin cậy với&nbsp; b&aacute;c sĩ, cơ sở y tế, ch&uacute;ng t&ocirc;i sẽ hỗ trợ giải quyết băn khoăn của bệnh nh&acirc;n một c&aacute;ch thấu đ&aacute;o. Trong thực tế, nhiều thắc mắc của bệnh nh&acirc;n đ&atilde; được giải đ&aacute;p r&otilde; r&agrave;ng hoặc hỗ trợ kh&aacute;m lại miễn ph&iacute;.</p> </div> </div> </div> <div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tại sao nên đặt lịch thông qua Medpro trước khi đi khám?'}
                        answer={'<div class="faq open"> <div class="faq open"> <div class="faq open"> <p>Đặt kh&aacute;m trước để được sắp xếp kh&aacute;m đ&uacute;ng với b&aacute;c sĩ bạn đ&atilde; chọn. Trong trường hợp kh&ocirc;ng đặt trước, bạn c&oacute; thể kh&ocirc;ng được kh&aacute;m với đ&uacute;ng b&aacute;c sĩ m&agrave; m&igrave;nh mong muốn kh&aacute;m.</p> <p>Th&ocirc;ng qua Medpro, bạn sẽ được:&nbsp;</p> <ul> <li>Nhận được sự hỗ trợ trước, trong v&agrave; sau khi đi kh&aacute;m</li> <li>Biết được c&aacute;c th&ocirc;ng tin về b&aacute;c sĩ đ&atilde; được x&aacute;c thực r&otilde; r&agrave;ng, minh bạch</li> <li>Kh&aacute;m đ&uacute;ng b&aacute;c sĩ m&agrave; bệnh nh&acirc;n đ&atilde; chọn đặt lịch</li> <li>Giảm thiểu thời gian chờ đợi để được kh&aacute;m</li> <li>Medpro bảo vệ quyền lợi của bạn khi đi kh&aacute;m.</li> <li>Ngo&agrave;i ra, Medpro cung cấp dịch vụ đặt kh&aacute;m "miễn ph&iacute;". C&aacute;c chi ph&iacute; kh&aacute;m chữa bệnh bạn trả trực tiếp tại bệnh viện hoặc ph&ograve;ng kh&aacute;m.</li> <li>Kh&aacute;m lại miễn ph&iacute;</li> </ul> <p>Sau khi đi kh&aacute;m, nếu bạn kh&ocirc;ng h&agrave;i l&ograve;ng với quy tr&igrave;nh kh&aacute;m, tư vấn v&agrave; phương &aacute;n điều trị của b&aacute;c sĩ, hệ thống sẽ hỗ trợ bạn gặp lại b&aacute;c sĩ để được kh&aacute;m v&agrave; tư vấn kỹ hơn (nếu bạn c&oacute; y&ecirc;u cầu v&agrave; ph&ugrave; hợp). Bạn được hỗ trợ kh&aacute;m miễn ph&iacute; với b&aacute;c sĩ kh&aacute;c c&ugrave;ng chuy&ecirc;n khoa (nếu y&ecirc;u cầu của bạn ph&ugrave; hợp).</p> </div> </div> </div> <div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
                    />
                    <QuestionItem
                        question={'Tôi có được khám với đúng bác sĩ đã đặt lịch trước không?'}
                        answer={'<div class="faq open"> <div class="faq open"> <div class="faq open"> <p><span>C&oacute;, bạn được kh&aacute;m đ&uacute;ng b&aacute;c sĩ đ&atilde; đặt lịch. Trong thực tế kh&aacute;m chữa bệnh, b&aacute;c sĩ c&oacute; thể thay đổi lịch kh&aacute;m đột xuất v&igrave; một l&yacute; do n&agrave;o đ&oacute;, nhất l&agrave; c&aacute;c b&aacute;c sĩ giỏi thường rất bận rộn. Tuy nhi&ecirc;n, Medpro lu&ocirc;n theo d&otilde;i s&aacute;t sao lịch kh&aacute;m của b&aacute;c sĩ để cập nhật v&agrave; th&ocirc;ng b&aacute;o kịp thời cũng như giảm thiểu sai s&oacute;t xảy ra.</span></p> </div> </div> </div> <div id="eJOY__extension_root" class="eJOY__extension_root_class" style="all: unset;">&nbsp;</div>'}
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerBenefits);

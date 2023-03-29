import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import "./question.scss";
import QuestionItem from './questionItem';

class QuestionAbout extends Component {
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
                <h3>Về Medpro</h3>
                <div className='question'>
                    <QuestionItem
                        question={'Medpro lỗ lực về điều gì ?'}
                        answer={'Medpro nỗ lực xây dựng Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam vươn tầm khu vực Asean, giúp bệnh nhân lựa chọn dịch vụ y tế phù hợp nhằm nâng cao hiệu quả chữa bệnh, tiết kiệm thời gian và chi phí.'}
                    />
                    <QuestionItem
                        question={'Medpro có phải là một bệnh viện, hay phòng khám không?'}
                        answer={'<p>Đối t&aacute;c hợp t&aacute;c.&nbsp;</p><p>Medpro hợp t&aacute;c với c&aacute;c bệnh viện/ph&ograve;ng kh&aacute;m, cung cấp c&aacute;c th&ocirc;ng tin về kh&aacute;m chữa bệnh tại bệnh viện/ph&ograve;ng kh&aacute;m cho người bệnh để người bệnh c&oacute; thể dễ d&agrave;ng lựa chọn b&aacute;c sĩ ph&ugrave; hợp v&agrave; đặt lịch nhanh ch&oacute;ng.</p>'}
                    />
                    <QuestionItem
                        question={'Mối quan hệ của Medpro với các bệnh viện, phòng khám là gì?'}
                        answer={'<p>Kh&ocirc;ng.</p><p>Medpro l&agrave; Nền tảng Y tế Chăm s&oacute;c sức khỏe to&agrave;n diện kết nối người d&ugrave;ng đến với dịch vụ y tế - chăm s&oacute;c sức khỏe chất lượng, hiệu quả v&agrave; tin cậy.</p><p>Medpro kết nối mạng lưới b&aacute;c sĩ giỏi ở nhiều bệnh viện, ph&ograve;ng kh&aacute;m kh&aacute;c nhau. C&oacute; thể h&igrave;nh dung, Medpro hoạt động theo m&ocirc; h&igrave;nh tương tự như Taxi Uber hay Grab trong lĩnh vực Y tế - Chăm s&oacute;c sức khỏe.</p>'}
                    />
                    <QuestionItem
                        question={'Medpro phù hợp với nhóm bệnh nhân nào?'}
                        answer={'<p>Medpro ph&ugrave; hợp với c&aacute;c nh&oacute;m bệnh nh&acirc;n:</p><ul><li>Bệnh kh&ocirc;ng c&oacute; t&iacute;nh chất cấp cứu</li>   <li>Bệnh m&atilde;n t&iacute;nh cần kh&aacute;m b&aacute;c sĩ chuy&ecirc;n khoa</li> <li>Người bệnh biết r&otilde; về t&igrave;nh trạng bệnh của m&igrave;nh</li>   <li>Mong muốn chủ động đặt lịch đi kh&aacute;m c&oacute; kế hoạch</li></ul>'}
                    />
                    <QuestionItem
                        question={'Miễn phí đặt lịch, vậy Medpro thu phí bằng cách nào?'}
                        answer={'Các cơ sở y tế sẽ chi trả chi phí dịch vụ cho Medpro'}
                    />
                    <QuestionItem
                        question={'Medpro là gì?'}
                        answer={'<p>Medpro l&agrave; Nền tảng Y tế Chăm s&oacute;c sức khỏe to&agrave;n diện kết nối người d&ugrave;ng đến với dịch vụ y tế - chăm s&oacute;c sức khỏe chất lượng, hiệu quả, tin cậy với tr&ecirc;n 100 bệnh viện, ph&ograve;ng kh&aacute;m uy t&iacute;n, hơn 600 b&aacute;c sĩ chuy&ecirc;n khoa giỏi v&agrave; h&agrave;ng ngh&igrave;n dịch vụ y tế chất lượng.&nbsp;</p><p>Medpro kết nối mạng lưới b&aacute;c sĩ v&agrave; cơ sở y tế chuy&ecirc;n khoa. Bệnh nh&acirc;n dễ d&agrave;ng lựa chọn đ&uacute;ng dịch vụ y tế với th&ocirc;ng tin đ&atilde; x&aacute;c thực v&agrave; đặt lịch nhanh ch&oacute;ng.</p>'}
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAbout);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import QuestionItem from './questionItem';

class HealthRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <>
                <h3>Hồ sơ sức khỏe</h3>
                <div className='question' style={{ height: '400px' }}>
                    <QuestionItem
                        question={'Hướng dẫn nhập ghi chú'}
                        answer={'<div class="faq open"> <div class="faq open"> <div class="faq open"> <p>Hồ sơ sức khỏe l&agrave; t&iacute;nh năng gi&uacute;p người d&ugrave;ng quản l&yacute; th&ocirc;ng tin về sức khỏe của m&igrave;nh v&agrave; người th&acirc;n. Để lưu trữ th&ocirc;ng tin, bạn c&oacute; thể ấn v&agrave;o mục &ldquo;Th&ecirc;m ghi ch&uacute;&rdquo; v&agrave; điền th&ocirc;ng tin theo mẫu. Bạn vui l&ograve;ng lưu &yacute; một số điều sau khi điền th&ocirc;ng tin:</p> <p>1. Người d&ugrave;ng: Ấn v&agrave;o &ocirc; &ldquo;Người d&ugrave;ng&rdquo; để lựa chọn t&ecirc;n người d&ugrave;ng tương ứng với ghi ch&uacute;.</p> <p>2. Danh mục:&nbsp; Ấn v&agrave;o &ocirc; &ldquo;Danh mục&rdquo; để lựa chọn danh mục tương ứng với loại ghi ch&uacute; (Tiền sử bệnh/ dị ứng, x&eacute;t nghiệm, đơn thuốc, ghi ch&uacute; kh&aacute;c)</p> <p>3. Lịch kh&aacute;m:</p> <ul> <li>Nếu ghi ch&uacute; đ&oacute; gắn với lịch kh&aacute;m c&oacute; sẵn th&igrave; chọn lịch kh&aacute;m tương ứng.</li> <li>Nếu ghi ch&uacute; đ&oacute; thuộc 1 lịch kh&aacute;m kh&aacute;c, chưa được lưu th&ocirc;ng tin tr&ecirc;n App BookingCare th&igrave; chọn &ldquo;Nhập lịch kh&aacute;m mới&rdquo; v&agrave; điền c&aacute;c th&ocirc;ng tin bổ sung (B&aacute;c sĩ, nơi kh&aacute;m, l&yacute; do kh&aacute;m).</li> <li>Nếu kh&ocirc;ng c&oacute; th&ocirc;ng tin về lịch kh&aacute;m th&igrave; c&oacute; thể bỏ qua mục n&agrave;y.</li> </ul> <p>4. Thời gian: Thời gian xuất hiện triệu chứng, bệnh/ nhận x&eacute;t nghiệm, đơn thuốc.</p> <p>5. Nội dung: Nhập nội dung chi tiết của ghi ch&uacute; (triệu chứng, bệnh, lưu &yacute;, dặn d&ograve; của b&aacute;c sĩ&hellip;)</p> <p>6. Danh s&aacute;ch ảnh: Ấn v&agrave;o biểu tượng dấu cộng &ldquo;+&rdquo; để th&ecirc;m ảnh (nếu c&oacute;)</p> </div> </div> </div>'}
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthRecords);

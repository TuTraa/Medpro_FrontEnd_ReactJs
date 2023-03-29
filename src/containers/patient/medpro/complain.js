import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import './complain.scss'
import HomeFooter from '../../HomePage/HomeFooter';

class Conplain extends Component {
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
                    <p>Quy trình giải quyết khiếu nại</p>
                </div>
                <div className='content-complain'>
                    <h2 className='mt-4'>Thông tin chi tiết :</h2>
                    <div className='detail'>
                        <p>Medpro.vn và Phòng khám/ Bác sĩ có trách nhiệm tiếp nhận khiếu nại và
                            hỗ trợ khách hàng liên quan đến giao dịch tại Website Medpro.vn.
                        </p>
                        <p>
                            Khi phát sinh tranh chấp, Công ty đề cao giải pháp thương lượng, hòa giải giữa
                            các bên nhằm duy trì sự tin cậy của thành viên vào chất lượng dịch vụ của Medpro.vn và thực hiện theo các bước sau:
                        </p>
                        <div className='step'>
                            <p>Bước 1:Thành viên khách hàng khiếu nại về dịch vụ của phòng khám/ bệnh viện qua
                                email: support@Medpro.vn
                            </p>
                            <p>Bước 2: Bộ phận Chăm sóc Khách hàng của Medpro.vn sẽ tiếp nhận các khiếu nại của thành viên khách hàng, tùy theo tính
                                chất và mức độ của khiếu nại thì bên Medpro.vn sẽ có những biện pháp cụ thể hỗ trợ khách hàng để giải quyết tranh
                                chấp đó.
                            </p>
                            <p>Bước 3: Trong trường hợp nằm ngoài khả năng và thẩm quyền của Medpro.vn thì ban quản trị sẽ yêu cầu khách hàng đưa vụ
                                việc này ra cơ quan nhà nước có thẩm quyền giải quyết theo pháp luật.
                            </p>
                        </div>
                        <h4>Khách hàng gửi khiếu nại tại địa chỉ : </h4>
                        <div className='step'>
                            <p>Công Ty Cổ Phần Công Nghệ Medpro</p>
                            <p>Địa chỉ: 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                            <p>Hotline: 02473.012.468 - Email: support@Medpro.vn</p>
                        </div>
                        <p>Khách hàng có thể gửi thông tin khiếu nại trực tiếp theo thông tin tại mục “Liên hệ”. Thông tin của khách hàng sẽ được gửi
                            đến ban quản trị  Medpro.vn. Trong thời gian sớm nhất có thể ban quản trị Medpro.vn sẽ có email phải hồi lại ý kiến
                            phản ánh của khách hàng.
                        </p>
                        <p>Medpro.vn tôn trọng và nghiêm túc thực hiện các quy định của pháp luật về bảo vệ quyền lợi của khách hàng (người tiêu dùng).
                            Vì vậy, đề nghị các thành viên đăng tin dịch vụ trên sàn cung cấp đầy đủ, chính xác, trung thực và chi tiết các thông tin liên quan
                            đến dịch vụ. Mọi hành vi lừa đảo, gian lận trong kinh doanh đều bị lên án và phải chịu hoàn toàn trách nhiệm trước pháp luật.
                        </p>
                        <p>
                            Các bên bao gồm Phòng khám, khách hàng sẽ phải có vai trò trách nhiệm trong việc tích cực giải quyết vấn đề. Đối với Phòng khám
                            cần có trách nhiệm cung cấp văn bản giấy tờ chứng thực thông tin liên quan đến sự việc đang gây mâu thuẫn cho khách hàng. Đối với
                            Medpro.vn sẽ có trách cung cấp những thông tin liên quan đến khách hàng và Phòng khám nếu được khách hàng hoặc Phòng khám
                            (liên quan đến tranh chấp đó) yêu cầu.
                        </p>
                        <p>Tùy theo mức độ vi phạm của Phòng khám, Ban quản trị sẽ quyết định gõ bỏ toàn bộ thông tin của Phòng khám đó, đồng thời sẽ chấm
                            dứt quyền thành viên.
                        </p>
                        <p>
                            Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải quyết được mâu thuẫn phát sinh từ giao dịch giữa 2 bên khách hàng,
                            Phòng khám, thì một trong 2 bên khách hàng và Phòng khám sẽ có quyền nhờ đến cơ quan pháp luật có thẩm quyền can thiệp nhằm
                            đảm bảo lợi ích hợp pháp của các bên nhất là cho khách hàng.
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Conplain);

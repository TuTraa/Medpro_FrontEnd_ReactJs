import React, { Component } from 'react';
import { connect } from "react-redux";
import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import BannerMedpro from '../../HomePage/bannerMedpro';
import HomeFooter from '../../HomePage/HomeFooter';
import { Link } from "react-router-dom";
import QuestionAbout from './question/questionAbout';
import UserManual from './question/userManual';
import AboutDoctor from './question/aboutDoctor';
import HealthFacilities from './question/healthFacilities';
import PriceAndPay from './question/priceAndPay';
import Insurance from './question/insurance';
import Customerbenefits from './question/customerbenefits';
import AfterExamination from './question/afterExamination';
import HealthRecords from './question/healthRecords';

class QuestionAboutMedpro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicId: 'S0'
        }
    }
    topicDetail = (topicId) => {
        this.setState({
            topicId: topicId,
        })
    }

    render() {
        let { topicId } = this.state;
        return (
            <div className='complain'>
                <BannerMedpro isShowBanner={false} />
                <div className='bg-my-schedule-examination'>
                    <p>Câu hỏi thường gặp</p>
                </div>
                <div className='question-frequently container'>
                    <div className='link-back'>
                        <Link to={`/home`}><div className='item-menu'><p>Trang chủ</p></div></Link >
                        &nbsp; >> &nbsp; <div className={topicId !== 'S0' && 'isS0'} onClick={() => this.topicDetail('S0')}>Câu hỏi thường gặp </div> &nbsp;
                        {topicId === "S1" && ` >>  Về Medori`}
                        {topicId === "S2" && ` >>  Hướng dẫn sử dụng`}
                        {topicId === "S3" && ` >>  Về bác sĩ `}
                        {topicId === "S4" && ` >>  Cơ sở y tế`}
                        {topicId === "S5" && ` >>  Giá và thanh toán`}
                        {topicId === "S6" && ` >>  Bảo hiểm`}
                        {topicId === "S7" && ` >>  Lợi ích khách hàng`}
                        {topicId === "S8" && ` >>  Hỏi đáp sau khám`}
                        {topicId === "S9" && ` >>  Hồ sơ sức khỏe`}
                    </div>
                    {topicId === "S0" &&
                        <>
                            <h3>Câu hỏi thường gặp</h3>
                            <p className='topic-questions' onClick={() => this.topicDetail('S1')}>Về Medpro</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S2')}>Hướng dẫn sử dụng</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S3')}>Về bác sĩ</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S4')}>Cơ sở y tế</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S5')}>Giá và thanh toán</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S6')}>Bảo hiểm</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S7')}>Lợi ích khách hàng</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S8')}>Hỏi đáp sau khám</p>
                            <p className='topic-questions' onClick={() => this.topicDetail('S9')}>Hồ sơ sức khỏe</p>
                        </>
                    }
                    {topicId === "S1" && <QuestionAbout />}
                    {topicId === "S2" && <UserManual />}
                    {topicId === "S3" && <AboutDoctor />}
                    {topicId === "S4" && <HealthFacilities />}
                    {topicId === "S5" && <PriceAndPay />}
                    {topicId === "S6" && <Insurance />}
                    {topicId === "S7" && <Customerbenefits />}
                    {topicId === "S8" && <AfterExamination />}
                    {topicId === "S9" && <HealthRecords />}


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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAboutMedpro);

import React, { Component } from 'react';
import { connect } from "react-redux";
// import { languages } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';
import { onOffMenuVectical } from "../../store/actions/appActions";
import './menuVertical.scss';
import { Link } from "react-router-dom";

class MenuVertical extends Component {
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
            <div className='parent-menu-vertical'>
                <div className='vertica-menu'>
                    <Link to={`/home`}><div className='item-menu'><p>Trang chủ</p></div></Link >
                    <div className='item-menu bg-gray'>Bạn Là Bệnh Nhân</div>
                    <Link to={`/yorn_schedule_examination`}><div className='item-menu'><p>Lịch Khám Của Bạn</p></div></Link >

                    <div className='item-menu bg-gray'>Bạn Là Bác Sĩ</div>
                    <div className='item-menu'><p>Trở Thành Đối Tác </p></div>
                    <div className='item-menu bg-gray'>Khác</div>
                    <Link to={`/role_of_medpro`}><div className='item-menu'><p>Vai trò của medpro</p></div></Link >
                    <Link to={`/question_about_medpro`}><div className='item-menu'><p>Các Câu Hỏi Thường Gặp</p></div></Link >
                    <Link to={`/contract_with_medpro`}><div className='item-menu'><p>Liên hệ</p></div></Link >
                    <Link to={`/terms_of_use`}><div className='item-menu'><p>Điều khoản sử dụng</p></div></Link >
                    <Link to={`/complain`}><div className='item-menu'><p>Quy Trình Giải Quyết Khiếu Nại</p></div></Link >
                </div>
                <div className='right-vertical-menu' onClick={() => this.props.onOffMenuVectical()}></div>
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
        onOffMenuVectical: () => dispatch(onOffMenuVectical()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuVertical);

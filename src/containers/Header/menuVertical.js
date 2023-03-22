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
                    <div className='item-menu'><p>Trang Chủ</p></div>
                    <div className='item-menu'><p>Cảm Nang</p></div>
                    <div className='item-menu bg-gray'>Bạn Là Bệnh Nhân</div>
                    <Link to={`/yorn_schedule_examination`}><div className='item-menu'><p>Lịch Khám Của Bạn</p></div></Link >

                    <div className='item-menu bg-gray'>Bạn Là Bác Sĩ</div>
                    <div className='item-menu'><p>Trở Thành Đối Tác </p></div>
                    <div className='item-menu bg-gray'>Khác</div>
                    <div className='item-menu'><p>Vai Trò Của Medpro</p></div>
                    <div className='item-menu'><p>Các Câu Hỏi Thường Gặp</p></div>
                    <div className='item-menu'><p>Liên Hệ</p></div>
                    <div className='item-menu'><p>Điều Khoản Sử Dụng</p></div>
                    <div className='item-menu'><p>Quy Trình Giải Quyết</p></div>
                    <div className='item-menu'><p>Khiếu Nại</p></div>
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

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

class DoctorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {
        if (this.props.content && this.props.title) {
            this.setState({
                content: this.props.content,
                title: this.props.title,
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.content !== prevProps.content) {
            this.setState({
                content: this.props.content,
                title: this.props.title,
            })
        }
    }
    render() {
        let { content, title } = this.state;
        return (
            <div className='content-role-item'>
                <h1>{title}</h1>
                <div className='content-bottom'>
                    <div className='flex-content' dangerouslySetInnerHTML={{ __html: content }}>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorItem);

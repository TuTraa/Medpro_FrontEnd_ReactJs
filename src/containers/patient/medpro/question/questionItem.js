import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: false,
            question: '',
            answer: '',
        }
    }
    async componentDidMount() {
        if (this.props.question && this.props.answer) {
            this.setState({
                question: this.props.question,
                answer: this.props.answer,
            })
        }

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.question !== this.props.question || prevProps.answer !== this.props.answer) {
            this.setState({
                question: this.props.question,
                answer: this.props.answer,
            })
        }
    }
    openAnswer = () => {
        this.setState({
            action: true,
        })
    }
    render() {
        let { action, question, answer } = this.state;
        return (
            <div className='item-questiom'>
                <div className='title-question' onClick={() => this.openAnswer()}>{question}</div>
                {action && <div className='answer-question' dangerouslySetInnerHTML={{ __html: answer }}></div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import "./tableManageUser.scss";
import { connect } from "react-redux";

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
}

class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: [],
        };
    }
    componentDidMount() {
        this.props.getAllUsers('All');
    }
    componentDidUpdate(prevProps, prevstate, snapshot) {
        if (prevProps.users !== this.props.users) {
            this.setState({
                usersRedux: this.props.users
            })
        }
    }
    deleteUser = (id) => {
        this.props.deletaUser(id)
    }
    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>address</th>
                            <th>Action</th>
                        </tr>
                        {this.state.usersRedux.map(users => {
                            return (
                                <tr >
                                    <td> {users.email}</td>
                                    <td>{users.firstName}</td>
                                    <td>{users.lastName}</td>
                                    <td>{users.address}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className=" btn-edit"
                                            onClick={() => { this.props.clickEditUser(users) }}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            onClick={() => { this.deleteUser(users.id) }}
                                            type="button"
                                            className=" btn-trash"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: (data) => dispatch(actions.getAllUser(data)),
        deletaUser: (id) => dispatch(actions.deletaUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);

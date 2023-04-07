import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./UserManage.scss";
import { connect } from "react-redux";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./modalUser";
import ModalEditUser from "./modalEditUser";
import { assign } from "lodash";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      dataEditUser: ""
    };
  }
  async componentDidMount() {
    await this.getAllUsersToHome();
  }
  getAllUsersToHome = async () => {
    let respone = await getAllUsers("All");
    if (respone && respone.data.errCode == 0) {
      this.setState({
        arrUser: respone.data.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  toggleEditUserModal = (data) => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
      dataEditUser: data
    });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.data.errCode !== 0) {
        alert(response.data.message);
      } else {
        await this.getAllUsersToHome();
        this.toggleEditUserModal();
      }
    } catch (e) {
      console.log(e);
    }
  };
  updateUser = async (data) => {
    try {
      let respone = await editUserService(data);
      if (respone && respone.data.errCode !== 0) {
        alert(respone.data.message)
      }
      else {
        await this.getAllUsersToHome();
        this.setState({
          isOpenModalEditUser: !this.state.isOpenModalEditUser,
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  deleteUser = async (user) => {
    try {
      let response = await deleteUserService(user.id);
      console.log(response);

      if (response && response.data.errCode !== 0) {
        alert(response.data.errMessage);
      } else {
        this.getAllUsersToHome();
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="users-container">
        {this.state.isOpenModalUser && (
          <ModalUser
            isOpen={this.state.isOpenModalUser}
            toggleUserModal={this.toggleUserModal}
            createNewUser={this.createNewUser}
          />
        )}
        {this.state.isOpenModalEditUser && (
          <ModalEditUser
            dataEditUser={this.state.dataEditUser}
            isOpen={this.state.isOpenModalUser}
            toggleUserModal={this.toggleEditUserModal}
            updateUser={this.updateUser}
          />
        )}
        <div className="title text-center">Manage user </div>
        <div className="mx-1">
          <button
            onClick={() => {
              this.handleAddNewUser();
            }}
            className="btn btn-primary px-3 mb-2"
          >
            <i className="fas fa-plus"></i> Add User
          </button>
        </div>
        <div className="user-table mt-5 mx-5">
          <table>
            <tbody>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>address</th>
                <th>Action</th>
              </tr>
              {this.state.arrUser.map((users, index) => {
                return (
                  <tr key={index}>
                    <td> {users.email}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.address}</td>
                    <td>
                      <button type="button" className=" btn-edit"
                        onClick={() => this.toggleEditUserModal(users)}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        className=" btn-trash"
                        onClick={() => this.deleteUser(users)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

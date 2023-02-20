import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.dataEditUser.id,
      firstName: this.props.dataEditUser.firstName,
      lastName: this.props.dataEditUser.lastName,
      address: this.props.dataEditUser.address,
    };
  }
  state = {};

  // componentDidMount() {
  //   let arrInput = [ "firstName", "lastName", "address"];
  //   for (let i = 0; i < arrInput.length; i++) {
  //       this.setState({})
  //       break;
  //   }
  // }
  toggle = () => {

    this.props.toggleUserModal();
  };
  hanleOnChange = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [ "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("missing parameter " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleAddUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid) {
      this.props.updateUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={true}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        centered
        // {...args}
      >
        <ModalHeader
          isOpen={true}
          toggle={() => {
            this.toggle();
          }}
        >
          Modal title
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label> Email</label>
              <input
                type="text"
                onChange={(event) => {
                  this.hanleOnChange(event, "email");
                }}
                defaultValue={this.props.dataEditUser.email}
                disabled
              />
            </div>
            <div className="input-container">
              <label> Password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.hanleOnChange(event, "password");
                }}
                defaultValue={"123456"}
                disabled
              />
            </div>
            <div className="input-container">
              <label> firstName</label>
              <input
                type="text"
                defaultValue={this.props.dataEditUser.firstName}
                onChange={(event) => {
                  this.hanleOnChange(event, "firstName");
                }}
              />
            </div>
            <div className="input-container">
              <label> lastName</label>
              <input
                type="text"
                onChange={(event) => {
                  this.hanleOnChange(event, "lastName");
                }
            }
            defaultValue={this.props.dataEditUser.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label> address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.hanleOnChange(event, "address");
                }}
                defaultValue={this.props.dataEditUser.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              // this.toggle();
              this.handleAddUser();
            }}
          >
            Save CHange
          </Button>{" "}
          <Button
            className="px-3"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

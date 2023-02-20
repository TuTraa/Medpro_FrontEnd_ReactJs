import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }
  state = {};

  componentDidMount() { }
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
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
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
      //call api
      this.props.createNewUser(this.state);
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
              />
            </div>
            <div className="input-container">
              <label> Password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.hanleOnChange(event, "password");
                }}
              />
            </div>
            <div className="input-container">
              <label> firstName</label>
              <input
                type="text"
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
                }}
              />
            </div>
            <div className="input-container max-width-input">
              <label> address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.hanleOnChange(event, "address");
                }}
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
            Add User
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

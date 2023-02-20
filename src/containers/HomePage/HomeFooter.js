import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home-footer container">
                <p>&copy; 2023 tutran.com <a href="#"> &#8594; click here &#8592; </a></p>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.user.isLoggedIn,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
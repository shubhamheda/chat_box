import React from 'react';
import {bindActionCreators} from 'redux';
import {serverLoginData, serverSignupData} from '../actions/chat_box_server_data'
import {connect} from 'react-redux';

class ChatServerComponent extends React.Component{
    render(){
        return (
          <div>
              <div className="content">
                  <div className="titleBlock">
                      <h1 className="titleHeading">Chat Box Server</h1>
                  </div>
                  <div className="columns">
                      <div className="column">

                      </div>
                  <button onClick={this.props.login}> Login </button>
                  <button onClick={this.props.signup}> SignUp </button>

                  <h1>{this.props.data.info}</h1>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.server_reducer
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({login: serverLoginData, signup: serverSignupData}, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatServerComponent);
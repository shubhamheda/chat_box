import React, { Component } from 'react';
import ChatServerComponent from "./component/chat_server_component";
import Home from './component/home';
import './css/chatbox.css';
import './css/bulma.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <div className="sidebar">
            <span className="active">CHAT BOX</span>
              <Link to="/">Home</Link>
              <Link to="/server/">Server</Link>
              <Link to={"/client/"}>Client</Link>
          </div>
        <div>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/server/"} component={ChatServerComponent} />
        </div>
        </div>
        </Router>
    );
  }
}

export default App;

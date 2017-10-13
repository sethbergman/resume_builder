import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import sendToErrorReporting from './sendToErrorReporting'; // eslint-disable-line
import logo from './logo.svg';
import './App.css';

let sendToErrorReporting = (error, info) => {
  console.log(error);
  console.log(info);
};

export class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, hasError: true }));
    sendToErrorReporting(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>;
    } else {
      return this.props.children;
    }
  }
}

export class Profile extends Component {
  onClick = () => {
    this.setState(state => {
      // throw new Error('Oh nooo!');
      return { ...state };
    });
  };

  render() {
    return <div onClick={this.onClick}>Name: {this.props.user.name}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: 'Seth' }
    };
  }

  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <MyErrorBoundary>
            <Profile user={this.state.user} />
            <button onClick={this.updateUser}>Update</button>
          </MyErrorBoundary>
        </p>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   )
  // }
}

export default App;

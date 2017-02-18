import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NumericInput} from "./NumericInput/Component.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <WelcomeMessage />
        </div>
          <Form />
      </div>
    );
  }
}

class WelcomeMessage extends Component {
    render() {
        return (
            <div className="Message">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Reacttt</h2>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            data: 'Initial Data'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState(e) {
        this.setState({data: e.target.value})
    }

    handleSubmit(component, event) {
        console.log(component);
        event.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <form className="form-style">
                    <FormContent onSubmit={this.handleSubmit} myDataProp={this.state.data} updateStateProp={this.updateState}/>
                </form>
            </div>
        );
    }
}
class FormContent extends React.Component {
    constructor() {
        super();

        this.state = {
            test: "testing!!!!"
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(e){
        this.setState({test: e.target.value})
    }

    render() {
        return (
            <div className="inner-div">
                <label htmlFor="name">Name:</label>
                <NumericInput defaultValue="149" decimalAllowed={true}/>
                <button className="submit-button" onClick={this.props.onSubmit.bind(null,this.state.test)} type="submit">Submit</button>
            </div>
        );
    }
}

export default App;


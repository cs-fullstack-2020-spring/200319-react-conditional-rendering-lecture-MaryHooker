import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>20-03-19 React Conditional Rendering Lecture</h1>
                <Login />
                <br />
                <SignUp />
            </div>
        );
    }
}

export default AppContainer;
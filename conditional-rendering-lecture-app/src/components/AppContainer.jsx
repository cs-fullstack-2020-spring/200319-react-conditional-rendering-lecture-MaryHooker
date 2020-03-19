import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            isSigningUp: false,
        }
    }

    updateIsLoggingIn = () => {
        // //sanity
        // console.log('Login button is clicked');

        this.setState(
            {
                isLoggingIn: true
            }
        )

        this.setState(
            {
                isSigningUp: false
            }
        )
    }

    updateIsSigningUp = () => {
        // //sanity
        // console.log('Signup button is clicked');

        this.setState(
            {
                isSigningUp: true
            }
        )

        this.setState(
        {
            isLoggingIn: false
        }
        )
    }

    render() {
        let userForm;

        if(this.state.isLoggingIn){
            //render the log in component
            userForm = <Login/>
        } else if(this.state.isSigningUp){
            //render the sign up
            userForm= <SignUp/>
        }

        return (
            <div>
                <h1>20-03-19 React Conditional Rendering Lecture</h1>
                <br/>
                <button onClick={this.updateIsLoggingIn} className='button'>Login</button>
                <br/>
                <br/>
                <button onClick={this.updateIsSigningUp} className='button'>Sign Up</button>
               <br/>

                <div className='userForm'>
                {userForm}
                </div>
               
               
                
            </div>
        );
    }
}

export default AppContainer;
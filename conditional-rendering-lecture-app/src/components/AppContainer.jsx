import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //CONDITIONAL RENDERING
            isLoggingIn: false,
            isSigningUp: false,
        }
    }

    //CONDITIONAL RENDERING
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

    //CONDITIONAL RENDERING
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
        //Conditional rendering of child components
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
                {/* conditional rendering on buttons */}
                <button onClick={this.updateIsLoggingIn} className='button'>Login</button>
                <br/>
                <br/>
                {/* conditional rendering on buttons */}
                <button onClick={this.updateIsSigningUp} className='button'>Sign Up</button>
               <br/>

               {/* CONDITIONAL RENDERING OF CHILD COMPONENTS */}
                <div className='userForm'>
                {userForm}
                </div>
               
               
                
            </div>
        );
    }
}

export default AppContainer;
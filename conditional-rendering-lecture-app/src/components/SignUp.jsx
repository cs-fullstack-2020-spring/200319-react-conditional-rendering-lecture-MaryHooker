import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: '',
            //HTML RENDERING
            hasBeenSubmitted: false,

        }
    }

    handleChange = (event) => {
        if (event.target.name === 'fullName') {
            this.setState(
                {
                    fullName: event.target.value
                }
            )
        } else if (event.target.name === 'userName') {
            this.setState(
                {
                    userName: event.target.value
                }
            )
        } else if (event.target.name === 'email') {
            this.setState(
                {
                    email: event.target.value
                }
            )
        } else if (event.target.name === 'password') {
            this.setState(
                {
            )
        }

    }

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state);
        //update state of has been submitted/HTML RENDERING/LOOK ABOVE RETURN
        this.setState(
            {
                hasBeenSubmitted: true
            }
        )
    }

    render() {
        //Will run if true and form has been submitted/if you want to send render something if it is false put !(bang) in front of this/CONDITIONAL HTML RENDERING
        if(this.state.hasBeenSubmitted){
            return(
                <div>
                    <h2>Thank you {this.state.fullName}!</h2>
                    <h1>You've been signed up!</h1>
                    
                </div>
            )
        }
        //ELSE IF hasBeenSubmitted is false/ render the text below
        return (
            <div>
                <form action="">
                    <fieldset className='border'>
                        <legend className='legend'>Sign Up</legend>

                        <div className='formGroup'>
                            <label htmlFor="fullName">Full Name: </label>
                            <input type="text" name='fullName' id='fullName' value={this.state.fullName} onChange={this.handleChange} className='input' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="userName">User Name: </label>
                            <input type="text" name='userName' id='userName' value={this.state.userName} onChange={this.handleChange} className='input' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name='email' id='email' value={this.state.email} onChange={this.handleChange} className='input' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} className='input' />
                        </div>

                        <button onClick={this.handleSubmission} className='button'>Sign Up</button>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SignUp;
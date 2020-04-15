import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userName: '',
            password: '',
            //CONDITIONAL HTML RENDERING
            hasLoggedIn: false,

        }
    }

    handleChange = (event) => {

        if (event.target.name === 'userName') {
            this.setState(
                {
                    userName: event.target.value
                }
            )
        } else if (event.target.name === 'password') {
            this.setState(
                {
                    password: event.target.value
                }
            )
        }

    }

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state);

        //update state of has been submitted/HTML RENDERING/LOOK ABOVE RETURN
        this.setState(
            {
                hasLoggedIn: true
            }
        )
    }

    render() {
        //Will run if true and form has been submitted/if you want to send render something if it is false put !(bang) in front of this/HTML CONDITIONAL RENDERING
        if(this.state.hasLoggedIn){
            return(
                <div>
                    
                    <h2>Welcome back {this.state.userName}!</h2>
                    <h1>You've been logged in...</h1>
                </div>
            )
        }

        return (
            <div>
                <form action="">
                    <fieldset className='border'>
                        <legend className='legend'>Login</legend>


                        <div className='formGroup'>
                            <label htmlFor="userName">User Name: </label>
                            <input type="text" name='userName' id='userName' value={this.state.userName} onChange={this.handleChange} className='input' />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} className='input' />
                        </div>

                        <button onClick={this.handleSubmission} className='button'>Login</button>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Login;
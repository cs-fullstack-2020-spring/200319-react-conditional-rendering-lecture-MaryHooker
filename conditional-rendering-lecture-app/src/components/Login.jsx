import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userName: '',
            password: '',

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
    }

    render() {
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
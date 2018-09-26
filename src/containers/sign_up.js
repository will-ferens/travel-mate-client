import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { history } from '../helpers/history'
import { AUTH_TOKEN } from '../constants/user_const'

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $username: String!, $password: String!) {
        signup( email: $email username: $username password: $password) {
            token
        }
    }
`

class SignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            username: '',
            password: ''
        }
        
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onUsernameChange = this.onUsernameChange.bind(this)

    }

    onEmailChange(event){
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event){
        this.setState({ password: event.target.value })
    }

    onUsernameChange(event){
        this.setState({ username: event.target.value })
    }

    render() {
        const { email, username, password } = this.state

        return (
            <section>
                <div>
                    <div>
                        <h2>Sign up</h2>
                    </div>
                    <form>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={this.onEmailChange}
                            placeholder="Email"
                            />
                        <label>Username</label>
                        <input
                            value={username}
                            onChange={this.onUsernameChange}
                            placeholder="Username"
                            />
                        <label>Password</label>
                        <input 
                            value={password}
                            onChange={this.onPasswordChange}
                            placeholder="Password"
                        />
                        <Mutation
                            mutation={SIGNUP_MUTATION}
                            variables={{ email, username, password }}
                            onCompleted={data => this._confirm(data)}
                        >
                            {mutation => (
                                <button onClick={mutation}>Submit</button>
                            )}
                        </Mutation>
                        <Link to="/signin"><button>Or sign in</button></Link>
                    </form>
                </div>
            </section>
        )
    }

    _confirm = async data => {
        const { token } = data.login
        this._saveUserData(token)
        history.push('/')
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default SignUp
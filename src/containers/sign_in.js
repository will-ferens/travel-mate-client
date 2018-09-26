import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { AUTH_TOKEN } from '../constants/user_const'

const SIGNIN_MUTATION = gql`
    mutation mutation {
        login(
            email: "will.ferens@gmail.com"
            password: "poop"
        ) {
            token
        }
    }
`

class SignIn extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password: ''
        }
        
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)


    }

    onEmailChange(event){
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event){
        this.setState({ password: event.target.value })
    }

    

    render() {
        const { email, password } = this.state

        return (
            <section>
                <div>
                    <div>
                        <h2>Sign in</h2>
                    </div>
                    <form>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={this.onEmailChange}
                            placeholder="Email"
                            />
                        <label>Password</label>
                        <input 
                            value={password}
                            onChange={this.onPasswordChange}
                            placeholder="Password"
                        />
                        <Mutation
                            mutation={SIGNIN_MUTATION}
                            variables={{ email, password }}
                            onCompleted={data => this._confirm(data)}
                        >
                            {mutation => (
                                <button onClick={mutation}>Submit</button>
                            )}
                        </Mutation>
                        <Link to="/signup"><button>Or sign up</button></Link>
                    </form>
                </div>
            </section>
        )
    }

    _confirm = async data => {
        const { token } = data.login
        this._saveUserData(token)

    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default SignIn
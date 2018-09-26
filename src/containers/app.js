import React, { Component } from 'react'

import {Route, Switch, Router } from 'react-router-dom'
import { history } from '../helpers/history'

import HomePage from '../components/home'
import SignIn from './sign_in'
import SignUp from './sign_up'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
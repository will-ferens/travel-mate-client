import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

import App from './containers/app'

import { BrowserRouter } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
    uri: "http://localhost:4000"
})

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>, 
    
    
    document.getElementById('root'))
registerServiceWorker()

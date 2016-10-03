import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import Root from './Root'

ReactDOM.render(
   <Root store={configureStore()}/>,
    document.getElementById('app')
);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import HomePage from './pages/Home.jsx';


class App extends Component {
    render() {
        return (
            <HomePage />
        )
    }
}

export default withRouter(App);

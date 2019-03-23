import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>, 
        document.getElementById('app')
    );
}

render(App);

if(module.hot) {
    module.hot.accept('./Components/App', () => {
        const NextApp = require('./Components/App').default;
        render(NextApp);
    });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


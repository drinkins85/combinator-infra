import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './blocks/App/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

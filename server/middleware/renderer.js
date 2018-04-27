import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore';
import { StaticRouter as Router } from 'react-router';

const store = configureStore();

import App from '../../src/blocks/App/App';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);

            return res.status(404).end();
        }
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>);

        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
};

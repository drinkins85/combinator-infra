import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as messagesActions from '../../actions/messages';
import Button from '../Button/Button';
import Message from '../Message/Message';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.messagesActions.getMessages();
    }

    renderIndex = () => {
        return (
            <React.Fragment>
                <h1>Hello, World</h1>
                <Button
                    text="Click me"
                    className="Button_type_round"
                    handleClick={() => this.props.messagesActions.addMessage('Hello, World')}
                    />
                <Message
                    messages={this.props.messages}
                    onClear={this.props.messagesActions.clearMessages}
                    />
            </React.Fragment>
        );
    };

    render404 = () => {
        return (
            <div className="page-not-found">
                <h1>404 Page not found</h1>
            </div>
        );
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        render={this.renderIndex}
                        />
                    <Route
                        path="*"
                        render={this.render404}
                        />
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        messagesActions: bindActionCreators(messagesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
    messagesActions: PropTypes.object,
    messages: PropTypes.arrayOf(PropTypes.string)
};

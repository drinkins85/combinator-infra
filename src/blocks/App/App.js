import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as messagesActions from '../../actions/messages';
import Button from '../Button/Button';
import Message from '../Message/Message';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.messagesActions.getMessages();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        render={() => (
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
                        )}
                    />
                    <Route
                        path="*"
                        render={() => {
                            return (
                                <div className="page-not-found">
                                    <h1>404 Page not found</h1>
                                </div>
                            );
                        }}
                    />
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        messagesActions: bindActionCreators(messagesActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

class Message extends React.Component {
    render() {
        const { messages } = this.props;

        return (
            <div className={`message ${messages.length > 0 ? 'message--visible' : ''}`} >
                <div className="message__close" onClick={this.props.onClear} />
                {
                    messages.map(message => {
                        return (
                            <div key={(uuid())}>{message}</div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Message;

Message.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string),
    onClear: PropTypes.func
};

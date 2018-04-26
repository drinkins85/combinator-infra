import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <button
                className={`Button ${this.props.className ? this.props.className : ''}`}
                onClick={this.props.handleClick}
                >
                {this.props.text}
            </button>
        );
    }
}

export default Button;

import React from 'react'
import './Message.css';

class Message extends React.Component {
    render(){
        return(
            <div className={`Message ${this.props.messages.length > 0 ? 'Message_visible' : ''}`} >
                <div className="Message-Close" onClick={this.props.onClear}></div>
                {
                    this.props.messages.map(function (message, index) {
                        return(
                            <div key={index}>{message}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Message;
import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'you',
    text: 'I like trains'
  },
  {
    senderId: 'other',
    text: 'I am a robot'
  },
  {
    senderId: 'you',
    text: 'I\'ve always known ken. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

class DisplayConversation extends Component {
  render() {
    return (
      <ul className="displayConversation">
        {DUMMY_DATA.map((message, index) => (
          <li key={index} className={`message ${message.senderId}`}>
            <p className="message-text one" >{message.text}</p>
          </li>
        ))}
        <li></li>
      </ul>
    )
  }
}
export default DisplayConversation;
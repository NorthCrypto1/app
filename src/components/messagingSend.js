import React from 'react';

export default function messagingSend() {
    return (
        <div className="messagingSend">
            <div id="send">
                <textarea className="sendInput"></textarea>
                <div className="submit">Send</div>
                <div className="emojiButton"><img src="./icons/icons_alien.png" className="icon-image" /> </div>
            </div>
        </div>
    )
}
import React from "react";

const Message = () => {
    return (
        <div className={`chat-bubble`}>
            <img className="chat-bubble_left" src="" alt="User Profile Picture" />
            <div className="chat-bubble_right">
                <p className="user-name">Testing User</p>
                <p className="user-message">
                    Tesing Message
                </p>
            </div>
        </div>
    );
};

export default Message;
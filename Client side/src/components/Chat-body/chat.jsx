import React from "react"
import "./chat.scss"
import Send from "./send.jsx"
import Receive from "./receive.jsx"

function chat() {
    return (
        <div className="chat-body">
            <div className="d-flex flex-column chat-box">
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Receive message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Receive message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Receive message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Receive message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Receive message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
                <div className="message-box">
                    <Receive message="Hello" />
                </div>
                <div className="message-box">
                    <Send message="Hello" />
                </div>
            </div>
            <div className="type">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Type Your message"></textarea>
            </div>
        </div>
    )
}

export default chat

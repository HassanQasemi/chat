import React from "react";

export default function ChatMessage(props) {
  const typeClass = props.isLeft ? "chat chat-left" : "chat chat-right";
  return (
    <div className={typeClass}>
      <div className="chat-avatar">
        <a
          className="avatar avatar-online"
          data-toggle="tooltip"
          href="#"
          data-placement="right"
          title=""
          data-original-title="June Lane"
        >
          <img src={props.avators} alt="..." />
          <i></i>
        </a>
      </div>
      <div className="chat-body">
        <div className="chat-content">
          <p>{props.message}</p>

          <time className="chat-time" dateTime={props.time}>
            {props.time}
          </time>
        </div>
      </div>
    </div>
  );
}

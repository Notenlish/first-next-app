import { useState } from "react";
import styles from "../page.module.css";

export default function ChatMenu(props) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(e) {
    props.onMessageSend(inputText);
    setInputText("");
  }

  return (
    <div className={styles.chatMenu}>
      <div className={styles.chatMessagesContainer}>
        {/* .map function also provides index of that particular element but I can't use
        that since my lists will change over time */}
        {props.chat.map((message) => (
          <p key={message.id} className={styles.chatMessage}>
            {message.content}
          </p>
        ))}
      </div>
      <div className={styles.chatMessageButtonContainer}>
        <input
          className={styles.chatMessageInput}
          type="text"
          placeholder="Enter Your Message Here"
          value={inputText}
          onChange={handleInputChange}>
          {/* its value is equal to inputText in memory,
          inputText is updated when the text is changed */}
        </input>
        <button
          className={`${styles.chatMessageButton} ${props.buttonState}`}
          onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  );
}

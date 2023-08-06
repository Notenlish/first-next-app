"use client";

import { useState } from "react";
import ChatSidebar from "../components/chatSidebar";
import ChatMenu from "../components/chatMenu";

import styles from "../page.module.css";

export default function Home() {
  const [chats, setChats] = useState([{ title: "testTitle" }]);
  const [currentChat, setCurrentChat] = useState([
    { id: 0, content: "Hello there! How can I assist you today?" },
  ]);
  const [buttonState, setButtonState] = useState(styles.activeButton);

  const possibleReplyMessages = [
    "That's interesting! Tell me more about it.",
    "I'm glad you're finding this helpful!",
    "I understand. How can I assist you further?",
    "I'm sorry to hear that. Is there anything I can do to help?",
    "Great! Do you have any other questions?",
    "I'm not sure about that. Let me find the information for you.",
    "Thanks for sharing! Is there anything else on your mind?",
    "I see. Can you provide more details about your issue?",
    "Absolutely! What else would you like to know?",
    "That sounds like a good plan. Anything else you'd like to add?",
    "I appreciate your feedback. Let me know if you need anything else.",
    "That's a common concern. Let me explain how we address it.",
    "I can see why you feel that way. Let's work together to find a solution.",
    "I'm thrilled to hear that you're enjoying our service!",
    "I'm sorry, I don't have the answer right now. Let me get back to you.",
  ];

  function HandleSendMessage(message) {
    setButtonState(styles.waitButton);
    let lastMessage = currentChat[currentChat.length - 1];
    const humanMsg = { id: lastMessage.id + 1, content: message };
    const updatedChat = [...currentChat, humanMsg];

    function addBotMsg(updatedChat) {
      setButtonState(styles.activeButton);
      let lastMessage = updatedChat[updatedChat.length - 1];
      let randomIndex = Math.ceil(Math.random() * possibleReplyMessages.length - 1);
      setCurrentChat([
        ...updatedChat,
        {
          id: lastMessage.id + 1,
          content: possibleReplyMessages[randomIndex],
        },
      ]); // Unpack the old array and add another message
      // We have to do this like that because state updates are async in react
      // Therefore, I can only do 1 state update per function
    }
    setTimeout(addBotMsg(updatedChat), 1000);
  }

  return (
    <main className={styles.chatApp}>
      <ChatSidebar chats={chats} />
      <ChatMenu onMessageSend={HandleSendMessage} buttonState={buttonState} chat={currentChat} />
    </main>
  );
}

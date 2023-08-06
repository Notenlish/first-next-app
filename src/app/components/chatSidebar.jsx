import styles from "../page.module.css";

export default function ChatSidebar(props) {
  return (
    <div className={styles.chatSideBar}>
      {/* How can I just give an Integer id for key property?*/}
      {props.chats.map((chat) => (
        <div key={chat.title} className={styles.chatBar}>
          {chat.title}
        </div>
      ))}
    </div>
  );
}

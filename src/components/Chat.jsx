import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");

  function handleSendLastChat() {
    setTimeout(() => {
      alert("채팅 보내는중....: " + text);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSendLastChat}>Send</button>
    </>
  );
}

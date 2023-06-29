import React, { useState } from "react";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([
    { id: 1, text: "react를 배워봅시다" },
    { id: 2, text: "useState를 배워봅시다" },
    { id: 3, text: "자바스크립트를 배워봅시다" },
  ]);
  const [text, setText] = useState("");
  const onClick = () => {
    const newMemo = {
      id: memos.length + 1,
      text,
    };
    setMemos([...memos, newMemo]);
    setText("");
  };
  return (
    <div className="template">
      <div className="insert-zone">
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={onClick}>추가하기</button>
      </div>
      <h1 className="title-zone">Todo List</h1>
      <div className="list-zone">
        {memos.map((memo) => {
          return (
            <div className="list" key={memo.id}>
              {memo.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

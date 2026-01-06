import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTodo(trimmed);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo" className="todo-label">
        Add a new to-do
      </label>
      <div className="todo-form-row">
        <input
          autoFocus
          id="new-todo"
          className="todo-input"
          type="text"
          placeholder="Type your to-do..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="todo-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;

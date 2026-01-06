import React from "react";

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className={todo.completed ? "todo-item completed" : "todo-item"}>
      <div className="todo-item-main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className="todo-item-text">{todo.text}</span>
      </div>
      <div className="todo-actions">
        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

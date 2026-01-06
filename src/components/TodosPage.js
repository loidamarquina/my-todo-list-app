import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Filters from "./Filters";

function TodosPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish React project", completed: false },
    { id: 2, text: "Study for exams", completed: true },
    { id: 3, text: "Go for a walk", completed: false }
  ]);

  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function handleToggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleChangeFilter(nextFilter) {
    setFilter(nextFilter);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <section className="todos-page">
      <h1 className="page-title">My To-Do List</h1>
      <div className="todo-layout">
        <div className="todo-left-panel">
          <TodoForm onAddTodo={handleAddTodo} />
          <Filters activeFilter={filter} onChangeFilter={handleChangeFilter} />
        </div>

        <div className="todo-right-panel">
  <h2 className="panel-title">
    Your To-Dos <span className="count">({filteredTodos.length})</span>
  </h2>

  <TodoList
    todos={filteredTodos}
    onToggleTodo={handleToggleTodo}
    onDeleteTodo={handleDeleteTodo}
  />
</div>
      </div>
    </section>
  );
}

export default TodosPage;

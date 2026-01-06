import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodosPage from "./components/TodosPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <HashRouter>
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
    </HashRouter>
  );
}

export default App;

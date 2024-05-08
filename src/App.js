import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListBooksContainer from "./Books/ListBooksContainer";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import BookDetail from "./Books/BookDetail";

function App() {
  return (
    <main className="App">
      <h1 className="title">Bookshop</h1>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListBooksContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;

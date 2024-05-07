import React from "react";
import "./App.css";
import ListBooksContainer from "./Books/ListBooksContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetail from "./Books/BookDetail";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <h1>Book Store</h1>
      <div className="App-layout">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListBooksContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

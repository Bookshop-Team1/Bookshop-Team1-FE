import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ListBooksContainer from "./Books/ListBooksContainer";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import BookDetail from "./Books/BookDetail";
import { BOOKS_ENDPOINT, LOAD_BOOKS_ENDPOINT, LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "./constants";
import PrivateRoute from "./PrivateRoutes";
import Page404 from "./404/NotFound";
import LoadBooks from "./Books/LoadBooks";

function App() {
  return (
    <main className="App">
      <h1 className="title">Bookshop</h1>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path={BOOKS_ENDPOINT} element={<ListBooksContainer />} />
            <Route path={LOGIN_ENDPOINT} element={<Login />} />
            <Route path={SIGNUP_ENDPOINT} element={<SignUp />} />
            <Route path={LOAD_BOOKS_ENDPOINT} element={<LoadBooks />} />
            <Route path={`${BOOKS_ENDPOINT}/:id`} element={<BookDetail />} />
            <Route exact path="/" element={<Navigate to={BOOKS_ENDPOINT} replace />} />
            <Route path="*" element={<PrivateRoute />}>
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;

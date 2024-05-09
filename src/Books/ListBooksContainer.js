import React, { useEffect, useState } from "react";
import BookModel from "./BookModel";
import BooksTable from "./BooksTable";

function ListBooksContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookModel.fetchAll().then((response) => {
      // eslint-disable-next-line no-console
      console.log("response", response);
      setBooks(response?.data);
    });
  }, []);

  return <BooksTable books={books} />;
}

export default ListBooksContainer;

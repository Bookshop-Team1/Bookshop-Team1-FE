import React, { useEffect, useState } from "react";
import BookModel from "./BookModel";
import BooksTable from "./BooksTable";

function ListBooksContainer() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BookModel.fetchAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div>
      <BooksTable books={books} />
    </div>
  );
}

export default ListBooksContainer;

import React, { useEffect, useState } from "react";
import BooksTable from "./BooksTable";
import baseApi from "../BaseApi";

function ListBooksContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await baseApi.get("/books");
      // eslint-disable-next-line no-console
      console.log("response", response);
      setBooks(response?.data?.data);
    }
    fetchData();
  }, []);

  return <BooksTable books={books} />;
}

export default ListBooksContainer;

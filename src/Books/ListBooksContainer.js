import React from "react";
// import BookModel from "./BookModel";
import BooksTable from "./BooksTable";

const books = {
  status: "OK",
  data: [
    {
      id: 1,
      name: "book1",
      authorName: "author1",
      price: {
        currency: "INR",
        amount: 100,
      },
      bookCount: 100,
    },
    {
      id: 2,
      name: "book2",
      authorName: "author2",
      price: {
        currency: "INR",
        amount: 150,
      },
      bookCount: 120,
    },
    {
      id: 3,
      name: "book3",
      authorName: "author3",
      price: {
        currency: "INR",
        amount: 109,
      },
      bookCount: 0,
    },
  ],
};

function ListBooksContainer() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   BookModel.fetchAll().then((books) => {
  //     setBooks(books);
  //   });
  // }, []);

  return (
    <div>
      <BooksTable books={books.data} />
    </div>
  );
}

export default ListBooksContainer;

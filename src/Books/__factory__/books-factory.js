export default function booksFactory() {
  return {
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
}

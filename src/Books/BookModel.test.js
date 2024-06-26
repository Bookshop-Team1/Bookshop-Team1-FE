import BookModel from "./BookModel";
import booksFactory from "./__factory__/books-factory";
import axios from "axios";

jest.mock("axios");

describe("BookModel", () => {
  test("should fetch all books from api", async () => {
    axios.get = jest.fn().mockResolvedValue(booksFactory());
    const books = await BookModel.fetchAll();
    const url = "http://localhost:8080/books";
    const headers = { auth: { password: "foobar", username: "foo@test.com" } };
    expect(axios.get).toHaveBeenCalledWith(url, headers);
    expect(books).toHaveLength(3);
  });
});

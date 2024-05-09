import React from "react";
import { render } from "@testing-library/react";
import BooksTable from "./BooksTable";
import booksFactory from "./__factory__/books-factory";
import { MemoryRouter } from "react-router-dom";

describe("BooksTable", () => {
  test("should display only headers when there are no rows", function () {
    const { getByText } = render(
      <MemoryRouter>
        <BooksTable books={[]} />
      </MemoryRouter>,
    );

    expect(getByText("Name")).toBeTruthy();
    expect(getByText("Author Name")).toBeTruthy();
    expect(getByText("Price")).toBeTruthy();
    expect(getByText("Action")).toBeTruthy();
  });

  test("should display single book when there is a book", function () {
    const { getByText } = render(
      <MemoryRouter>
        <BooksTable books={[booksFactory().data[0]]} />
      </MemoryRouter>,
    );

    expect(getByText("book1")).toBeTruthy();
    expect(getByText("author1")).toBeTruthy();
    expect(getByText("100 INR")).toBeTruthy();
  });

  test("should display multiple row when there is a book", function () {
    const { getByText } = render(
      <MemoryRouter>
        <BooksTable books={booksFactory().data} />
      </MemoryRouter>,
    );

    expect(getByText("book1")).toBeTruthy();
    expect(getByText("book2")).toBeTruthy();
  });
});

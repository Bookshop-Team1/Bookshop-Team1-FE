import React from "react";
import { render, waitFor } from "@testing-library/react";
import ListBooksContainer from "./ListBooksContainer";
import booksFactory from "./__factory__/books-factory";
import { MemoryRouter } from "react-router-dom";
import baseApi from "../BaseApi";

describe("ListBooks", () => {
  beforeEach(() => {
    baseApi.get = jest.fn().mockResolvedValue({ data: booksFactory() });
  });

  test("should fetch the books", async function () {
    const { getByText } = render(
      <MemoryRouter>
        <ListBooksContainer />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(baseApi.get).toHaveBeenCalled();
      expect(getByText("book1")).toBeInTheDocument();
    });
  });
});

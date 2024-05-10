import React from "react";
import { render, waitFor } from "@testing-library/react";
import booksFactory from "./__factory__/books-factory";
import { MemoryRouter } from "react-router-dom";
import baseApi from "../BaseApi";
import BookDetailsContainer from "./BookDetailsContainer";

describe("BookDetails", () => {
  beforeEach(() => {
    baseApi.get = jest.fn().mockResolvedValue({ data: booksFactory() });
  });

  test("should fetch the books", async function () {
    const { getByText } = render(
      <MemoryRouter>
        <BookDetailsContainer />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(baseApi.get).toHaveBeenCalled();
      expect(getByText("book1")).toBeInTheDocument();
    });
  });
});

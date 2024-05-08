import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CSVUploader from "./CSVUploader";

describe("CSVUploader component", () => {
  test("renders without crashing", () => {
    render(<CSVUploader />);
  });

  test("displays file name when a file is selected", () => {
    render(<CSVUploader />);
    const fileInput = screen.getByText("Upload CSV").previousSibling;

    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["dummy content"], "test.csv", { type: "text/csv" }),
          new File(["dummy content"], "test2.csv", { type: "text/csv" }),
        ],
      },
    });

    expect(screen.getByText("test.csv, +1")).toBeInTheDocument();
  });

  test("should handle the case of not choosing any csv", () => {
    render(<CSVUploader />);
    const fileInput = screen.getByText("Upload CSV").previousSibling;

    fireEvent.change(fileInput, {
      target: {
        files: [],
      },
    });

    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["dummy content"], "test.csv", { type: "text/csv" }),
          new File(["dummy content"], "test2.csv", { type: "text/csv" }),
        ],
      },
    });

    expect(screen.getByText("test.csv, +1")).toBeInTheDocument();
  });

  test("clears selected file when remove button is clicked", () => {
    render(<CSVUploader />);
    const fileInput = screen.getByText("Upload CSV").previousSibling;

    fireEvent.change(fileInput, {
      target: {
        files: [new File(["dummy content"], "test.csv", { type: "text/csv" })],
      },
    });

    const removeButton = screen.getByTestId("testRemoveCSV");
    fireEvent.click(removeButton);

    expect(screen.queryByText("test.csv")).not.toBeInTheDocument();
  });

  test("clicks file input when Upload CSV button is clicked", () => {
    render(<CSVUploader />);
    const fileInput = screen.getByText("Upload CSV").previousSibling;

    const clickSpy = jest.spyOn(fileInput, "click");
    fireEvent.click(screen.getByText("Upload CSV"));

    expect(clickSpy).toHaveBeenCalled();
  });
});

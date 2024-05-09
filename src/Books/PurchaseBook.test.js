import { act, fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import PurchaseBook from "./PurchaseBook";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <PurchaseBook />
    </MemoryRouter>,
  );
};

const numberFields = [
  {
    name: "Pincode",
    value: 600001,
  },
  {
    name: "Phone Number",
    value: 9090909090,
  },
];

describe("PurchaseBook", () => {
  test("should show an email field", async () => {
    renderComponent();

    const label = screen.getByLabelText(/email/i);
    const input = screen.getByRole("textbox", { name: /email/i });

    await user.click(input);
    await user.keyboard("abc@xyz.com");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("abc@xyz.com");
  });

  test("should show an address field", async () => {
    renderComponent();

    const label = screen.getByLabelText(/address/i);
    const input = screen.getByPlaceholderText(/enter your address/i);

    await user.click(input);
    await user.keyboard("10 - B, 1st street, 2nd Cross cut road, chennai.");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("10 - B, 1st street, 2nd Cross cut road, chennai.");
  });

  test("should show a country field", async () => {
    renderComponent();

    const label = screen.getByLabelText(/country/i);
    const input = screen.getByRole("combobox", { name: /country/i });

    await act(() => {
      fireEvent.change(input, { target: { value: "India" } });
    });

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("India");
  });

  test("should show two number fields", async () => {
    renderComponent();

    for (let field of numberFields) {
      const label = screen.getByLabelText(field.name);
      const input = screen.getByRole("spinbutton", { name: field.name });

      await act(() => {
        fireEvent.change(input, { target: { value: field.value } });
      });

      expect(label).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(field.value);
    }
  });

  test("should show view order summary button", async () => {
    renderComponent();

    const button = screen.getByRole("button", { name: /view order summary/i });

    expect(button).toBeInTheDocument();
  });
});

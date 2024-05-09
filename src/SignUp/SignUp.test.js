import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SignUp from "./SignUp";
import { LOGIN_ENDPOINT } from "../constants";
import { act } from "react";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>,
  );
};

const textFields = [
  { name: "Name", value: "john" },
  { name: "Username", value: "johnDoe" },
];

describe("SignUp", () => {
  test("should show two text fields", async () => {
    renderComponent();

    for (let field of textFields) {
      const label = screen.getByLabelText(field.name);
      const input = screen.getByRole("textbox", { name: field.name });

      await user.click(input);
      await user.keyboard(field.value);

      expect(label).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(field.value);
    }
  });

  test("should show one number field", async () => {
    renderComponent();

    const label = screen.getByLabelText(/phone number/i);
    const input = screen.getByRole("spinbutton");

    await act(() => {
      fireEvent.change(input, { target: { value: 9090909090 } });
    });

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(9090909090);
  });

  test("should show one email field", async () => {
    renderComponent();

    const label = screen.getByLabelText(/email/i);
    const input = screen.getByRole("textbox", { name: /email/i });

    await user.click(input);
    await user.keyboard("john@e.com");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("john@e.com");
  });

  test("should show two password fields", async () => {
    renderComponent();

    const passwordfields = screen.getAllByPlaceholderText(/password/i);

    expect(passwordfields).toHaveLength(2);

    for (let password of passwordfields) {
      await user.click(password);
      await user.keyboard("John#12345");

      expect(password).toBeInTheDocument();
      expect(password).toHaveValue("John#12345");
    }
  });

  test("should show password toggle button", () => {
    renderComponent();

    const toggle = screen.getByRole("img", { name: /show password/i });

    expect(toggle).toBeInTheDocument();
  });

  test("should show confirm password toggle button", () => {
    renderComponent();

    const toggle = screen.getByRole("img", { name: /show confirm password/i });

    expect(toggle).toBeInTheDocument();
  });

  test("should show signup button", () => {
    renderComponent();

    const button = screen.getByRole("button", { name: /sign up/i });

    expect(button).toBeInTheDocument();
  });

  test("should show login link", () => {
    renderComponent();

    const link = screen.getByRole("link", { name: /login/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", LOGIN_ENDPOINT);
  });
});

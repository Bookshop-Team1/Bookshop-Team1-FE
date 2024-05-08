import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SignUp from "./SignUp";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>,
  );
};

const normalFields = [
  { name: "Name", value: "john" },
  { name: "Username", value: "johnDoe" },
  { name: "Phone Number", value: "9988776655" },
  { name: "Email", value: "john@e.com" },
];

describe("SignUp", () => {
  it("should show four normal fields", async () => {
    renderComponent();

    for (let field of normalFields) {
      const label = screen.getByLabelText(field.name);
      const input = screen.getByRole("textbox", { name: field.name });

      await user.click(input);
      await user.keyboard(field.value);

      expect(label).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(field.value);
    }
  });

  it("should show two password fields", () => {
    renderComponent();

    const passwordfields = screen.getAllByPlaceholderText(/Password/i);

    expect(passwordfields).toHaveLength(2);
    expect(passwordfields[0]).toBeInTheDocument();
    expect(passwordfields[1]).toBeInTheDocument();
  });

  it("should show password toggle button", () => {
    renderComponent();

    const toggle = screen.getByRole("img", { name: /show password/i });

    expect(toggle).toBeInTheDocument();
  });

  it("should show confirm password toggle button", () => {
    renderComponent();

    const toggle = screen.getByRole("img", { name: /show confirm password/i });

    expect(toggle).toBeInTheDocument();
  });

  it("should show signup button", () => {
    renderComponent();

    const button = screen.getByRole("button", { name: /sign up/i });

    expect(button).toBeInTheDocument();
  });

  it("should show login link", () => {
    renderComponent();

    const link = screen.getByRole("link", { name: /login/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/login");
  });
});

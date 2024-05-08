import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );
};

describe("login", () => {
  it("should show email input", async () => {
    renderComponent();

    const label = screen.getByLabelText(/email/i);
    const input = screen.getByRole("textbox", { name: /email/i });

    await user.click(input);
    await user.keyboard("abc@xyz.com");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("abc@xyz.com");
  });

  it("should show password input", async () => {
    renderComponent();

    const label = screen.getByLabelText(/password/i);
    const input = screen.getByPlaceholderText(/password/i);

    await user.click(input);
    await user.keyboard("password123");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("password123");
  });

  it("should show password toggle button", () => {
    renderComponent();

    const toggle = screen.getByRole("img", { name: /show password/i });

    expect(toggle).toBeInTheDocument();
  });

  it("should show login button", () => {
    renderComponent();

    const button = screen.getByRole("button", { name: /login/i });

    expect(button).toBeInTheDocument();
  });

  it("should show signup link", () => {
    renderComponent();

    const link = screen.getByRole("link", { name: /sign up/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/sign-up");
  });
});

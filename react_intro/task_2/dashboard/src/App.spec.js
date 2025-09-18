import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App with form elements", () => {
    render(<App />);

    // Title
    const titleElement = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
    expect(titleElement).toBeInTheDocument();

    // Body text
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();

    // Footer
    const footerText = screen.getByText(/copyright/i);
    expect(footerText).toBeInTheDocument();

    // Logo
    const imgElement = screen.getByRole("img", { name: /holberton logo/i });
    expect(imgElement).toBeInTheDocument();

    // ✅ 2 input fields (email + password)
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const allInputs = screen.getAllByRole("textbox");
    expect(allInputs.length).toBe(2); // email + password

    // ✅ 2 label elements (Email + Password)
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    // ✅ Button with text "Ok"
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
});

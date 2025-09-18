import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

test("renders notifications title", () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
});

test("renders close button", () => {
    render(<Notifications />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
});

test("renders 3 notifications", () => {
    render(<Notifications />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
});

test("close button click logs message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
});

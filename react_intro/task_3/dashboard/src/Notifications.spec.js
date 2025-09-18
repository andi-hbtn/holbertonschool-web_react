import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

test("renders notifications title (case-insensitive)", () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
});

test("renders close button (case-insensitive)", () => {
    render(<Notifications />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
});

test("renders 3 notification items", () => {
    render(<Notifications />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
});

test("clicking close button logs to console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
});

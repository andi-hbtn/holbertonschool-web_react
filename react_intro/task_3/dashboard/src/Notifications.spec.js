import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "./utils";

// Mock getLatestNotification to return consistent HTML
jest.mock("./utils", () => ({
    getLatestNotification: jest.fn(() => "<li data-priority='urgent'>Urgent notification</li>")
}));

describe("Notifications component", () => {
    test("renders the notifications title", () => {
        render(<Notifications />);
        const title = screen.getByText(/here is the list of notifications/i);
        expect(title).toBeInTheDocument();
    });

    test("renders the close button", () => {
        render(<Notifications />);
        const closeButton = screen.getByRole("button", { name: /close/i });
        expect(closeButton).toBeInTheDocument();
    });

    test("renders 3 notifications in the list", () => {
        render(<Notifications />);
        const notifications = screen.getAllByRole("listitem");
        expect(notifications.length).toBe(3);
        expect(screen.getByText(/new course available/i)).toBeInTheDocument();
        expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
        expect(screen.getByText(/urgent notification/i)).toBeInTheDocument();
    });

    test("clicking close button logs a message to console", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<Notifications />);
        const closeButton = screen.getByRole("button", { name: /close/i });
        fireEvent.click(closeButton);
        expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
        consoleSpy.mockRestore();
    });
});

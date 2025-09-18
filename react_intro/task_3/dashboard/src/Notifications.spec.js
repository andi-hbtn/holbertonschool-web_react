import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

test("renders title, list, and button", () => {
    render(<Notifications />);

    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);

    const button = screen.getByRole("button", { name: /close/i });
    expect(button).toBeInTheDocument();

    const consoleSpy = jest.spyOn(console, "log");
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
});

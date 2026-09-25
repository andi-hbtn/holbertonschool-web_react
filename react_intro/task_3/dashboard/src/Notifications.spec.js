import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
    test("renders the notifications title", () => {
        render(<Notifications />);

        expect(
            screen.getByText(/here is the list of notifications/i)
        ).toBeInTheDocument();
    });

    test("renders a close button", () => {
        render(<Notifications />);

        expect(
            screen.getByRole("button", { name: /close/i })
        ).toBeInTheDocument();
    });

    test("renders 3 list items", () => {
        render(<Notifications />);

        expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });

    test("clicking the close button logs to console", () => {
        const logSpy = jest
            .spyOn(console, "log")
            .mockImplementation(() => { });

        render(<Notifications />);

        fireEvent.click(
            screen.getByRole("button", { name: /close/i })
        );

        expect(logSpy).toHaveBeenCalledWith(
            "Close button has been clicked"
        );

        logSpy.mockRestore();
    });
});
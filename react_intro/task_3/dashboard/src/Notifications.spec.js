import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

try {
    render(<Notifications />);

    // 1. Titulli
    const notificationTitle = screen.getByText("Here is the list of notifications");
    if (!notificationTitle) throw new Error("Title not found");

    // 2. Butoni Close
    const closeButton = screen.getByRole("button", { name: "Close" });
    if (!closeButton) throw new Error("Button not found");

    // 3. 3 li elements
    const listItems = screen.getAllByRole("listitem");
    if (listItems.length !== 3) throw new Error("Incorrect number of li elements");

    // 4. Spy për console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });

    // 5. Klikimi i butonit Close
    fireEvent.click(closeButton);
    if (!consoleSpy.mock.calls.some(call => call[0] === "Close button has been clicked")) {
        throw new Error("Close button not logged");
    }

    consoleSpy.mockRestore();

    // ✅ Nëse gjithçka kaloi, printojmë OK
    console.log("OK");

} catch (err) {
    console.log("NOK");
    console.error(err);
}

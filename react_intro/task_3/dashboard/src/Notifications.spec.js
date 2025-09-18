import { render, screen,fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

test("Notifications.jsx test", () => {
    render(<Notifications />);
    const notificationTitle = screen.getByText(/Here is the list of notifications/i);
    expect(notificationTitle).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3)

    // 1. Krijojmë një spy për console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    // 2. Marrim butonin sipas aria-label="Close"
    const closeButton = screen.getByRole('button', { name: "Close" });

    //Simulojme nje klikim te butonit
    fireEvent.click(closeButton);

    // 3. Verifikojmë që console.log është thirrur me tekstin e duhur
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    // 4. Pastrimi i spy për të mos ndikuar testet e tjera
    consoleSpy.mockRestore();

});
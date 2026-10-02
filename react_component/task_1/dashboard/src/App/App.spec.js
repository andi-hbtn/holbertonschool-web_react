describe('App Component', () => {
    it('Logout function gets called once', async () => {
        const logOut = jest.fn();

        render(<App logOut={logOut} />);

        await userEvent.keyboard('{Control>}h{/Control}');

        expect(logOut).toHaveBeenCalledTimes(1);
    });

    it('Alert function is called', async () => {
        const alertSpy = jest
            .spyOn(window, 'alert')
            .mockImplementation(() => { });

        render(<App />);

        await userEvent.keyboard('{Control>}h{/Control}');

        expect(alertSpy).toHaveBeenCalledWith('Logging you out');

        alertSpy.mockRestore();
    });
});
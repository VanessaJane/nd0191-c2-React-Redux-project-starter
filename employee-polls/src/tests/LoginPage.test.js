import { fireEvent, render, screen } from "@testing-library/react";
import store from "../app/store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "../components/LoginPage";

describe("LoginPage", () => {
  it("should render the login page correctly", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );

    const element = screen.getByText(/log in/i);
    expect(element).toBeInTheDocument();

    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "app_logo.jpg");
  });

  it("should fire an alert if password is not correct.", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );

    var usernameInput = component.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: "mtsamis" } });
    var passwordInput = component.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "xyz" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);

    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

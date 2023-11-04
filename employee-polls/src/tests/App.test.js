import { render, screen } from "@testing-library/react";
import App from "../components/App";
import store from "../app/store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("App", () => {
  test("should render the login page onload", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const element = screen.getByText(/log in/i);
    expect(element).toBeInTheDocument();
  });
});

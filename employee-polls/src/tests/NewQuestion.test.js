import { render, screen } from "@testing-library/react";
import store from "../app/store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import NewQuestion from "../components/NewQuestion";

describe("NewQuestion", () => {
  it("should render the new question page onload", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Would You Rather/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Your Own Poll/i)).toBeInTheDocument();
    expect(screen.getByText(/First Option/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Option/i)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

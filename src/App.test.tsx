import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";

it("renders Films tab", () => {
  render(<App />);
  // const linkElement = screen.getByText(/Films/i);
  // console.log(screen);
  const buttonLabel = screen.getAllByLabelText(/Films/i);
  expect(buttonLabel).toBeInTheDocument();
});

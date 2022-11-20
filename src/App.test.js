import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const khetElement = screen.getByText(/Khet/i);
  expect(khetElement).toBeInTheDocument();
});

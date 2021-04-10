import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const h1 = screen.getByText(/Can we Arb?/i);
  expect(h1).toBeInTheDocument();
});

test("BetInputs shows on load", () => {
  render(<App />);
  const inputFav = screen.queryByText("Favorite:");
  expect(inputFav).toBeInTheDocument();
});

test("ArbOutputs doesnt show by default", () => {
  render(<App />);
  const happyFace = screen.queryByText(/🤑/i);
  expect(happyFace).not.toBeInTheDocument();
  const sadFace = screen.queryByText(/😭/i);
  expect(sadFace).not.toBeInTheDocument();
});

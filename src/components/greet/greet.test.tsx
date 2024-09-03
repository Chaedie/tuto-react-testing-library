import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly", () => {
  render(<Greet></Greet>);
  const textElement = screen.getByText(/Hello/);
  expect(textElement).toBeInTheDocument();
});

// TDD

/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */
describe("Greet", () => {
  test("Greet renders correctly (TDD)", () => {
    render(<Greet></Greet>);
    // const textElement = screen.getByText(/Hello/);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("Greet renders with a name", () => {
    render(<Greet name={"Chaedong"} />);
    const textElement = screen.getByText("Hello Chaedong");
    expect(textElement).toBeInTheDocument();
  });
});

test("Greet renders with a name", () => {
  render(<Greet name={"Chaedong"} />);
  const textElement = screen.getByText("Hello Chaedong");
  expect(textElement).toBeInTheDocument();
});

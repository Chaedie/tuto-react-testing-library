import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("application.test", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", { level: 1, name: "Job application form" });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2, name: "Section 1" });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText("I agree to the terms and conditions", { selector: "input" });
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});

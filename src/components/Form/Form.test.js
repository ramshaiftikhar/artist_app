import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form.js";

afterEach(cleanup);

describe("Form tests", () => {
  test("Renders Form component", () => {
    render(<Form />);
  });

  test("Value entered correctly in search box", async () => {
    render(<Form />);
    await userEvent.type(screen.getByRole("textbox"), "JavaScript");
    expect(screen.getByDisplayValue("JavaScript")).toBeInTheDocument();
  });
});

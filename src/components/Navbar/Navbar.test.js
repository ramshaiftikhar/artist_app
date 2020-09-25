import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("Navbar tests", () => {
  test("Renders Navbar component", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });

  test("Text renders properly", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("BandsInTown")).toBeInTheDocument();
  });
});

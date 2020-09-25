import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import Events from "./Events.js";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import TEST_EVENTS from "./Events.testdata";

afterEach(cleanup);

const API_ID = "codingbootcamp";
const artistWithoutEvents = "pinkfloyd";
const TEST_URL_ROUTE_NO_EVENTS = `https://rest.bandsintown.com/artists/${artistWithoutEvents}/events/?app_id=${API_ID}`;
const artistWithEvents = "joywave";
const TEST_URL_ROUTE_HAS_EVENTS = `https://rest.bandsintown.com/artists/${artistWithEvents}/events/?app_id=${API_ID}`;

const server = setupServer(
  rest.get(TEST_URL_ROUTE_NO_EVENTS, (req, res, ctx) => {
    return res(ctx.json([]));
  })
);

describe("Events tests", () => {
  test("Renders Events component", () => {
    render(
      <Router>
        <Events />
      </Router>
    );
  });

  test("Artist with no events", async () => {
    server.listen();
    server.resetHandlers();
    render(
      <Router>
        <Events test_artist={artistWithoutEvents} />
      </Router>
    );
    await waitFor(() =>
      expect(screen.getByText("0 Upcoming Events")).toBeInTheDocument()
    );
    server.close();
  });

  test("Artist with events", async () => {
    server.listen();
    server.resetHandlers();
    server.use(
      rest.get(TEST_URL_ROUTE_HAS_EVENTS, (req, res, ctx) =>
        res(ctx.json(TEST_EVENTS))
      )
    );
    render(
      <Router>
        <Events test_artist={artistWithEvents} />
      </Router>
    );

    await waitFor(() =>
      expect(screen.getByText("26 Upcoming Events")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getAllByText("Event Details")).toHaveLength(26)
    );
    server.close();
  });
});

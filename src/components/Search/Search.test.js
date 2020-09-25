import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Search from "./Search.js";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const artistName = "arcticmonkeys";
const API_ID = "codingbootcamp";
const TEST_URL_ROUTE = `https://rest.bandsintown.com/artists/${artistName}/?app_id=${API_ID}`;
const TEST_ARTIST = {
  id: "430",
  name: "Arctic Monkeys",
  url: "https://www.bandsintown.com/a/430?came_from=267&app_id=myapp",
  mbid: "ada7a83c-e3e1-40f1-93f9-3e73dbc9298a",
  options: { display_listen_unit: false },
  image_url: "https://photos.bandsintown.com/large/8886335.jpeg",
  thumb_url: "https://photos.bandsintown.com/thumb/8886335.jpeg",
  facebook_page_url: "http://www.facebook.com/9520450966",
  tracker_count: 3188877,
  upcoming_event_count: 0,
  support_url: "",
};
const server = setupServer(
  rest.get(TEST_URL_ROUTE, (req, res, ctx) => {
    return res(ctx.json(TEST_URL_RESPONSE));
  })
);

describe("Search tests", () => {
  test("Renders Search component", () => {
    render(
      <Router>
        <Search />
      </Router>
    );
  });

  test("Artist correctly loaded from API", async () => {
    server.listen();
    server.resetHandlers();

    const { getByTestId } = render(
      <Router>
        <Search />
      </Router>
    );
    await userEvent.type(screen.getByRole("textbox"), "Arctic Monkeys");
    await fireEvent(getByTestId("search-button"), new MouseEvent("click"));

    await waitFor(
      () => expect(screen.getByText(TEST_ARTIST.name)).toBeInTheDocument(),
      { timeout: 10000 }
    );

    expect(getByTestId("artist-image")).toHaveAttribute(
      "src",
      TEST_ARTIST.image_url
    );

    expect(getByTestId("fb-button-link")).toHaveAttribute(
      "href",
      TEST_ARTIST.facebook_page_url
    );

    expect(screen.getByText("View Events").closest("a")).toHaveAttribute(
      "href",
      `/${TEST_ARTIST.name}/events`
    );
    server.close();
  });
});

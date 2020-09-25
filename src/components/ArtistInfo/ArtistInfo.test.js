import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ArtistInfo from "./ArtistInfo.js";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const TEST_ARTIST = {
  id: "44",
  name: "Red Hot Chili Peppers",
  url: "https://www.bandsintown.com/a/44?came_from=267&app_id=myapp",
  mbid: "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
  options: { display_listen_unit: false },
  image_url: "https://photos.bandsintown.com/large/6632398.jpeg",
  thumb_url: "https://photos.bandsintown.com/thumb/6632398.jpeg",
  facebook_page_url: "",
  tracker_count: 5028097,
  upcoming_event_count: 11,
  support_url: "",
};

describe("ArtistInfo tests", () => {
  test("Renders Form component", () => {
    render(<ArtistInfo artists={null} />);
  });

  test("Shows correct message when artist is not found", () => {
    render(<ArtistInfo artists="unavailable" />);
    expect(
      screen.getByText("No Results Found for your Search")
    ).toBeInTheDocument();
  });

  test("Correctly shows artist details", () => {
    const { getByTestId } = render(
      <Router>
        <ArtistInfo artists={TEST_ARTIST} />
      </Router>
    );

    expect(screen.getByText(TEST_ARTIST.name)).toBeInTheDocument();

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
  });
});

const TEST_EVENTS = [
  {
    id: "102213412",
    url:
      "https://www.bandsintown.com/e/102213412?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-15T13:00:00",
    title: "Darn Good Music Festival 2021",
    description: "",
    artist: {
      id: "1003408",
      name: "Joywave",
      url:
        "https://www.bandsintown.com/a/1003408?came_from=267&app_id=codingbootcamp",
      mbid: "",
      options: { display_listen_unit: false },
      image_url: "https://photos.bandsintown.com/large/9905868.jpeg",
      thumb_url: "https://photos.bandsintown.com/thumb/9905868.jpeg",
      facebook_page_url: "http://www.facebook.com/249662788574",
      tracker_count: 121835,
      upcoming_event_count: 26,
      support_url: "",
    },
    venue: {
      country: "United States",
      city: "Centreville",
      latitude: "38.04764",
      name: "Darn Good Music Festival 2021",
      location: "Centreville, VA",
      region: "VA",
      longitude: "-77.81694",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/102213412?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "",
  },
  {
    id: "101927084",
    url:
      "https://www.bandsintown.com/e/101927084?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-18T19:00:00",
    title: "",
    description: "rescheduled from Summer 2020",
    venue: {
      country: "United States",
      city: "Charlotte",
      latitude: "35.21669840000001",
      name: "Amos' Southend",
      location: "Charlotte, NC",
      region: "NC",
      longitude: "-80.8551443",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927084?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101879673",
    url:
      "https://www.bandsintown.com/e/101879673?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-19T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Jacksonville",
      latitude: "30.309945",
      name: "Jack Rabbits",
      location: "Jacksonville, FL",
      region: "FL",
      longitude: "-81.654852",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101879673?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2019-12-20T10:00:00",
  },
  {
    id: "101879658",
    url:
      "https://www.bandsintown.com/e/101879658?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-20T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Fort Lauderdale",
      latitude: "26.166121",
      name: "Culture Room",
      location: "Fort Lauderdale, FL",
      region: "FL",
      longitude: "-80.116479",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101879658?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2019-12-20T10:00:00",
  },
  {
    id: "102335454",
    url:
      "https://www.bandsintown.com/e/102335454?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-22T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Tampa",
      latitude: "27.960158",
      name: "The Orpheum",
      location: "Tampa, FL",
      region: "FL",
      longitude: "-82.437854",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/102335454?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "",
  },
  {
    id: "101879661",
    url:
      "https://www.bandsintown.com/e/101879661?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-23T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Orlando",
      latitude: "28.5431638",
      name: "The Social",
      location: "Orlando, FL",
      region: "FL",
      longitude: "-81.3791789",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101879661?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2019-12-20T10:00:00",
  },
  {
    id: "101927081",
    url:
      "https://www.bandsintown.com/e/101927081?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-25T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Nashville",
      latitude: "36.1529535",
      name: "Mercy Lounge",
      location: "Nashville, TN",
      region: "TN",
      longitude: "-86.78053840000001",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927081?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927077",
    url:
      "https://www.bandsintown.com/e/101927077?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-26T19:00:00",
    title: "",
    description: "18+",
    venue: {
      country: "United States",
      city: "Atlanta",
      latitude: "33.781769",
      name: "Terminal West",
      location: "Atlanta, GA",
      region: "GA",
      longitude: "-84.41617680000002",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927077?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927090",
    url:
      "https://www.bandsintown.com/e/101927090?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-28T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Kansas City",
      latitude: "39.095258",
      name: "The Truman",
      location: "Kansas City, MO",
      region: "MO",
      longitude: "-94.576122",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927090?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927091",
    url:
      "https://www.bandsintown.com/e/101927091?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-29T19:00:00",
    title: "",
    description: "16+",
    venue: {
      country: "United States",
      city: "Englewood",
      latitude: "39.6576886",
      name: "Gothic Theatre",
      location: "Englewood, CO",
      region: "CO",
      longitude: "-104.98778870000001",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927091?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927079",
    url:
      "https://www.bandsintown.com/e/101927079?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-05-31T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Salt Lake City",
      latitude: "40.7676925",
      name: "The Complex",
      location: "Salt Lake City, UT",
      region: "UT",
      longitude: "-111.90662259999999",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927079?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927088",
    url:
      "https://www.bandsintown.com/e/101927088?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-02T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Portland",
      latitude: "45.5406738",
      name: "Wonder Ballroom",
      location: "Portland, OR",
      region: "OR",
      longitude: "-122.66347910000002",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927088?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927085",
    url:
      "https://www.bandsintown.com/e/101927085?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-03T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "East Seattle",
      latitude: "47.58788",
      name: "The Showbox",
      location: "East Seattle, WA",
      region: "WA",
      longitude: "-122.24846",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927085?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927083",
    url:
      "https://www.bandsintown.com/e/101927083?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-06T19:00:00",
    title: "",
    description: "21+",
    venue: {
      country: "United States",
      city: "San Francisco",
      latitude: "37.7755127",
      name: "The Independent",
      location: "San Francisco, CA",
      region: "CA",
      longitude: "-122.4377662",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927083?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927087",
    url:
      "https://www.bandsintown.com/e/101927087?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-08T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Los Angeles",
      latitude: "34.0518408",
      name: "Teragram Ballroom",
      location: "Los Angeles, CA",
      region: "CA",
      longitude: "-118.2670763",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927087?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927092",
    url:
      "https://www.bandsintown.com/e/101927092?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-09T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Tempe",
      latitude: "33.4318126",
      name: "Tempe Marketplace",
      location: "Tempe, AZ",
      region: "AZ",
      longitude: "-111.9041848",
    },
    lineup: ["Joywave"],
    offers: [],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927095",
    url:
      "https://www.bandsintown.com/e/101927095?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-14T19:00:00",
    title: "",
    description: "18+",
    venue: {
      country: "United States",
      city: "Minneapolis",
      latitude: "44.97997",
      name: "Fine Line Music Hall",
      location: "Minneapolis, MN",
      region: "MN",
      longitude: "-93.26384",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927095?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927089",
    url:
      "https://www.bandsintown.com/e/101927089?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-15T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Madison",
      latitude: "43.07437799999999",
      name: "Majestic Theatre",
      location: "Madison, WI",
      region: "WI",
      longitude: "-89.38091780000002",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927089?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "102108667",
    url:
      "https://www.bandsintown.com/e/102108667?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-16T19:00:00",
    title: "",
    description: "101 WKQX Welcomes\nJoywave - 'The Possession Tour'\n",
    venue: {
      country: "United States",
      city: "Chicago",
      latitude: "41.9103777",
      name: "Subterranean",
      location: "Chicago, IL",
      region: "IL",
      longitude: "-87.6779844",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Sold Out",
        url:
          "https://www.bandsintown.com/t/102108667?app_id=codingbootcamp&came_from=267&custom=true&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "",
  },
  {
    id: "102335482",
    url:
      "https://www.bandsintown.com/e/102335482?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-18T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Detroit",
      latitude: "42.3511839",
      name: "Magic Stick",
      location: "Detroit, MI",
      region: "MI",
      longitude: "-83.0598865",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/102335482?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "",
  },
  {
    id: "102335484",
    url:
      "https://www.bandsintown.com/e/102335484?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-19T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Rochester",
      latitude: "43.1555036",
      name: "Anthology",
      location: "Rochester, NY",
      region: "NY",
      longitude: "-77.59527300000002",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/102335484?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "",
  },
  {
    id: "102335487",
    url:
      "https://www.bandsintown.com/e/102335487?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-22T19:00:00",
    title: "",
    description: "moved from summer 2020\n#ThePossessionTour",
    venue: {
      country: "United States",
      city: "Buffalo",
      latitude: "42.892245",
      name: "Town Ballroom",
      location: "Buffalo, NY",
      region: "NY",
      longitude: "-78.872078",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/102335487?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "",
  },
  {
    id: "101927093",
    url:
      "https://www.bandsintown.com/e/101927093?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-23T19:00:00",
    title: "",
    description: "18+",
    venue: {
      country: "United States",
      city: "Boston",
      latitude: "42.3521732",
      name: "Paradise Rock Club",
      location: "Boston, MA",
      region: "MA",
      longitude: "-71.11937560000001",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927093?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927097",
    url:
      "https://www.bandsintown.com/e/101927097?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-24T19:00:00",
    title: "",
    description: "16+",
    venue: {
      country: "United States",
      city: "Brooklyn",
      latitude: "40.709474",
      name: "Elsewhere",
      location: "Brooklyn, NY",
      region: "NY",
      longitude: "-73.92332199999998",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927097?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927094",
    url:
      "https://www.bandsintown.com/e/101927094?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-26T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Washington",
      latitude: "38.917913",
      name: "9:30 Club",
      location: "Washington City, DC",
      region: "DC",
      longitude: "-77.023628",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927094?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
  {
    id: "101927076",
    url:
      "https://www.bandsintown.com/e/101927076?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime: "2021-06-27T19:00:00",
    title: "",
    description: "",
    venue: {
      country: "United States",
      city: "Philadelphia",
      latitude: "39.9613876",
      name: "Union Transfer",
      location: "Philadelphia, PA",
      region: "PA",
      longitude: "-75.15532359999997",
    },
    lineup: ["Joywave"],
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/101927076?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    artist_id: "1003408",
    on_sale_datetime: "2020-01-10T10:00:00",
  },
];

export default TEST_EVENTS;

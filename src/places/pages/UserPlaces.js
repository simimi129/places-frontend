import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "title",
    description: "description",
    imageUrl: "img",
    address: "address",
    location: {
      lat: 123,
      lng: 345,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "title",
    description: "description",
    imageUrl: "img",
    address: "address",
    location: {
      lat: 123,
      lng: 345,
    },
    creatorId: "u2",
  },
];

function UserPlaces() {
  return <PlaceList items={DUMMY_PLACES} />;
}

export default UserPlaces;

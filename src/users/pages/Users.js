import React from "react";

import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "id1",
      name: "name",
      image: "",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;

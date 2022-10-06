import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact="true" />
          <Route path="/:userId/places" element={<UserPlaces />} exact="true" />
          <Route path="/places/new" element={<NewPlace />} exact="true" />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

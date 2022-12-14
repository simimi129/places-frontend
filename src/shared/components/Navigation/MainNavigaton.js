import React, { Fragment, useState } from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

function MainNavigation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-nav__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-nav__menu-btn" onClick={openDrawerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-nav__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-nav__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
}

export default MainNavigation;

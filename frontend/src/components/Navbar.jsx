import React from "react";
import NavigationManu from "./NavigationManu";

const Navbar = () => {
  return (
    <div className="layout-wrapper active w-full">
      <div className="relative flex w-full">
        <NavigationManu /> {/* Include the NavigationManu component */}
        <div className="body-wrapper flex-1">
          <h1>Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

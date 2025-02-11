import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <Outlet context={{ searchTerm, setSearchTerm }} />
    </div>
  );
};

export default Layout;

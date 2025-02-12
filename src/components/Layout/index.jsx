import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <Outlet context={{ searchTerm, setSearchTerm }} />
      <Footer />
    </div>
  );
};

export default Layout;

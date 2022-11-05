import React from "react";
import { Navbar } from "../components";
import "../styles/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title></title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Back from "../common/Back";
import Error from "../common/Error/Error";

const AdminHome = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const value =
      JSON.parse(sessionStorage.getItem("UserDetails"))?.token || "";
    if (value) setAuthenticated(true);
  }, [sessionStorage.getItem("UserDetails")]);

  return (
    <>
      <Header />
      {authenticated ? (
        <>
          <Back title="Admin Side" />
          <div className="adminHome"></div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default AdminHome;

import React, { useEffect, useState } from "react";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import Header from "./Header";

const TeacherHome = () => {
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

export default TeacherHome;

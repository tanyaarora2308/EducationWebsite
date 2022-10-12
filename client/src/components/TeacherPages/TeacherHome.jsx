import React, { useEffect, useState } from "react";
import Back from "../CommonComponents/Back";
import Error from "../CommonComponents/Error/Error";
import Header from "./header/Header";

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
          <Back title="Teacher Side" />
          <div className="adminHome"></div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default TeacherHome;

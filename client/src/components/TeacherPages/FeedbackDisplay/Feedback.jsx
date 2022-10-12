import { React, useEffect, useState } from "react";
import Back from "../../CommonComponents/Back";
import Error from "../../CommonComponents/Error/Error";
import Heading from "../../CommonComponents/Heading";
import Header from "../header/Header";
import FeedbackDisplay from "./FeedbackDisplay";
import "./FeedbackDisplay.css";

const Feedback = () => {
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
          <Back title="Feedbacks" />
          <section className="blog padding">
            <Heading title="Feedbacks" />
            <div className="container grid2">
              <FeedbackDisplay />
            </div>
          </section>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Feedback;

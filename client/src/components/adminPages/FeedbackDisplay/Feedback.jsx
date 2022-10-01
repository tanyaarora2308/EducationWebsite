import Back from "../../common/Back";
import Heading from "../../common/Heading";
import FeedbackDisplay from "./FeedbackDisplay";
import { React, useEffect, useState } from "react";
import Error from "../../common/Error"
import Header from "../header/Header"
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

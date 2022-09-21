import React from "react";
import "./Main.scss";
import { chemistry } from "../../dummydata";

const Chemisrty = () => {
  return (
    <section className="testimonal">
      <div className="container">
        <div className="content grid2">
          {chemistry.map((val) => (
            <figure class="image-block">
              <iframe
                id="ytplayer"
                type="text/html"
                width="100%"
                height="405"
                src={`https://www.youtube.com/embed/?listType=playlist&list=${val.link}`}
                frameborder="0"
                allowfullscreen
              ></iframe>
              <figcaption>
                <p>{val.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chemisrty;

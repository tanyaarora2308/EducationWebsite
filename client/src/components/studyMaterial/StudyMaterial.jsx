import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maths from "./Maths";
import Nav from "./Nav";
import Chemistry from "./Chemistry";
import Heading from "../common/Heading";
import Back from "../common/Back";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.scss";

function StudyMaterial() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    const returnedData = await axios.get("http://localhost:5000/assignments");
    console.log(returnedData);
    setData(returnedData.data);
  };

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      {/* <Router>
        <Back title="STUDY MATERIAL" />
        <div style={{backgroundColor:"#f8f8f8",padding:"2rem 1rem"}}>
        <Nav />
        <Switch>
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/chemistry" component={Chemistry} />
        </Switch>
        </div>
      </Router> */}
      <Back title="STUDY MATERIAL" />
      <section className="studyMaterialSection"style={{ backgroundColor: "#f8f8f8", padding: "2rem 1rem",textAlign:"center" }}>
      <div class="box">
    <form name="search">
      <label>Search: </label>
        <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();"  onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
    </form>

</div>
        {/* <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        /> */}
        <Heading title="YOUTUBE PLAYLISTS" />
        <div className="container">


          
          <div className="content grid2">
            {data
              .filter((x) => x.title.toLowerCase().includes(query))
              .map((val) => (
                <figure className="image-block">
                  <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="405"
                    src={`https://www.youtube.com/embed/?listType=playlist&list=${val.videoUrl}`}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <figcaption>
                    <p>{val.title}</p>
                  </figcaption>
                </figure>
              ))}

            {/* {data.map((val) => (
              <figure className="image-block">
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="100%"
                  height="405"
                  src={`https://www.youtube.com/embed/?listType=playlist&list=${val.videoUrl}`}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <figcaption>
                  <p>{val.title}</p>
                </figcaption>
              </figure>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
}

export default StudyMaterial;

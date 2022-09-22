import React from "react";
import "./Main.scss";
import { maths } from "../../dummydata";

const Maths = () => {
  return (
    <section>
      <div className="container">
        <div className="content grid2">
          {maths.map((val) => (
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

export default Maths;

// const Maths = () => {
//   return (
//     <section className="testimonal padding">
//       <div className="container">
//         <div className="content grid2">
//           {maths.map((val) => (
//             <div class="flex justify-center items-center h-screen">
//               <div class="max-w-sm rounded overflow-hidden shadow-lg">
//                 <iframe
//                   id="ytplayer"
//                   type="text/html"
//                   width="100%"
//                   height="200"
//                   src={`https://www.youtube.com/embed/?listType=playlist&list=${val.link}`}
//                   frameborder="0"
//                   allowfullscreen
//                 ></iframe>

//                 <div class="px-6 py-4">
//                   <div class=" text-xl mb-2" style={{textAlign:"center"}}><b>{val.title}</b></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Maths;

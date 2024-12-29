import React, {StrictMode, useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

// function Text() {
//   const [movieRating, setMovieRation] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRation} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

root.render(
  <StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" defaultRating={2} /> */}
    {/* <Text /> */}
    <App />
  </StrictMode>
);

// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App
import React from "react";
import WeatherApp from "./Weather";

const App = () => {
  return (
    <div>
      <WeatherApp weather={{ temperature: 21, conditions: "Sunny" }} />
    </div>
  );
};

export default App;

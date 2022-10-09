// import axios from "axios";
// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [state, setState] = useState([]);
//   var url = "https://6336968665d1e8ef266f2a30.mockapi.io/api/v1/demo/address";

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         const { data } = response;
//         setState(data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);

//   const getNames = (arr) => {
//     let getName = arr.map((i) => i.name).join(", ")
//     return getName;
//   };

//   return <div className="App">{getNames(state)}</div>;
// }

// export default App;


import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // thu hien luu tru data
  const [state, setState] = useState([]);
  const [names, setNames] = useState();
  const url = "https://6336968665d1e8ef266f2a30.mockapi.io/api/v1/demo/address";

  // de goi api
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        setState(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getNames = (name) => {
    console.log("name:", name);
    // state
    // const newName= "dung, hoa, hue, lan"

    // setNames(newName)
  };
  return (
    <div className="App">
      <input onChange={(e) => getNames(e.target.value)} />
      <div>{names}</div>
    </div>
  );
}

export default App;
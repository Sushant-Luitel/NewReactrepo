import axios from "axios";
import { useState } from "react";

export const FetchAPI = () => {
  const [bahana, setBahana] = useState("");
  const generateExcuse = (input) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${input}/`)
      .then((res) => {
        setBahana(res.data[0].excuse);
      });
  };
  //   const generateExcuseParty = () => {
  //     axios
  //       .get("https://excuser-three.vercel.app/v1/excuse/party/")
  //       .then((res) => {
  //         setBahana(res.data[0].excuse);
  //       });
  //   };
  //   const generateExcuseOffice = () => {
  //     axios
  //       .get("https://excuser-three.vercel.app/v1/excuse/office/")
  //       .then((res) => {
  //         setBahana(res.data[0].excuse);
  //       });
  //   };
  return (
    <div>
      <h1>Generate an Excuse</h1>
      <button
        onClick={() => generateExcuse("family")}
        className="family-button"
      >
        Family
      </button>
      <button onClick={() => generateExcuse("party")} className="party-button">
        Party
      </button>
      <button
        onClick={() => generateExcuse("office")}
        className="office-button"
      >
        Office
      </button>

      <h3>Excuse: {bahana}</h3>
    </div>
  );
};

// Exercise 1
// export const FetchAPI = () => {
//   //   fetch("https://catfact.ninja/fact")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data.fact);
//   //     });
//   const [catFact, setCatFact] = useState("");
//   function fetchCatFact() {
//     axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   }
//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   return (
//     <div>
//       <button className="button" onClick={fetchCatFact}>
//         Generate cat Fact
//       </button>
//       <h1>{catFact}</h1>
//     </div>
//   );
// };

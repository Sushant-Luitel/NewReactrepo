import { ShowText } from "./ShowText";
import { useState } from "react";
function App() {
  const [Text, setText] = useState(false);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          setText(!Text);
        }}
      >
        Show Text
      </button>

      {Text && <ShowText />}
    </div>
  );
}

export default App;

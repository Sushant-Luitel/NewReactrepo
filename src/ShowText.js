import { useState } from "react";
export const ShowText = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      {input}
    </div>
  );
};

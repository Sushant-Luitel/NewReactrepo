import { useState, useEffect } from "react";

const ShowText = () => {
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  });

  const [input, setInput] = useState("");
  return (
    <div>
      <input
        placeholder="Type something"
        className="input-box"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      {input}
    </div>
  );
};

export const ShowTextButton = () => {
  useEffect(() => {});
  const [Text, setText] = useState(false);
  return (
    <div>
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
};

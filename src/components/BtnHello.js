import React, { useState, useEffect } from "react";
import useUpdateTitle from "../hooks/useUpdateTitle";

function BtnHello() {
  const [text, setText] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    if (isTrue) {
      setText("Bonjour");
    } else {
      setText("Bonsoir");
    }
  }, [isTrue]);

  // Custom Hook
  useUpdateTitle(text);

  return <button onClick={() => setIsTrue(!isTrue)}>Cliquez</button>;
}

export default BtnHello;

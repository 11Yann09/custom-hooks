import React, { useState } from "react";
import useUpdateTitle from "../hooks/useUpdateTitle";

function BtnHello() {
  const [text, setText] = useState("");

  // Custom Hook
  useUpdateTitle(text);

  return <button onClick={() => setText("Hello World !")}>Cliquez</button>;
}

export default BtnHello;

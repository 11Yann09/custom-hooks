import { useId } from "react";

function NewsLetter() {
  const id = useId();

  const container = {
    background: "PaleGoldenrod",
    padding: "19px ",
    width: "60%",
    margin: "9px auto",
    border: "1px orange dashed",
  };

  return (
    <div style={container}>
      <label htmlFor={id}>Newsletter</label>
      <div>
        <input id={id} type="email" name="email" placeholder="Votre Email" />
      </div>
    </div>
  );
}

export default NewsLetter;

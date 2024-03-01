import { useId } from "react";

function NameFields() {
  const id = useId(); // string
  //   console.log(typeof id)

  return (
    <>
      <label htmlFor={`${id}-firstName`}>Prénom</label>
      <div>
        <input id={`${id}-firstName`} type="text" />
      </div>
      <label htmlFor={`${id}-lastName`}>Nom</label>
      <div>
        <input id={`${id}-lastName`} type="text" />
      </div>
      <label htmlFor={`${id}-age`}>Age</label>
      <div>
        <input id={`${id}-age`} type="number" />
      </div>
    </>
  );
}

export default NameFields;

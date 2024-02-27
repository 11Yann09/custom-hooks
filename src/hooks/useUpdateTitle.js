import { useEffect } from "react";

const useUpdateTitle = (arg) => {
  useEffect(() => {
    document.title = `Titre : ${arg}`;
  }, [arg]);
};

export default useUpdateTitle;

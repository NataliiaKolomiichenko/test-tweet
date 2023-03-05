import { useState, useEffect } from "react";

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    let localState;

    try {
      localState = JSON.parse(
        localStorage.getItem(key) || String(initialState)
      );
    } catch (error) {
      localState = initialState;
    }

    return localState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
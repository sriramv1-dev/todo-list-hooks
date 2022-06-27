import { useEffect, useReducer } from "react";

const useLocalStorageReducer = (key, initialValue, reducer) => {
  const [value, dispatch] = useReducer(reducer, initialValue, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key)) || initialValue;
    } catch (e) {
      val = initialValue;
    }
    return val;
  });

  useEffect(() => {
    const updateData = () =>
      window.localStorage.setItem(key, JSON.stringify(value));

    updateData();
  }, [key, value]);

  return [value, dispatch];
};

export default useLocalStorageReducer;

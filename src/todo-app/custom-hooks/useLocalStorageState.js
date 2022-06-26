import { useEffect, useState } from "react";

const useLocalStorageState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
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

  return [value, setValue];
};

export default useLocalStorageState;

export const CountReducer = (state, action) => {
  const { count } = state;
  const { type, value } = action;
  switch (type) {
    case "INCREMENT":
      return { count: count + value };
    case "DECREMENT":
      return { count: count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return { count: count };
  }
};

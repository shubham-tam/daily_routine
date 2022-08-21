export default (state, action) => {
  switch (action.type) {
    case "DELETE_CALORIES":
      return {
        ...state,
        calories: state.calories.filter(
          (calorie) => calorie.id !== action.payload
        ),
      };
    case "ADD_CALORIES":
      return {
        ...state,
        calories: [action.payload, ...state.calories],
      };

    default:
      return state;
  }
};

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
    case "DELETE_LISTS":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case "ADD_LISTS":
      return {
        ...state,
        lists: [action.payload, ...state.lists],
      };

    default:
      return state;
  }
};

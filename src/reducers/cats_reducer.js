const defaultState = {
  cats: []
};

const catsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING_CATS":
      console.log("fetching")
      return {
        ...state
      };
    case "FETCH_CATS":
      return {
        ...state,
        cats: [action.cats.images]
      };
    default:
      return state;
  }
};

export default catsReducer;

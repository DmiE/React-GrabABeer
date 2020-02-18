const initialState = {
  fetchedBeers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETFETCHEDBEERS':
      return {
        ...state,
        fetchedBeers: action.fetchedBeers
      };
    default:
      return state;
  }
};

export default reducer;

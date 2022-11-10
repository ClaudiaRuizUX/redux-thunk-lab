const catsReducer = (state = { cats: [], projects: [], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_CATS":
            return {
                ...state,
                cats: [...state.cats],
                loading: true,
            }
        case "ADD_CATS":
            return {
                ...state,
                cats: action.cats,
                loading: false,
            }
        case "LOADING_PROJECTS":
            return {
                ...state,
                projects: [...state.projects],
                loading: true,
            }
            case "ADD_PROJECTS":
            return {
                ...state,
                projects: action.projects,
                loading: false,
            }
      default:
        return state;
    }
  };
  
  export default catsReducer;
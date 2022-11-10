export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_CATS" });
      fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          dispatch({ type: "ADD_CATS", cats: responseJSON.images });
        });
    };
  };

  export const fetchProjects = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_PROJECTS" });
      fetch("https://desolate-depths-34005.herokuapp.com/projects")
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          dispatch({ type: "ADD_PROJECTS", projects: responseJSON});
        });
    };
  };
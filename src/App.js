import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats,fetchProjects} from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
    this.props.fetchProjects();
  }

  render() {
    console.log(this.props.catPics); // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.loading ?
          <h1>LOADING...</h1> : 
          <ol> {this.props.catPics.map(cat => <li>{cat.url}</li>)} </ol>
        } 
        <h1>Art Projects</h1>
        {this.props.loading ?
          <h1>LOADING...</h1> : 
          <ol> {this.props.projects.map(project => <li>{project.title}</li>)} </ol>
        } 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import Catlist from "./CatList";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  loadingPrompt = () => {
    return this.props.loading ? <h1>Loading Cuteness...</h1> : null;
  };

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.loadingPrompt()}
        <Catlist catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

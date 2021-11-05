// write your CatList component here
import React from "react";

class CatList extends React.Component {
  renderCats = () => {
    return this.props.catPics.map((pic) => (
      <img src={pic.url} alt={pic.id} key={pic.id} />
    ));
  };

  render() {
    return <div>{this.renderCats()}</div>;
  }
}

export default CatList;

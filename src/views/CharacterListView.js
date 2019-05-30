import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions'
// import actions

class CharacterListView extends React.Component {
  
  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
  characters: state.charsReducer.characters, 
  error: state.charsReducer.error, 
  isLoading: state.charsReducer.isLoading

}} 
export default connect(
   mapStateToProps,
  {
    /* action creators go here */
    getChars  
  }
)(CharacterListView);

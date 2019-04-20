/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { thunk_characters_action_creator, change_page } from "../actions";
import { CHARACTER_PER_PAGE } from "../constants/config"
import { CharactersList, CharactersPaginator} from '../components';

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.selectPage = this.selectPage.bind(this);
  }
  
  componentDidMount() {
    this.props.change_page(1);
    this.props.thunk_characters_action_creator(1);  
  }

  selectPage(page) {
    this.props.change_page(page);
    this.props.thunk_characters_action_creator(page);  
  }

  render() {
    const pagination = {page: this.props.page, perPage: CHARACTER_PER_PAGE};
    const pages = this.props.pages;

    if (this.props.characters && this.props.characters.length > 0 ) {
      return (
        <div>
          <h3>Characters</h3>  
          <CharactersList data={this.props.characters} />
          <CharactersPaginator pagination={pagination} pages={pages} ellipsis="***" onSelect={this.selectPage} />
          
        </div>
      );
    } else {
      return "No Characters";  
    }
  }
}

const mapDispatchToProps = {
  thunk_characters_action_creator,
  change_page
};

const mapStateToProps = state => ({
  characters: state.characters.data,
  page: state.pagination.page,
  pages: state.pagination.count
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharactersPage)
);

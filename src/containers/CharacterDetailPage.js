/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { thunk_character_action_creator} from "../actions";
import { CharacterDetail} from '../components';

class CharacterDetailPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    const characterId = match.params.characterId;
    this.props.thunk_character_action_creator(characterId);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const backLink = <button className="u-margin-top--l t-size--small" onClick={this.goBack}>Back</button>;
    if (this.props.character) {
        return (
            <div>
                <CharacterDetail character={this.props.character} />
                {backLink}
            </div>
        )
    } else {
        return "";
    }
  }
}

const mapDispatchToProps = {
  thunk_character_action_creator,
};

const mapStateToProps = state => ({
  character: state.character.data,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterDetailPage)
);

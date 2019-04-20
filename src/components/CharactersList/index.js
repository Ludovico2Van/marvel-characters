import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Character from '../Character';
import './_charactersList.scss';

class CharactersList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>{this.props.data.map(character => 
        <li key={character.id}><Character data={character} /></li>
      )}</ul>
    );
  }
}

export default CharactersList;
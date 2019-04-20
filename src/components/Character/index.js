import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_character.scss";

class Character extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { id, name, thumbnail } = this.props.data;
    const image = `${thumbnail.path}/standard_small.${thumbnail.extension}`;
    return (
      <a href={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </a>
    );
  }
}

export default Character;

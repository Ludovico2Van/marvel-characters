import React, { Component } from "react";
import PropTypes from "prop-types";

class CharacterDetail extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired
  };

  render() {
    const {name, description, thumbnail, comics, series, stories, events, urls} = this.props.character;
    const wiki = urls ? urls.find(url => url.type === "wiki") : undefined;
    const image = thumbnail
      ? `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`
      : undefined;

    return (
      <div>
        <h1>{name}</h1>
        {description && <div>Description: {description}</div>}
        {wiki && (
          <div>
            Url: <a href={wiki.url}>{wiki.url}</a>
          </div>
        )}
        <img src={image} alt={name} />
        {comics && <div>Comics: {comics.available}</div>}
        {series && <div>Series: {series.available}</div>}
        {stories && <div>Stories: {stories.available}</div>}
        {events && <div>Events: {events.available}</div>}
      </div>
    );
  }
}

export default CharacterDetail;

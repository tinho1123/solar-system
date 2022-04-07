import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <h2 data-testid="planet-name">{planetName}</h2>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: Proptypes.string.isRequired,
  planetImage: Proptypes.node.isRequired,
};

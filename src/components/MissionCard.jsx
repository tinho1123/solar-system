import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    console.log(this.props);
    return (
      <div data-testid="mission-card">
        <ul>
          <li data-testid="mission-name">{name}</li>
          <li data-testid="mission-year">{year}</li>
          <li data-testid="mission-country">{country}</li>
          <li data-testid="mission-destination">{destination}</li>
        </ul>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

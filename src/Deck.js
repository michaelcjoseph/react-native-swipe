import React, { Component, PropTypes } from 'react';
import { View, Animated } from 'react-native';

class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item));
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

Deck.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  })).isRequired,
  renderCard: PropTypes.func.isRequired,
};

export default Deck;

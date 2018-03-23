import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import FavoriteItem from 'components/FavoriteItem';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  static propTypes = {
    favorites: PropsTypes.arrayOf(PropsTypes.shape({
      id: PropsTypes.number,
    })).isRequired,
  };

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.props.favorites.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado</Text>
          : this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);

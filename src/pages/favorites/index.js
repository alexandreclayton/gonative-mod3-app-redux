import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Favorites = () => (
  <View style={styles.container} />
);

Favorites.navigationOptions = {
  title: 'Meus favoritos',
};

export default Favorites;

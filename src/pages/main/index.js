import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
  </View>
);

Main.navigationOptions = {
  title: 'Main',
  header: null,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => bindActionCreators(NavigationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addNavigationHelpers } from 'react-navigation';

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import Navigator from './routes';

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

const Router = ({ dispatch, nav }) => (
  <Navigator
    navigation={dispatch}
  />
);

Router.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

//const AppWithNavigationState = connect()(Router);

export default Router;

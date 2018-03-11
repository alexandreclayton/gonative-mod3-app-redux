import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

const TodoList = props => (
  <Fragment>
    { props.todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    )) }
  </Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);

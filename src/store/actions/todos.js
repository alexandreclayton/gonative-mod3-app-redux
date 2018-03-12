export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: { id: Math.random(), text },
});

export default function todos(state = ['Fazer café', 'Estudar GoNative'], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}

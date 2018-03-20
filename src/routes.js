import { StackNavigator } from 'react-navigation';
import Main from 'pages/main';
import Favorites from 'pages/favorites';

export default StackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
});

import { StyleSheet } from 'react-native';
import { colors, matrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  empty: {
    alignSelf: 'center',
    color: colors.white,
    marginTop: matrics.baseMargin * 2,
    fontSize: 14,
  },
});

export default styles;

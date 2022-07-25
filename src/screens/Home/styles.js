import { StyleSheet } from 'react-native';
import AppColors from '../../themes/AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: 7,
  },
  loader: {
    height: '100%',
    alignItems: 'center',
  },
});

export default styles;

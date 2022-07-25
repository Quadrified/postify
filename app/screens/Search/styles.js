import { StyleSheet } from 'react-native';
import AppColors from '../../themes/AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: 7,
  },
  searchContainer: {
    paddingVertical: 10,
  },
  searchResultContainer: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    marginHorizontal: 5,
  },
});

export default styles;
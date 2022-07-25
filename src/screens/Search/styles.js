import { StyleSheet } from 'react-native';
import AppColors from '../../themes/AppColors';
import DefaultFonts from '../../themes/DefaultFonts';

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
    flex: 1,
    marginHorizontal: 5,
  },
  loader: {
    height: '100%',
    alignItems: 'center',
  },
  noResultContainer: {
    borderWidth: 1,
    borderColor: 'red',
  },
  noResultText: {
    fontFamily: DefaultFonts.Bold,
    fontSize: 14,
    color: AppColors.text,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import AppColors from '../../themes/AppColors';
import DefaultFonts from '../../themes/DefaultFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: 10,
  },
  emptyView: {
    height: 30,
  },
  infoContainer: {
    marginVertical: 5,
    padding: 15,
    backgroundColor: AppColors.white,
    borderRadius: 13,
  },
  profilePicture: {
    padding: 10,
    width: 80,
    height: 80,
  },
  profileName: {
    fontFamily: DefaultFonts.ExtraBold,
    fontSize: 22,
    left: 15,
  },
  titleContainer: {
    marginVertical: 10,
    paddingVertical: 3,
  },
  iconTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: DefaultFonts.Bold,
    fontSize: 17,
    color: AppColors.text,
    left: 12,
  },
  subtitle: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 14,
    color: AppColors.primary,
    paddingLeft: 35,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 30,
  },
  locationTitle: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 14,
    color: AppColors.primary,
    left: 10,
  },
  interactiveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default styles;

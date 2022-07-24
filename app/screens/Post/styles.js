import { StyleSheet } from 'react-native';
import AppColors from '../../themes/AppColors';
import DefaultFonts from '../../themes/DefaultFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  postCoverImage: {
    width: '100%',
    height: 180,
  },
  titleStyle: {
    fontFamily: DefaultFonts.ExtraBold,
    fontSize: 17,
    color: AppColors.text,
  },
  postBodyContainer: {
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  postTitle: {
    fontFamily: DefaultFonts.ExtraBold,
    fontSize: 24,
    color: AppColors.text,
    paddingVertical: 10,
    marginVertical: 10,
  },
  postBody: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 15,
    color: AppColors.text,
    textTransform: 'capitalize',
  },
  commentsHeader: {
    fontFamily: DefaultFonts.Bold,
    fontSize: 19,
    color: AppColors.text,
    textTransform: 'capitalize',
    marginTop: 30,
  },
  commentContainer: {
    marginTop: 10,
    marginBottom: 3,
    padding: 10,
    borderWidth: 0.2,
    borderColor: AppColors.dark,
    borderRadius: 5,
  },
  commentTitleStyle: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 17,
    color: AppColors.text,
    marginVertical: 10,
  },
  commentBody: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 15,
    color: AppColors.text,
    textTransform: 'capitalize',
  },
  commentEmail: {
    fontFamily: DefaultFonts.MediumItalic,
    fontSize: 12,
    color: AppColors.primary,
    marginVertical: 10,
  },
});

export default styles;

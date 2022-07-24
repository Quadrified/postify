import { DefaultTheme } from 'react-native-paper';
import AppColors from './AppColors';
import { fontTypeConfig, fontSizeConfig } from './AppFonts';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primary,
    secondary: AppColors.secondary,
    text: AppColors.text,
    background: AppColors.background,
    white: AppColors.white,
    black: AppColors.black,
  },
  font: fontTypeConfig,
  size: fontSizeConfig,
};

export default theme;

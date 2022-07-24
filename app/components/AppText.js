import React from 'react';
import { Text } from 'react-native';
import AppColors from '../themes/AppColors';
import { fontTypeConfig } from '../themes/AppFonts';

const AppText = ({
  children,
  fontType,
  fontSizeType,
  textColor,
  style,
  ...props
}) => {
  const defaultValues = {
    fontFamily: fontTypeConfig.medium.fontFamily,
    fontWeight: fontTypeConfig.medium.fontWeight,
    fontColor: AppColors.dark,
    fontSize: 14,
    lineHeight: 22.4,
  };
  return (
    <Text
      style={[
        {
          fontFamily: fontType?.fontFamily || defaultValues.fontFamily,
          fontWeight: fontType?.fontWeight || defaultValues.fontWeight,
          color: textColor || defaultValues.fontColor,
          fontSize: fontSizeType?.fontSize || defaultValues.fontSize,
          lineHeight: fontSizeType?.lineHeight || defaultValues.lineHeight,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;

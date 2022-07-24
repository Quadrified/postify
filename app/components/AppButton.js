import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import AppColors from '../themes/AppColors';
import AppText from './AppText';

const AppButton = ({
  title,
  buttonBackgroundColor,
  buttonTextColor,
  onPress,
  style,
  fontStyle,
  activeOpacity = 0.75,
}) => {
  const { font, size } = useTheme();
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: buttonBackgroundColor || AppColors.primary },
          style,
        ]}>
        <AppText
          fontType={font.bold}
          fontSizeType={size.title}
          textColor={buttonTextColor || AppColors.white}
          style={[styles.button, fontStyle]}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 12,
    marginVertical: 5,
  },
  button: {
    padding: 10,
  },
});

export default AppButton;

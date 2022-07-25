import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../../themes/AppColors';
import DefaultFonts from '../../../themes/DefaultFonts';

const InfoBlock = ({
  title = '',
  subtitle = '',
  icon = '',
  interactive = false,
  iconSize = 18,
  onPress,
  titleStyle,
  containerStyle,
  subtitleStyle,
}) => {
  return (
    <View style={[styles.titleContainer, containerStyle]}>
      <View style={styles.iconTitleContainer}>
        {icon && <Icon name={icon} size={iconSize} color={AppColors.text} />}
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.interactiveItem}>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        {interactive && (
          <Icon name="chevron-right" size={18} color={AppColors.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  interactiveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default InfoBlock;

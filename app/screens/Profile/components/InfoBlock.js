import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../../themes/AppColors';
import styles from '../styles';

const InfoBlock = ({
  title = '',
  subtitle = '',
  icon = '',
  interactive = false,
  onPress,
}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.iconTitleContainer}>
        {icon && <Icon name={icon} size={18} color={AppColors.text} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.interactiveItem}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {interactive && (
          <Icon name="chevron-right" size={18} color={AppColors.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InfoBlock;

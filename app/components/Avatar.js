import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import AppColors from '../themes/AppColors';
import defaultFonts from '../themes/DefaultFonts';

const Avatar = ({
  name = 'User',
  size = 30,
  avatarStyle,
  titleStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.authorNameContainer}
      activeOpacity={0.75}
      onPress={onPress}>
      <UserAvatar
        size={size}
        borderRadius={100}
        name={name}
        bgColor={AppColors.primary}
        style={[styles.container, avatarStyle]}
      />
      <Text numberOfLines={2} style={[styles.postAuthorText, titleStyle]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
    padding: 10,
    width: 30,
    height: 30,
  },
  authorNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  postAuthorText: {
    fontFamily: defaultFonts.Medium,
    fontSize: 13,
    color: AppColors.text,
    left: 5,
    textTransform: 'capitalize',
  },
});

export default Avatar;

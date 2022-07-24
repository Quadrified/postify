import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import AppColors from '../themes/AppColors';
import defaultFonts from '../themes/DefaultFonts';

const Avatar = ({ postAuthor = 'Comment', size, avatarStyle, titleStyle }) => {
  return (
    <TouchableOpacity
      style={styles.authorNameContainer}
      activeOpacity={0.75}
      onPress={() => console.log('>>>Pressed Avatar<<<')}>
      <UserAvatar
        size={size || 30}
        borderRadius={100}
        name={postAuthor}
        bgColor={AppColors.primary}
        style={[styles.container, avatarStyle]}
      />
      <Text numberOfLines={1} style={[styles.postAuthorText, titleStyle]}>
        {postAuthor}
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
  specialSymbol: {
    fontSize: 7,
  },
});

export default Avatar;

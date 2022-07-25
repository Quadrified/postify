import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Avatar from '../../../components/Avatar';
import AppColors from '../../../themes/AppColors';
import DefaultFonts from '../../../themes/DefaultFonts';

const SearchResultCard = ({ postAuthorID, onPressResult }) => {
  const [postAuthor, setPostAuthor] = useState('Omer');

  return (
    <>
      <Card
        theme={{ roundness: 10 }}
        style={styles.cardContainer}
        onPress={() => onPressResult(postAuthorID)}>
        <View style={styles.actionContainer}>
          <Avatar
            size={50}
            name={postAuthor}
            onPress={() => onPressResult(postAuthorID)}
            avatarStyle={styles.profilePicture}
          />
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    padding: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  postTitleText: {
    fontFamily: DefaultFonts.Bold,
    fontSize: 18,
    color: AppColors.text,
    textTransform: 'capitalize',
  },
  postCoverContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  postBodyTextContainer: {
    paddingVertical: 10,
  },
  postBodyText: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 13,
    color: AppColors.text,
    textTransform: 'capitalize',
  },
  postCoverImage: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
  authorNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  postAuthorText: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 13,
    color: AppColors.text,
    left: 5,
    textTransform: 'capitalize',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  profilePicture: {
    padding: 10,
    width: 50,
    height: 50,
  },
});

export default SearchResultCard;

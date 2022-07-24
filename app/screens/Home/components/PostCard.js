import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { getUserData } from '../redux/actions';
import Avatar from '../../../components/Avatar';
import AppColors from '../../../themes/AppColors';
import DefaultFonts from '../../../themes/DefaultFonts';

const PostCard = ({
  postID,
  postTitle = '',
  postAuthorID,
  postBody = '',
  onSelectPost,
}) => {
  const [postAuthor, setPostAuthor] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(postAuthorID))
      .then(data => {
        const userName = data?.data[0]?.username;
        if (data.ok) {
          setPostAuthor(userName);
        }
      })
      .catch(error => {
        console.log('Caught in home -> fetchHome', error);
      });
  }, [dispatch, postAuthorID]);

  return (
    <>
      <Card
        theme={{ roundness: 10 }}
        style={styles.cardContainer}
        onPress={() => onSelectPost(postID, postAuthorID)}>
        <View style={styles.titleContainer}>
          <Text style={styles.postTitleText}>{postTitle}</Text>
        </View>
        <View style={styles.postCoverContainer}>
          <Card.Cover
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={styles.postCoverImage}
          />
          <View style={styles.postBodyTextContainer}>
            <Text style={styles.postBodyText} numberOfLines={3}>
              {postBody}
            </Text>
          </View>
        </View>
        <View style={styles.actionContainer}>
          <Avatar postAuthor={postAuthor} />
          <Card.Actions style={styles.action}>
            <Button theme={{ roundness: 5 }} mode="outlined" uppercase={false}>
              Learn more
            </Button>
          </Card.Actions>
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
    alignItems: 'center',
  },
  postBodyTextContainer: {
    paddingVertical: 10,
  },
  postBodyText: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 13,
    color: AppColors.text,
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
});

export default PostCard;

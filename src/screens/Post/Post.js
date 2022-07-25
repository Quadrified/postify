import React, { Fragment, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/actions';
import {
  getCompleteAuthorData,
  getFilteredAuthorName,
  getHomePostData,
} from '../../redux/selectors';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Avatar from '../../components/Avatar';

const Post = ({ navigation, route }) => {
  const { postID, postAuthorID } = route.params;

  const dispatch = useDispatch();

  const postData = useSelector(state => getHomePostData(state));
  const authorData = useSelector(state => getCompleteAuthorData(state));
  const authorName = useSelector(state =>
    getFilteredAuthorName(state, postAuthorID),
  );

  useEffect(() => {
    dispatch(getUserData(postAuthorID))
      .then(data => {
        if (data.ok) {
        }
      })
      .catch(error => {
        console.log('Caught in home -> fetchHome', error);
      });
  }, [dispatch, postAuthorID]);

  const onPressProfile = authorID => {
    navigation.navigate('Profile', { authorID });
  };

  return (
    <>
      <AppHeader title="Post" />
      <View style={styles.container}>
        <ScrollView>
          {postData
            .filter(post => post.id === postID)
            .map(filteredPostData => (
              <Fragment key={filteredPostData.id}>
                <Image
                  source={{ uri: 'https://picsum.photos/200/300' }}
                  style={styles.postCoverImage}
                />
                <View style={styles.postBodyContainer}>
                  <Avatar
                    name={authorName}
                    size={30}
                    titleStyle={styles.titleStyle}
                    onPress={() => onPressProfile(authorData?.id)}
                  />
                  <Text style={styles.postTitle}>{filteredPostData.title}</Text>
                  <Text style={styles.postBody}>{filteredPostData.body}</Text>
                  <Text style={styles.commentsHeader}>
                    Comments ({filteredPostData?.comments?.length})
                  </Text>
                  {filteredPostData?.comments.map(
                    ({ id, name, body, email }) => (
                      <View style={styles.commentContainer} key={id}>
                        <Avatar
                          size={30}
                          name={name}
                          titleStyle={styles.commentTitleStyle}
                        />
                        <Text style={styles.commentBody}>{body}</Text>
                        <Text style={styles.commentEmail}>⋗ {email}</Text>
                      </View>
                    ),
                  )}
                </View>
              </Fragment>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Post;

import React, { Fragment } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';
import Avatar from '../../components/Avatar';
import {
  getCompleteAuthorData,
  getFilteredAuthorName,
  getHomePostData,
} from '../Home/redux/selectors';
import styles from './styles';

const Post = ({ navigation, route }) => {
  const { postID, postAuthorID } = route.params;
  console.log('>>>postID, postAuthorID<<<', postID, postAuthorID);

  const postData = useSelector(state => getHomePostData(state));
  const authorData = useSelector(state => getCompleteAuthorData(state));
  const authorName = useSelector(state =>
    getFilteredAuthorName(state, postAuthorID),
  );
  console.log('>>>postData<<<', postData);
  console.log('>>>authorData<<<', authorData);
  console.log('>>>authorName<<<', authorName);

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
                    postAuthor={authorName}
                    size={30}
                    titleStyle={styles.titleStyle}
                  />
                  <Text style={styles.postTitle}>{filteredPostData.title}</Text>
                  <Text style={styles.postBody}>{filteredPostData.body}</Text>
                  <Text style={styles.commentsHeader}>
                    Comments ({filteredPostData.comments.length})
                  </Text>
                  {filteredPostData?.comments.map(
                    ({ id, name, body, email }) => (
                      <View style={styles.commentContainer} key={id}>
                        <Avatar
                          size={30}
                          postAuthor={name}
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

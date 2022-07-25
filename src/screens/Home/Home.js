import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../../redux/actions';
import { getHomePostData } from '../../redux/selectors';
import styles from './styles';
import AppColors from '../../themes/AppColors';
import AppHeader from '../../components/AppHeader';
import PostCard from './components/PostCard';
import { REFRESH_PROPS } from '../../utils/constants';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const postData = useSelector(state => getHomePostData(state));

  useEffect(() => {
    // Fetchin only 30 posts on first load. Later fetches random number of posts.
    dispatch(getPostData(30))
      .then(data => {
        if (data.ok) {
          setIsLoading(false);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Caught in home -> fetchHome', error);
      });
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    // Fetching random number of posts on every refresh upto 50
    const randomNumberOfPostLimit = Math.floor(Math.random() * 50);
    setRefreshing(true);
    setIsLoading(true);
    dispatch(getPostData(randomNumberOfPostLimit))
      .then(data => {
        if (data) {
          setRefreshing(false);
          setIsLoading(false);
        }
      })
      .catch(error => {
        setRefreshing(false);
        setIsLoading(false);
        console.log('Caught in home -> onRefreshCallback', error);
      });
  }, [dispatch]);

  const onPressPost = (postID, postAuthorID) => {
    navigation.navigate('Post', { postID, postAuthorID });
  };

  const onPressProfile = authorID => {
    navigation.navigate('Profile', { authorID });
  };

  return (
    <>
      <AppHeader title="Postify" />
      {isLoading ? (
        <ActivityIndicator animating size={50} style={styles.loader} />
      ) : (
        <View style={styles.container}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[AppColors.primary]}
                {...REFRESH_PROPS}
              />
            }
            data={postData}
            keyExtractor={data => data.id}
            renderItem={({ item: { id, userId, body, title } }) => (
              <PostCard
                postID={id}
                postTitle={title}
                postAuthorID={userId}
                postBody={body}
                onPressPost={onPressPost}
                onPressProfile={onPressProfile}
              />
            )}
          />
        </View>
      )}
    </>
  );
};

export default Home;

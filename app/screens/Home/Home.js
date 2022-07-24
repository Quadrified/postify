import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  RefreshControl,
  Platform,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from './redux/actions';
import { getHomePostData } from './redux/selectors';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import PostCard from './components/PostCard';
import AppColors from '../../themes/AppColors';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const postData = useSelector(state => getHomePostData(state));

  const refreshProps = Platform.select({
    android: {
      progressBackgroundColor: AppColors.white,
    },
    ios: {
      tintColor: AppColors.primary,
    },
  });

  const onRefresh = useCallback(() => {
    const randomNumberOfPostLimit = Math.floor(Math.random() * 15);
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

  useEffect(() => {
    dispatch(getPostData(10))
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

  const onSelectPost = (postID, postAuthorID) => {
    navigation.navigate('Post', { postID, postAuthorID });
  };

  return (
    <>
      <AppHeader title="Postify" />
      {isLoading ? (
        <ActivityIndicator animating size={50} style={styles.loader} />
      ) : (
        <View style={styles.container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[AppColors.primary]}
                {...refreshProps}
              />
            }>
            <FlatList
              data={postData}
              keyExtractor={data => data.id}
              renderItem={({ item: { id, userId, body, title } }) => (
                <PostCard
                  postID={id}
                  postTitle={title}
                  postAuthorID={userId}
                  postBody={body}
                  onSelectPost={onSelectPost}
                />
              )}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Home;

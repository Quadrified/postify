import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import AppColors from '../../themes/AppColors';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchResult, fetchSearchData } from '../redux/actions';
import { getSearchData } from '../redux/selectors';
import AppHeader from '../../components/AppHeader';
import SearchResultCard from './components/SearchResultCards';

const Search = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchData = useSelector(state => getSearchData(state));

  console.log('>>>searchData<<<', searchData);

  useEffect(() => {
    dispatch(clearSearchResult()).catch(error => {
      setIsLoading(false);
      console.error('error in searchUser', error);
    });
    searchRef.current.focus();
  }, [dispatch]);

  const searchUser = query => {
    if (!query.length) {
      dispatch(clearSearchResult())
        .then(() => {
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          console.error('error in searchUser', error);
        });
      return;
    }
    dispatch(fetchSearchData(query))
      .then(data => {
        console.log('data', data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('error in onChangeSearch', error);
        setIsLoading(false);
      });
  };
  const debouncedSearch = _.debounce(searchUser, 3000);

  const onChangeSearch = query => {
    setIsLoading(true);
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <>
      <AppHeader title="Search" />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            ref={searchRef}
            icon="account-search"
            placeholder="Search for a user"
            onChangeText={onChangeSearch}
            value={searchQuery}
            theme={{ roundness: 10 }}
            clearButtonMode="while-editing"
            clearIcon={() => (
              <Icon name="clear" size={18} color={AppColors.text} />
            )}
          />
        </View>
        <View style={styles.searchResultContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {isLoading ? (
              <ActivityIndicator animating size={40} style={styles.loader} />
            ) : (
              <SearchResultCard />
            )}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Search;

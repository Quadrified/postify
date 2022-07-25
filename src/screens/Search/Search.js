import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Keyboard } from 'react-native';
import _ from 'lodash';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import AppColors from '../../themes/AppColors';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchResult, fetchSearchData } from '../../redux/actions';
import { getSearchData } from '../../redux/selectors';
import AppHeader from '../../components/AppHeader';
import SearchResultCard from './components/SearchResultCards';

const Search = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchData = useSelector(state => getSearchData(state));

  useEffect(() => {
    dispatch(clearSearchResult());
    searchRef.current.focus();
  }, [dispatch]);

  const searchUser = query => {
    if (!query.length) {
      setIsLoading(false);
      dispatch(clearSearchResult());
      return;
    }
    dispatch(fetchSearchData(query))
      .then(response => {
        if (response?.data?.length === 0) {
          Keyboard.dismiss();
          Toast.show(
            'No results found. Please try a different search.',
            Toast.LONG,
          );
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
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

  const onPressResult = userID => {
    navigation.navigate('Profile', { authorID: userID });
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
        <View
          style={styles.searchResultContainer}
          onTouchStart={() => Keyboard.dismiss()}>
          <View>
            {isLoading ? (
              <ActivityIndicator animating size={40} style={styles.loader} />
            ) : (
              <FlatList
                data={searchData}
                keyExtractor={data => data.id}
                renderItem={({
                  item: { id, name, username, email, phone },
                }) => (
                  <SearchResultCard
                    userID={id}
                    fullName={name}
                    userName={username}
                    email={email}
                    phoneNumber={phone}
                    onPressResult={onPressResult}
                  />
                )}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default Search;

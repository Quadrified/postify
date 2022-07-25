import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../themes/AppColors';
import styles from './styles';

const Search = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onChangeSearch = query => {
    console.log('>>>query<<<', query);
    setSearchQuery(query);
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
          <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
        </View>
      </View>
    </>
  );
};

export default Search;

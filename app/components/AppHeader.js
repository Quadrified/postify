import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '../themes/AppColors';
import defaultFonts from '../themes/DefaultFonts';
import PostifyLogo from '../assets/images/Postify.svg';
import { BACK_HEADER_SCREENS } from '../utils/constants';

const AppHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <>
      {BACK_HEADER_SCREENS.includes(title) ? (
        <View style={styles.backHeaderContainer}>
          <Icon
            name="arrow-back"
            color={AppColors.text}
            size={26}
            style={styles.mainIcon}
            onPress={() => navigation.goBack()}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View>
            <PostifyLogo width={100} />
          </View>
          <Icon
            name="search"
            color={AppColors.text}
            size={24}
            style={styles.mainIcon}
            onPress={() => navigation.navigate('Search')}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: wp('100%'),
    padding: 20,
    backgroundColor: AppColors.background,
    elevation: 1,
  },
  mainIcon: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
  backHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 80,
    width: wp('100%'),
    padding: 10,
    backgroundColor: AppColors.background,
  },
  title: {
    fontFamily: defaultFonts.Bold,
    fontSize: 22,
    color: AppColors.text,
    ...Platform.select({
      android: {
        paddingTop: 5,
      },
    }),
  },
});

export default AppHeader;

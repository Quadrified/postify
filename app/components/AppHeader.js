import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../themes/AppColors';
import defaultFonts from '../themes/DefaultFonts';
import { BACK_HEADER_SCREENS } from '../utils/constants';

const AppHeader = ({ title, PostTitle, style }) => {
  const navigation = useNavigation();

  return (
    <>
      {BACK_HEADER_SCREENS.includes(title) ? (
        <View style={styles.backHeaderContainer}>
          <Icon
            name="arrow-back"
            color={AppColors.text}
            size={24}
            style={styles.mainIcon}
            onPress={() => navigation.goBack()}
          />
          {/* <Text style={styles.title}>{title}</Text> */}
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
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
  backIcon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerRightIcon: {
    position: 'absolute',
    right: wp('2%'),
    paddingHorizontal: 10,
  },
  headerRightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scan: {
    paddingLeft: 3,
  },
});

export default AppHeader;

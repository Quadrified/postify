import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../../themes/AppColors';
import DefaultFonts from '../../../themes/DefaultFonts';
import Avatar from '../../../components/Avatar';
import InfoBlock from '../../Profile/components/InfoBlock';

const SearchResultCard = ({
  userID,
  onPressResult,
  fullName,
  userName,
  email,
  phoneNumber,
}) => {
  return (
    <>
      <Card
        theme={{ roundness: 10 }}
        style={styles.cardContainer}
        onPress={() => onPressResult(userID)}>
        <View>
          <View style={styles.avatarInfoContainer}>
            <Avatar
              size={40}
              name={fullName}
              onPress={() => onPressResult(userID)}
              avatarStyle={styles.profilePicture}
              titleStyle={styles.profileName}
            />
            <Icon name="chevron-right" size={28} color={AppColors.primary} />
          </View>
          <InfoBlock
            title="Username"
            subtitle={userName}
            icon="people"
            iconSize={14}
            titleStyle={styles.infoTitle}
            subtitleStyle={styles.infoSubtitle}
            containerStyle={styles.infoContainer}
          />
          <InfoBlock
            title="Email"
            subtitle={email}
            icon="email"
            iconSize={14}
            titleStyle={styles.infoTitle}
            subtitleStyle={styles.infoSubtitle}
            containerStyle={styles.infoContainer}
          />
          <InfoBlock
            title="Phone"
            subtitle={phoneNumber}
            icon="call"
            iconSize={14}
            titleStyle={styles.infoTitle}
            subtitleStyle={styles.infoSubtitle}
            containerStyle={styles.infoContainer}
          />
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    padding: 10,
  },
  avatarInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePicture: {
    padding: 10,
    width: 40,
    height: 40,
  },
  profileName: {
    fontFamily: DefaultFonts.ExtraBold,
    fontSize: 15,
    left: 15,
  },
  infoContainer: {
    marginVertical: 7,
    marginHorizontal: 15,
    paddingVertical: 3,
  },
  infoTitle: {
    fontFamily: DefaultFonts.Bold,
    fontSize: 15,
    color: AppColors.text,
    left: 12,
  },
  infoSubtitle: {
    fontFamily: DefaultFonts.Medium,
    fontSize: 13,
    color: AppColors.primary,
    paddingLeft: 25,
  },
});

export default SearchResultCard;

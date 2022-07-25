import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';
import Avatar from '../../components/Avatar';
import AppColors from '../../themes/AppColors';
import {
  openDialer,
  openEmailClient,
  openLinkInDefaultBrowser,
  openMap,
} from '../../utils/externalAppLaunchHelpers';
import { getUserData } from '../redux/actions';
import { getCompleteAuthorData } from '../redux/selectors';
import InfoBlock from './components/InfoBlock';
import styles from './styles';

const Profile = ({ route }) => {
  const { authorID } = route.params;
  const dispatch = useDispatch();

  const authorData = useSelector(state => getCompleteAuthorData(state));

  useEffect(() => {
    dispatch(getUserData(authorID)).catch(error => {
      console.log('Caught in Profile -> getUserData', error);
    });
  }, [authorID, dispatch]);

  return (
    <>
      <AppHeader title="Profile" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoContainer}>
            <Avatar
              name={authorData.name}
              size={80}
              avatarStyle={styles.profilePicture}
              titleStyle={styles.profileName}
            />
            <InfoBlock
              title="Username"
              subtitle={authorData.username}
              icon="people"
            />
            <InfoBlock
              interactive
              title="Email"
              subtitle={authorData.email}
              icon="email"
              onPress={() => openEmailClient(authorData.email)}
            />
            <InfoBlock
              interactive
              title="Phone"
              subtitle={authorData.phone}
              icon="call"
              onPress={() => openDialer(authorData.phone)}
            />
            <InfoBlock
              interactive
              title="Website"
              subtitle={authorData.website}
              icon="laptop-chromebook"
              onPress={() => openLinkInDefaultBrowser(authorData.website)}
            />
          </View>
          <View style={styles.infoContainer}>
            <InfoBlock
              title="Address"
              subtitle={`${authorData.address.suite}, ${authorData.address.street}, ${authorData.address.city}, ${authorData.address.zipcode}`}
              icon="place"
            />
            <TouchableOpacity
              style={styles.locationContainer}
              activeOpacity={0.5}
              onPress={() => openMap(authorData.address.geo)}>
              <Icon name="map" size={18} color={AppColors.primary} />
              <Text style={styles.locationTitle}>Locate on Maps</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <InfoBlock
              title="Company Name"
              subtitle={authorData.company.name}
              icon="business"
            />
            <InfoBlock
              title="Business type"
              subtitle={authorData.company.bs}
              icon="business-center"
            />
            <InfoBlock
              title="Catch phrase"
              subtitle={authorData.company.catchPhrase}
              icon="chat-bubble"
            />
          </View>
          <View style={styles.emptyView} />
        </ScrollView>
      </View>
    </>
  );
};

export default Profile;

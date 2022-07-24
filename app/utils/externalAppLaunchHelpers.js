import { Linking, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';

export const openDialer = phone => {
  try {
    let phoneNumber =
      Platform.OS === 'ios' ? `telprompt:${phone}` : `tel:${phone}`;
    Linking.openURL(phoneNumber);
    return;
  } catch (error) {
    Toast.show('Please check the phone number and try again!', Toast.LONG);
    console.error(error);
  }
};

export const openEmailClient = email => {
  try {
    let emailAddress = `mailto:${email}`;
    Linking.openURL(emailAddress);
    return;
  } catch (error) {
    Toast.show('Please check the email address and try again!', Toast.LONG);
    console.error(error);
  }
};

export const openMap = coordinates => {
  try {
    const { lat: latitude, lng: longitude } = coordinates;
    // coordinates for the location
    const coords = `${latitude},${longitude}`;
    const url = Platform.select({
      ios: `maps:0,0?q=${coords}`,
      android: `geo:0,0?q=${coords}`,
    });
    Linking.openURL(url);
    return;
  } catch (error) {
    Toast.show('Please check the location and try again!', Toast.LONG);
    console.error(error);
  }
};

export const openLinkInDefaultBrowser = link => {
  try {
    Linking.openURL(`https://www.${link}`);
    return;
  } catch (error) {
    Toast.show('Please check the link and try again!', Toast.LONG);
    console.error(error);
  }
};

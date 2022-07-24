import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../themes/AppColors';

/** --------------------------
    Dashboard Card styles used in Dashboard
 --------------------------**/
export const homeSkeletonStyle = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: hp('10%'),
  padding: 15,
  marginHorizontal: 5,
  marginTop: 15,
  backgroundColor: AppColors.white,
  borderRadius: 18,
  borderWidth: 1,
  borderColor: 'red',
};

export const dashboardCardListSkeletonLayout = [
  {
    /** --------------------------
     Card Container
     -------------------------- **/
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    children: [
      {
        /** --------------------------
          Card Image
          -------------------------- **/
        width: 40,
        height: 40,
        marginHorizontal: 5,
      },
      {
        /** --------------------------
         Card Announcement title & Description container
         -------------------------- **/
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        children: [
          {
            /** --------------------------
                Card Announcement title
            -------------------------- **/
            width: 120,
            height: 15,
            margin: 5,
            flexDirection: 'column',
            alignItems: 'flex-start',
            children: [
              {
                width: 100,
                height: 15,
              },
            ],
          },
          {
            width: 50,
            height: 30,
            marginHorizontal: 5,
            position: 'absolute',
            right: wp(-35),
          },
        ],
      },
    ],
  },
];

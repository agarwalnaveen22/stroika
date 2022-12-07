import {Colors, Sizes} from 'common';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.lightGrey,
    borderRadius: Sizes.xm,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Sizes.xm,
  },
  avatar: {
    width: Sizes.x6l,
    height: Sizes.x6l,
    borderRadius: Sizes.xl,
    backgroundColor: Colors.lightTextGrey,
  },
  avatarImage: {
    width: Sizes.x6l,
    height: Sizes.x6l,
    borderRadius: Sizes.xl,
  },
  text: {
    flex: 1,
    paddingLeft: Sizes.l,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    height: Sizes.xxxl,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Sizes.s,
    alignSelf: 'flex-end',
    borderRadius: Sizes.s,
  },
  active: {
    backgroundColor: Colors.primary,
  },
  inactive: {
    backgroundColor: Colors.lightTextGrey,
  },
});

export default styles;

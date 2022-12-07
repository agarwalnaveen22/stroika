import {Colors, Sizes} from 'common';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    paddingHorizontal: Sizes.xm,
  },
  avatar: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 50,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  enableProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Sizes.xm,
    padding: Sizes.m,
    justifyContent: 'space-between',
  },
  footer: {
    padding: Sizes.xm,
  },
});

export default styles;

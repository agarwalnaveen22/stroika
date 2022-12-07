import {Colors, Sizes} from 'common';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: Sizes.xm,
    padding: Sizes.m,
  },
});

export default styles;

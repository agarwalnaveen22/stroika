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
  footer: {
    padding: Sizes.xm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageContainer: {
    padding: Sizes.xm,
    width: '70%',
    backgroundColor: Colors.lightGrey,
    borderRadius: Sizes.s,
    marginVertical: Sizes.xm,
  },
  fromContainer: {
    backgroundColor: Colors.darkGrey,
    alignSelf: 'flex-end',
  },
  fromText: {
    color: Colors.white,
  },
  chatDate: {
    alignSelf: 'flex-end',
  },
});

export default styles;

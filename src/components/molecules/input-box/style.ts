import {Colors, Sizes} from 'common';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.mediumGrey,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    paddingHorizontal: Sizes.m,
    fontSize: Sizes.l,
    lineHeight: 28,
  },
  errorContainer: {
    marginTop: Sizes.s,
    alignSelf: 'flex-start',
    paddingLeft: Sizes.xs,
  },
  errorBorder: {
    borderColor: Colors.error,
  },
});

export default styles;

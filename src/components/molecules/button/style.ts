import {Colors} from 'common';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 2,
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.lightGrey,
  },
  disabledLabel: {
    color: Colors.mediumGrey,
  },
  secondaryLabel: {
    color: Colors.primary,
  },
});

export default styles;

import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: 'white'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        backgroundColor: 'blue'
      }
    })
  },
  items: {
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
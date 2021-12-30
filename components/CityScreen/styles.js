import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({ 
  header: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  outerBox: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: 'black',
  }
})

export default styles;
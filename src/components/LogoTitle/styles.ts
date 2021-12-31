import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({ 
  logoWrap: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 35,
    marginTop: 15,
    marginBottom: 10,
  },
  TitleText: {
    color: 'white',
    textAlignVertical: 'center',
  },
  logoImage: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
  }
})

export default styles;
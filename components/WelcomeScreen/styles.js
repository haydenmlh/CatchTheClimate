import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  welcomeContainer: {
    width: '100%',
    height: '100%',
  },
  bgimage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  welcomeBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    // textShadowColor: 'rgba(0, 0, 0, 0.2)',
    // textShadowOffset: {width: 3, height: 2},
    // textShadowRadius: 1,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  welcomeSubtitle: {
    fontSize: 20,
  },
  searchBlock: {
    flex: 2,
  }
})

export default styles;
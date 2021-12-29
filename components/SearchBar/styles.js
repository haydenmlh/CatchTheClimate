import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    height: 64,
  },
  searchInput: {
    flex: 3,
    color: 'black',
    height: 40,
    margin: 12,
    marginTop: 30,
    borderRadius: 2,
    padding: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  }, 
  searchButton: {
    height: 40,
    width: 40,
    borderRadius: 2,
    margin: 12,
    marginTop: 30,
    marginLeft: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  searchImage: {
    width: undefined,
    height: '80%',
    margin: '10%',
    aspectRatio: 1,
  }
})

export default styles;
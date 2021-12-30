import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchWrap: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,   
  },
  searchInput: {
    flex: 3,
    color: 'black',
    height: 30,
    margin: 12,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 40,
    borderRadius: 3,
    padding: 0,
    paddingLeft: 15,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  }, 
  searchButton: {
    height: 30,
    width: 30,
    borderRadius: 3,
    marginTop: 10,
    marginRight: -10,
    marginLeft: 40,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  searchImage: {
    width: undefined,
    height: '60%',
    margin: '20%',
    marginRight: '0%',
    marginLeft: '20%',
    aspectRatio: 1,
  }
})

export default styles;
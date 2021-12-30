import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({ 
  text: {
    color: 'white',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  city: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: '500',
  },
  currentWrap: {
    // backgroundColor: 'red',
    marginRight: 20,
  },
  weatherIconNameWrap: {
    // backgroundColor: 'lime',
    width: 120,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
  },
  weatherIcon: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
    margin: -8,
  },
  weatherStatus: {
    textTransform: 'capitalize',
  },
  infoWrap: {
    // backgroundColor: 'red',
    width: '40%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  tempWrap: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tempCur: {
    fontSize: 30,
    paddingRight: 10,
  },
  tempMin: {

  },
  tempMax: {
    
  },
})

export default styles;

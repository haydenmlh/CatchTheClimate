import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 10,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  }, 
  sevenDaySingleWrap: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  sevenDayDate: {
  },
  sevenDayInfoWrap: {
    // backgroundColor: 'green',
    height: 50,
  },
  weatherIconNameWrap: {
    // backgroundColor: 'lime',
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  weatherIcon: {
    width: 60,
    height: undefined,
    aspectRatio: 1,
    margin: -15,
  },
  weatherStatus: {
    textTransform: 'capitalize',
  },
  textWrap: {
    // backgroundColor: 'red',
    width: '60%',
  },
  tempCol:{ 
    // backgroundColor: 'pink',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempWrap: {
  },
  tempCur: {
    fontSize: 18,
    paddingRight: 8,
  },
  tempMin: {

  },
  tempMax: {
    
  },
  windHumPrecCol: {
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})

export default styles;

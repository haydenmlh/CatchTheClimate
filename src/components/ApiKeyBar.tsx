import React from 'react';
import {View, Text, TextInput, StyleSheet, Linking, TouchableHighlight} from 'react-native';
import {useStorage} from '../utils/useStorage';

const ApiKeyBar = () => {
  const [apiKey, setApiKey] = useStorage("apikey", "");

  const setAndLogApiKey = (event) => {
    setApiKey(event);
    console.log(event);
  }

  const WeatherButton = () => {
    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
      activeOpacity: 1,
      underlayColor: '#d6d1ff',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.LinkPress : styles.LinkNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => Linking.openURL('https://openweathermap.org/'),                 // <-- "onPress" is apparently required
    };

    return(
      

      <View>
      <TouchableHighlight {...touchProps}>
      <Text style={styles.LinkText} onPress={() => Linking.openURL('https://openweathermap.org/')}>
          https://openweathermap.org/
        </Text>
      </TouchableHighlight>
      </View>
    );
  }

  return(
    <View style={styles.ApiWrap}>
      <View style={styles.Center}>
        <View style={styles.InstructionsWrap}>
          <Text style={styles.InstructionsTextFirstRow}>
            To begin, click on
          </Text>
          <WeatherButton />
        </View>
        <Text style={styles.InstructionsTextSecondRow}>
          Register an account to receive an API key
        </Text>
      </View>
      
      
      <TextInput 
      style={styles.ApiInput}
      placeholder='Enter your API Key'
      placeholderTextColor={'rgba(40, 40, 40, 1)'}
      returnKeyType={'search'}
      onSubmitEditing={(event) => (setAndLogApiKey(event.nativeEvent.text))} />
      
    </View>
  );
}


const styles = StyleSheet.create({
  ApiWrap: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    height: 200,
  },
  InstructionsWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  InstructionsTextFirstRow: {
    color: 'white',
  },
  InstructionsTextSecondRow: {
    color: 'white',
  },
  LinkNormal: {
    backgroundColor: '#edebff',
    marginLeft: 5,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  LinkPress: {
    backgroundColor: '#d6d1ff',
    marginLeft: 5,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  LinkText: {
    color: 'black',
  },
  Center: {
    alignItems: 'center'
  },
  ApiInput: {
    color: 'black',
    height: 30,
    margin: 12,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 3,
    padding: 0,
    paddingLeft: 15,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  }
})

export default ApiKeyBar;


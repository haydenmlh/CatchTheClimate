import React from 'react';
import {View, Text, TextInput, StyleSheet, Linking, TouchableHighlight} from 'react-native';
import {useStorage} from '../utils/useStorage';

const ApiKeyBar = () => {
  const [apiKey, setApiKey] = useStorage("apikey", "");

  const setAndLogApiKey = (text:string) => {
    setApiKey(text);
    console.log(text);
    let getApi;
    getApi = apiKey;
    console.log("stored: "+apiKey)
  }

  return(
    <TextInput 
      style={styles.ApiInput}
      placeholder='Enter your API Key'
      placeholderTextColor={'rgba(40, 40, 40, 1)'}
      returnKeyType={'search'}
      onSubmitEditing={(event) => (setAndLogApiKey(event.nativeEvent.text))} />
  );
}


const styles = StyleSheet.create({
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


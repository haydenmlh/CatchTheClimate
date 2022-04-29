import React from 'react';
import {TextInput, StyleSheet} from 'react-native'
import {useStorage} from '../utils/useStorage';
import apiVerify from '../api/apiVerify';
import Snackbar from 'react-native-snackbar';

const ApiKeyBar = (props) => {
  const [apiKey, setApiKey]: [any, (value: unknown) => void] = useStorage("apikey", "");

  const setAndTestApiKey = async (text:string) => {
    let status: number = await apiVerify(text);
    
    let display: string;
    if (status == 401) {
      display = 'Unauthorized API Key. Please try again.';
    } else if (status == 200) {
      display = "Success!";
    } else {
      display = 'Unknown error response from server: ' + status;
    }

    Snackbar.show({text: display, duration: Snackbar.LENGTH_SHORT});

    if (status == 200) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setApiKey(text);
      props.nav.navigate("CityDisplay");
      props.nav.reset({index: 0, routes: [{name: "CityDisplay"}]});
    }
  }

  return(
    <TextInput 
      style={styles.ApiInput}
      placeholder='Enter your API Key'
      placeholderTextColor={'rgba(40, 40, 40, 1)'}
      returnKeyType={'search'}
      onSubmitEditing={(event) => (setAndTestApiKey(event.nativeEvent.text))} />
  );
}


const styles = StyleSheet.create({
  ApiInput: {
    color: 'black',
    height: 30,
    margin: 12,
    marginTop: 15,
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


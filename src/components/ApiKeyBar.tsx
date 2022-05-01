import React, {useState} from 'react';
import { Button, View, TextInput, StyleSheet, Dimensions } from 'react-native'
import Snackbar from 'react-native-snackbar';

import { useStorage } from '../utils/useStorage';
import apiVerify from '../api/apiVerify';

const ApiKeyBar = (props) => {
  const [apiKey, setApiKey]: [any, (value: unknown) => void] = useStorage("apiKey", "");
  const successNav: () => any = props.successNav;
  const [entered, setEntered] = useState("");

  const testandSetApiKey = async (api:string) => {
    let status: number = await apiVerify(api);
    
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
      setApiKey(api);
      successNav();
    }
  }

  return(
    <View style={[styles.FlexCenterVertical]}>
      <TextInput 
        style={[styles.Margins, styles.ApiInput]}
        placeholder='Enter your API Key'
        placeholderTextColor={'rgba(40, 40, 40, 1)'}
        defaultValue = {apiKey}
        returnKeyType={'go'}
        onSubmitEditing={() => (entered ? testandSetApiKey(entered): testandSetApiKey(apiKey))}
        onChangeText={(entered) => setEntered(entered)}
      />
      <Button
          title="Set Key"
          onPress={() => (entered ? testandSetApiKey(entered): testandSetApiKey(apiKey))}
      />
    </View>
  );
}

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  ApiInput: {
    color: 'black',
    height: 30,
    width: screen.width * 0.85,
    marginBottom: 12,
    borderRadius: 3,
    padding: 0,
    paddingLeft: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  Margins: {
    color: 'white',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  }, 
  FlexCenterVertical: {
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default ApiKeyBar;


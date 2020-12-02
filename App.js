import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import config from './config';
import * as Google from 'expo-google-app-auth';

import LoggedInPage from './LoggedInPage';
import LoginPage from './LoginPage';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      accessToken: ""
    }
  }

  signIn = async () => {
    try {
      console.log(config.OAUTH2_GOOGLE_ANDROID_KEY);
      const result = await Google.logInAsync({
        androidClientId: config.OAUTH2_GOOGLE_ANDROID_KEY,
        scopes: ["profile", "email"],
        
      });
  
      if (result.type === "success") {
        console.log(result);
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          accessToken: result.accessToken
        })
  
        return result.accessToken;
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  onLogOut = () => {
    console.log("onLogOut")
    this.setState({
      signedIn: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} accessToken={this.state.accessToken} onLogOut={this.onLogOut}/>
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkorange",
    alignItems: "center",
    justifyContent: "center",
  },
});

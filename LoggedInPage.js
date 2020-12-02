import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import config from './config';

function LoggedInPage(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome: {props.name}</Text>
            {/* <Image style={styles.image} source="" /> */}
            <Button title="Log Out" onPress={() => logOut(props)} />
        </View>
    );
}

const logOut = async (props) => {
    try {
        const result = await Google.logOutAsync({
            accessToken: props.accessToken,
            androidClientId: config.OAUTH2_GOOGLE_ANDROID_KEY
        });
        
        props.onLogOut();
    } 
    catch (e){
        console.log("error", e);
    }
}

const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    image: {

    },
})

export default LoggedInPage;
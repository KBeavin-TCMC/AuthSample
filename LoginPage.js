import React from 'react';
import { View, Text, Button } from 'react-native';

function LoginPage(props) {
    return (
        <View>
            <Text>Hello World!</Text>
            <Button title="Auth" onPress={props.signIn}/>
        </View>
    );
}

export default LoginPage;
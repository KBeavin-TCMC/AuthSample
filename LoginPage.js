import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function LoginPage(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Sign In With Google</Text>

        <View style={styles.button}>
          <Button style={styles.button} title="Sign In With Google" onPress={() => props.signIn()} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        fontSize: 30,
    },
    button: {
        backgroundColor: "orange"
    },
})

export default LoginPage;
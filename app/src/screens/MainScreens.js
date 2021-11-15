import React from 'react'
import { StyleSheet, View, Button, Alert } from 'react-native'

const HelloWorldApp = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}
export default HelloWorldApp

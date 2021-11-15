import React from 'react'
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native'

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        style={styles.input}
      />
      <Button
        onPress={() => navigation.navigate('Login')}
        title="login"
        accessibilityLabel="login"
        style={styles.button}
      />

      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Signup"
        accessibilityLabel="Signup"
        style={styles.button}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
  },
})

export default Login

import React from 'react'
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native'
import axios from 'axios'
import api from '../api'
/**
 *
 * @param {}} param0
 * 이메일, 비밀번호, 닉네임으로 지갑 생성
 * @returns
 */
const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [nickname, setNickname] = React.useState('')

  const Signup = async () => {
    console.log('sign up!!')
    // 백엔드로 통신넘기기
    // axios
    //   .get('http://192.168.219.102:3000/users/', {})
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //
    let tmp = await api.signup()
    console.log('data:', tmp.data)
    return
  }

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
      <TextInput
        onChangeText={setNickname}
        value={nickname}
        placeholder="Nickname"
        style={styles.input}
      />
      <Button
        onPress={Signup}
        title="Signup"
        color="#841584"
        accessibilityLabel="Signup"
      />
    </View>
  )
}

export default Signup

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

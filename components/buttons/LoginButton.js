import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function LoginButton({ styles, onPress }) {
	return (
		<Button
			mode="contained"
			style={styles.loginButton}
			onPress={onPress}>
			<Text>Login</Text>
		</Button>
	)
}

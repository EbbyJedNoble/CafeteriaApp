import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function navLoginButton({ styles, onPress }) {
	return (
		<Button
			mode="contained"
			style={[styles.button, styles.menuButton]}
			onPress={onPress}>
			<Text>Login</Text>
		</Button>
	)
}

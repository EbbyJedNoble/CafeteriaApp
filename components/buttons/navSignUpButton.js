import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function SignUpButton({ styles, onPress }) {
	return (
		<Button
			mode="contained-tonal"
			style={[styles.button, styles.signUpButton]}
			onPress={onPress}>
			<Text>Signup</Text>
		</Button>
	)
}

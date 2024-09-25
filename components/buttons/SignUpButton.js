import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function SignUpButton({ styles, onPress }) {
	return (
		<Button
			mode="contained"
			style={styles.signUpButton}
			onPress={onPress}>
			<Text>Sign Up</Text>
		</Button>
	)
}

import React from 'react'
import { Button, Text, useTheme } from 'react-native-paper'

export default function LogoutButton({ onPress }) {
	const { colors } = useTheme()
	return (
		<Button
			mode="contained"
			buttonColor={colors.error}
			onPress={onPress}>
			<Text>Log Out</Text>
		</Button>
	)
}

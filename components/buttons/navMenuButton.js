import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function MenuButton({ styles, onPress }) {
	return (
		<Button
			mode="contained"
			style={styles.button}
			right
			icon="content-paste"
			contentStyle={styles.buttonIcon}
			onPress={onPress}>
			<Text>Menu</Text>
		</Button>
	)
}

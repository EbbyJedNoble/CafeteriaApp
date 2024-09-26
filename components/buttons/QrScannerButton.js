import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'

export default function QrScannerButton({ styles }) {
	return (
		<View style={styles.qrButtonBorderContainer}>
			<IconButton
				icon="qrcode-scan"
				size={42}
				style={styles.qrButton}
			/>
		</View>
	)
}

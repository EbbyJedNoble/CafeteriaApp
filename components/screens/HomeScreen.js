import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import MenuButton from '../buttons/navMenuButton'
import QrScannerButton from '../buttons/QrScannerButton'

export default function HomeScreen({ navigation }) {
	const handleMenuButton = () => {
		navigation.navigate('Menu')
	}
	return (
		<SafeAreaView style={styles.safeAreaView}>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.buttonContainer}>
					<MenuButton
						styles={styles}
						onPress={handleMenuButton}
					/>
					<Button
						mode="contained"
						style={styles.button}
						Cafeteria>
						<Text>Cafeteria</Text>
					</Button>
					<Button
						mode="contained"
						style={styles.button}
						Orders>
						<Text>Orders</Text>
					</Button>
				</View>
			</ScrollView>
			<View style={styles.qrButtonContainer}>
				<QrScannerButton styles={styles} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		justifyContent: 'space-between',
		width: '80%',
		marginVertical: 10
	},
	button: {
		width: '100%',
		borderRadius: 5,
		marginVertical: 10,
		paddingVertical: 20
	},
	buttonIcon: {
		flexDirection: 'row-reverse'
	},
	qrButtonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
		alignItems: 'center'
	},
	qrButtonBorderContainer: {
		borderWidth: 5, // Border thickness
		borderColor: '#663399', // Border color
		borderRadius: 50, // Ensures the border is circular
		padding: 10, // Space between the border and the icon
		width: 68, // IconButton size + padding (48 + padding of 10 = 68)
		height: 68, // Ensures a circular container
		justifyContent: 'center',
		alignItems: 'center'
	},
	qrButton: {
		alignSelf: 'center'
	}
})

import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginButton from '../buttons/navLoginButton'
import SignUpButton from '../buttons/navSignUpButton'
import useBackHandlerExit from '../../custom-hooks/useBackHandlerExit'
import { useAuth } from '../../contexts/AuthContext'
import LogoutButton from '../buttons/LogoutButton'
import { Text } from 'react-native-paper'

export default function SettingsScreen({ navigation }) {
	const Auth = useAuth()
	useBackHandlerExit()

	const handleLoginButton = () => {
		navigation.navigate('Login')
	}

	const handleSignUpButton = () => {
		navigation.navigate('SignUp')
	}

	const handleLogoutButton = () => {
		Auth.setRole('customer')
		Auth.logout()
		navigation.navigate('Home')
	}

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				{!Auth.isLoggedIn ? (
					<View style={styles.loginContainer}>
						<LoginButton
							styles={styles}
							onPress={handleLoginButton}
						/>
						<View style={styles.separator} />
						<SignUpButton
							styles={styles}
							onPress={handleSignUpButton}
						/>
					</View>
				) : (
					<Text variant="displaySmall">Hello User</Text>
				)}

				<Text variant="titleLarge">Setting 1</Text>
				<Text variant="titleLarge">Setting 2</Text>
				<Text variant="titleLarge">Setting 3</Text>
				<Text variant="titleLarge">Setting 4</Text>

				{Auth.isLoggedIn && (
					<View style={styles.logoutContainer}>
						<LogoutButton onPress={handleLogoutButton} />
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingHorizontal: 20
	},
	loginContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	button: {
		flex: 1
	},
	loginButton: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
	signUpButton: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0
	},
	logoutContainer: {
		alignItems: 'center'
	},
	separator: {
		width: 1,
		backgroundColor: '#ccc',
		height: '100%'
	}
})

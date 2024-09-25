import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Text } from 'react-native-paper'
import LoginButton from '../buttons/LoginButton'
import useHideBottomTabs from '../../custom-hooks/useHideTabbar'
import { useAuth } from '../../contexts/AuthContext'
import { concessionaires } from '../../testAccounts/concessionares'

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState('') // State for email
	const [password, setPassword] = useState('') // State for password
	const Auth = useAuth()
	useHideBottomTabs(navigation)

	const loginButtonOnPress = () => {
		const accounts = concessionaires()

		const isConcessionaire = accounts.find((account) => {
			return account.email === email && account.password === password
		})

		if (isConcessionaire) {
			Auth.setRole('concessionaire')
		} else {
			Auth.setRole('customer')
		}

		Auth.login()
		navigation.goBack()
		navigation.navigate('Home')
	}

	const handlePassResetPressable = () => {
		navigation.navigate('Reset Password')
	}

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TextInput
					label="Email"
					value={email} // Bind the email state
					onChangeText={setEmail} // Update state on text change
					style={styles.textInput}
				/>

				<TextInput
					label="Password"
					value={password} // Bind the password state
					onChangeText={setPassword} // Update state on text change
					secureTextEntry
					right={<TextInput.Icon icon="eye" />}
					style={styles.textInput}
				/>

				<Pressable
					style={styles.pressable}
					onPress={handlePassResetPressable}>
					<Text style={styles.pressableText}>Forgot Password</Text>
				</Pressable>

				<LoginButton
					styles={styles}
					onPress={loginButtonOnPress}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 20
	},
	textInput: {
		marginTop: 20
	},
	pressable: {
		marginTop: 10
	},
	pressableText: {
		color: '#663399'
	},
	loginButton: {
		marginTop: 20,
		marginRight: 10,
		alignSelf: 'flex-end'
	}
})

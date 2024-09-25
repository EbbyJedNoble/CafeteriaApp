import { View, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text, RadioButton, Checkbox } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignUpButton from '../buttons/SignUpButton'
import useHideBottomTabs from '../../custom-hooks/useHideTabbar'

export default function SignUpScreen({ navigation }) {
	useHideBottomTabs(navigation)

	const [dataConsentChecked, setDataConsentChecked] = useState(false)
	const [termsChecked, setTermsChecked] = useState(false)

	const signUpButtonOnPress = () => {
		navigation.replace('Login')
	}

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<Text variant="labelLarge">Login Details</Text>

				<TextInput
					label="Email"
					style={styles.textInput}
				/>

				<TextInput
					label="Password"
					secureTextEntry
					right={<TextInput.Icon icon="eye" />}
					style={styles.textInput}
				/>

				<TextInput
					label="Confirm password"
					secureTextEntry
					right={<TextInput.Icon icon="eye" />}
					style={styles.textInput}
				/>

				<View style={styles.separator} />

				<Text variant="labelLarge">User Details</Text>

				<TextInput
					label="First Name"
					style={styles.textInput}
				/>

				<TextInput
					label="Last Name"
					style={styles.textInput}
				/>

				<View style={styles.checkboxContainer}>
					<RadioButton
						status={dataConsentChecked ? 'checked' : 'unchecked'}
						onPress={() => setDataConsentChecked(!dataConsentChecked)}
					/>
					<Text style={styles.checkboxLabel}>data consent checked</Text>
				</View>

				<View style={styles.checkboxContainer}>
					<RadioButton
						status={termsChecked ? 'checked' : 'unchecked'}
						onPress={() => setTermsChecked(!termsChecked)}
					/>
					<Text style={styles.checkboxLabel}>terms checked</Text>
				</View>

				<SignUpButton
					styles={styles}
					onPress={signUpButtonOnPress}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 10
	},
	textInput: {
		marginTop: 10
	},
	signUpButton: {
		marginTop: 20,
		marginRight: 10,
		alignSelf: 'flex-end'
	},
	separator: {
		marginTop: 50
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10
	},
	checkboxLabel: {
		marginLeft: 10
	}
})

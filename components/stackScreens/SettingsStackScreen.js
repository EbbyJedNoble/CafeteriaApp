import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import SettingsScreen from '../screens/SettingsScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'

const SettingsStack = createNativeStackNavigator()

export default function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={screenOptions}
			/>
			<SettingsStack.Screen
				name="Login"
				component={LoginScreen}
			/>
			<SettingsStack.Screen
				name="SignUp"
				component={SignUpScreen}
			/>
			<SettingsStack.Screen
				name="Reset Password"
				component={ResetPasswordScreen}
			/>
		</SettingsStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false
}

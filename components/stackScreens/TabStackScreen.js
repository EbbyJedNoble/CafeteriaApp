import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './HomeStackScreen'
import ConcessionaireStackScreen from './ConcessionaireStackScreen'
import SettingsStackScreen from './SettingsStackScreen'
import { useAuth } from '../../contexts/AuthContext'

const Tab = createBottomTabNavigator()

export default function TabStackScreen() {
	const Auth = useAuth()

	return (
		<Tab.Navigator
			backBehavior="initialRoute"
			screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Home"
				component={HomeStackScreen}
			/>
			{Auth.role === 'concessionaire' && (
				<Tab.Screen
					name="Concessionaire"
					component={ConcessionaireStackScreen}
				/>
			)}
			<Tab.Screen
				name="Settings"
				component={SettingsStackScreen}
			/>
		</Tab.Navigator>
	)
}

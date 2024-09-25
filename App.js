import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { AuthProvider } from './contexts/AuthContext'
import TabStackScreen from './components/stackScreens/TabStackScreen'

export default function App() {
	return (
		<PaperProvider>
			<SafeAreaProvider>
				<AuthProvider>
					<NavigationContainer>
						<TabStackScreen />
					</NavigationContainer>
				</AuthProvider>
			</SafeAreaProvider>
		</PaperProvider>
	)
}

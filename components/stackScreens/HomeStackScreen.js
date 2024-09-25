import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'

const HomeStack = createNativeStackNavigator()

export default function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={screenOptions}
			/>
		</HomeStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false
}

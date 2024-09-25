import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ConcessionaireScreen from '../screens/ConcessionaireScreen'

const ConcessionaireStack = createNativeStackNavigator()

export default function ConcessionaireStackScreen() {
	return (
		<ConcessionaireStack.Navigator>
			<ConcessionaireStack.Screen
				name="ConcessionaireScreen"
				component={ConcessionaireScreen}
				options={screenOptions}
			/>
		</ConcessionaireStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false
}

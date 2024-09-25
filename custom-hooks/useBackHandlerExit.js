import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { BackHandler } from 'react-native'

export default function useBackHandlerExit() {
	const handleBackPress = () => {
		BackHandler.exitApp()
	}

	useFocusEffect(
		useCallback(() => {
			BackHandler.addEventListener('hardwareBackPress', handleBackPress)

			return () =>
				BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
		}, [])
	)
}

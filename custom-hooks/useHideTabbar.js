import { useEffect } from 'react'

export default function useHideBottomTabs(navigation) {
	useEffect(() => {
		navigation.getParent()?.setOptions({
			tabBarStyle: {
				display: 'none'
			}
		})
		return () =>
			navigation.getParent()?.setOptions({
				tabBarStyle: undefined
			})
	}, [navigation])
}

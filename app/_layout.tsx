import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';

SplashScreen.preventAutoHideAsync();

export default function RootRayout() {
	const insets = useSafeAreaInsets();

	const [loaded, error] = useFonts({
		'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
		'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			{/* <StatusBar style="light" /> */}
			<Stack
				screenOptions={{
					statusBarColor: Colors.black,
					contentStyle: {
						backgroundColor: Colors.black,
						paddingTop: insets.top,
					},
				}}
			>
				<Stack.Screen
					name="index"
					options={{
						presentation: 'modal',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="restore"
					options={{
						presentation: 'modal',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="[...unmathed]"
					options={{
						presentation: 'modal',
						headerShown: false,
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}

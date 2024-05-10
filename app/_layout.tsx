import { Stack } from 'expo-router';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';

export default function RootRayout() {
	const insets = useSafeAreaInsets();
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
			</Stack>
		</SafeAreaProvider>
	);
}

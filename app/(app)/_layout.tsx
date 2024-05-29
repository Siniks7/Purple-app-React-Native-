import { Redirect, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { authAtom } from '../../entities/auth/model/auth.state';
import { Colors } from '../../shared/tokens';

export default function AppRayout() {
	const insets = useSafeAreaInsets();
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href="/login" />;
	}

	return (
		<SafeAreaProvider>
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
			</Stack>
		</SafeAreaProvider>
	);
}

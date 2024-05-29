import { router, useRootNavigationState } from 'expo-router';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { authAtom } from '../../entities/auth/model/auth.state';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	// const [auth, login] = useAtom(loginAtom);
	// const logout = useSetAtom(logoutAtom);
	const { access_token } = useAtomValue(authAtom);
	const state = useRootNavigationState();
	useEffect(() => {
		if (!state?.key) return;
		if (!access_token) {
			router.replace('/login');
		}
	}, [access_token, state]);

	return (
		<View>
			<Text style={{ color: Colors.white }}>index</Text>
		</View>
	);
}

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { logoutAtom } from '../../entities/auth/model/auth.state';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	// const [auth, login] = useAtom(loginAtom);
	const logout = useSetAtom(logoutAtom);
	useEffect(() => {
		// login({ email: 'vasia@pupkin.ru', password: '12345678' });
		logout();
	}, []);

	return (
		<View>
			<Text style={{ color: Colors.white }}>index</Text>
		</View>
	);
}

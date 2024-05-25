import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { loginAtom } from '../../entities/auth/model/auth.state';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	const [auth, login] = useAtom(loginAtom);
	useEffect(() => {
		login({ email: 'vasia@pupkin.ru', password: '12345678' });
	}, []);

	return (
		<View>
			<Text style={{ color: Colors.white }}>{auth?.access_token}</Text>
		</View>
	);
}

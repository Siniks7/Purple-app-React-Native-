import { useSetAtom } from 'jotai';
import { Text, View } from 'react-native';
import { logoutAtom } from '../../entities/auth/model/auth.state';
import { Button } from '../../shared/Button/Button';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	const logout = useSetAtom(logoutAtom);
	return (
		<View>
			<Text style={{ color: Colors.white }}>index</Text>
			<Button text="Выход" onPress={logout} />
		</View>
	);
}

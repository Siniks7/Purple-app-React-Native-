import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Colors } from '../shared/tokens';

export default function Restore() {
	return (
		<View>
			<Link href={'/'}>
				<Text style={{ color: Colors.white }}>Profile</Text>
			</Link>
		</View>
	);
}

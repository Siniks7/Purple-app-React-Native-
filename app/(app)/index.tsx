import { useAtom } from 'jotai';
import { Text, View } from 'react-native';
import { profileAtom } from '../../entities/user/model/user.state';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	const [profile] = useAtom(profileAtom);

	return (
		<View>
			<Text style={{ color: Colors.white }}>{profile.profile?.name}</Text>
		</View>
	);
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	useEffect(() => {
		AsyncStorage.setItem('demo', 'test').then(async () => {
			console.log(await AsyncStorage.getAllKeys());
			console.log(await AsyncStorage.getItem('demo'));
			console.log(await AsyncStorage.removeItem('demo'));
			console.log(await AsyncStorage.getItem('demo'));
		});
	}, []);

	return (
		<View>
			<Text style={{ color: Colors.white }}>MyCourses</Text>
		</View>
	);
}

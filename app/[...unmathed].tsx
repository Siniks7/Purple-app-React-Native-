import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Gaps } from '../shared/tokens';

export default function UnmatchedCustom() {
	const styles = StyleSheet.create({
		container: {
			justifyContent: 'center',
			flex: 1,
			padding: 55,
			backgroundColor: Colors.black,
		},
		content: {
			alignItems: 'center',
			gap: Gaps.g50,
		},
		info: {
			marginTop: -70,
			color: Colors.white,
		},
		logo: {
			width: 260,
		},
		link: {
			color: Colors.primary,
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('../assets/images/unmatched.png')}
					resizeMode="contain"
				/>
				<Text style={styles.info}>
					Ооо...что-то пошло не так. Попробуйте вернуться на главный экран приложения.
				</Text>
				<Link href={'/'}>
					<Text style={styles.link}>На главный экран</Text>
				</Link>
			</View>
		</View>
	);
}

import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';

export default function App() {
	const [error, setError] = useState<string | undefined>();

	const alert = () => {
		setError('Неверный логин и пароль');
		setTimeout(() => {
			setError(undefined);
		}, 4000);
	};

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
		form: {
			alignSelf: 'stretch',
			gap: Gaps.g16,
		},
		logo: {
			width: 220,
		},
		link: {
			color: Colors.primary,
		},
	});

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input isPassword placeholder="Пароль" />
					<Button text="Войти" onPress={alert} />
				</View>
				<Link href={'/restoreц'}>
					<Text style={styles.link}>Восстановить пароль</Text>
				</Link>
			</View>
		</View>
	);
}

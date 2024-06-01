import { router } from 'expo-router';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { loginAtom } from '../entities/auth/model/auth.state';
import { Button } from '../shared/Button/Button';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';

export default function App() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const submit = () => {
		if (!email) {
			setLocalError('Не введён email');
			return;
		}
		if (!password) {
			setLocalError('Не введён пароль');
			return;
		}
		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	useEffect(() => {
		if (access_token) {
			router.replace('/');
		}
	}, [access_token]);

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
	});

	return (
		<View style={styles.container}>
			<ErrorNotification error={localError} />
			<View style={styles.content}>
				<Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" onChangeText={setEmail} />
					<Input isPassword placeholder="Пароль" onChangeText={setPassword} />
					<Button text="Войти" onPress={submit} isLoading={isLoading} />
				</View>
				<CustomLink href={'/restore'} text="Восстановить пароль" />
			</View>
		</View>
	);
}

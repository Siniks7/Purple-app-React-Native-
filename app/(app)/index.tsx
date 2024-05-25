import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { API } from '../../entities/auth/model/api/api';
import { IAuthResponse } from '../../entities/auth/model/auth.intefaces';
import { profileAtom } from '../../entities/user/model/user.state';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	const [profile] = useAtom(profileAtom);

	const login = async () => {
		const { data } = await axios.post<IAuthResponse>(API.login, {
			email: 'siniks7@yandex.ru',
			password: '434543Qw',
		});
		console.log(data);
	};

	useEffect(() => {
		login();
	}, []);

	return (
		<View>
			<Text style={{ color: Colors.white }}>{profile.profile?.name}</Text>
		</View>
	);
}

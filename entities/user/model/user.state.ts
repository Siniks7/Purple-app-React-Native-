import axios, { AxiosError } from 'axios';
import { atom } from 'jotai';
import { authAtom } from '../../auth/model/auth.state';
import { API } from './api/api';
import { User } from './user.model';

export const profileAtom = atom<UserState>({
	profile: null,
	isLoading: false,
	error: null,
});

export const updateProfileAtom = atom(
	async (get) => {
		return get(profileAtom);
	},
	async (get, set, { photo }: { photo: string }) => {
		try {
			const { access_token } = await get(authAtom);
			set(profileAtom, {
				isLoading: true,
				profile: null,
				error: null,
			});
			const { data } = await axios.patch<IProfile>(
				API.profile,
				{
					photo,
				},
				{
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				},
			);
			set(profileAtom, {
				isLoading: false,
				profile: data.profile,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(profileAtom, {
					isLoading: false,
					profile: null,
					error: error.response?.data.message,
				});
			}
		}
	},
);

export const loadProfileAtom = atom(
	async (get) => {
		return get(profileAtom);
	},
	async (get, set) => {
		const { access_token } = await get(authAtom);
		set(profileAtom, {
			isLoading: true,
			profile: null,
			error: null,
		});
		try {
			const { data } = await axios.get<IProfile>(API.profile, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});
			set(profileAtom, {
				isLoading: false,
				profile: data.profile,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(profileAtom, {
					isLoading: false,
					profile: null,
					error: error.response?.data.message,
				});
			}
		}
	},
);

export interface UserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}

export interface IProfile {
	profile: User | null;
}

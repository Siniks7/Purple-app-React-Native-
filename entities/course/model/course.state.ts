import axios, { AxiosError } from 'axios';
import { atom } from 'jotai';
import { authAtom } from '../../auth/model/auth.state';
import { API } from '../api/api';
import { StudentCourseDescription } from './course.model';

export const courseAtom = atom<CourseState>({
	courses: [],
	isLoading: false,
	error: null,
});

export const loadCourseAtom = atom(
	async (get) => {
		return get(courseAtom);
	},
	async (get, set) => {
		try {
			const { access_token } = await get(authAtom);
			set(courseAtom, {
				isLoading: true,
				courses: [],
				error: null,
			});
			const { data } = await axios.get<IMyCourses>(API.my, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});
			set(courseAtom, {
				isLoading: false,
				courses: [...data.my, ...data.other],
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(courseAtom, {
					isLoading: false,
					courses: [],
					error: error.response?.data.message,
				});
			}
		}
	},
);

export interface CourseState {
	courses: StudentCourseDescription[];
	isLoading: boolean;
	error: string | null;
}

export interface IMyCourses {
	other: StudentCourseDescription[];
	my: StudentCourseDescription[];
}

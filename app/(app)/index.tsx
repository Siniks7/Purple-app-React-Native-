import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { Colors } from '../../shared/tokens';

export default function MyCourses() {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	return (
		<View>
			<Text style={{ color: Colors.white }}>Курсы</Text>
			{courses.length > 0 &&
				courses.map((c) => (
					<Text style={{ color: Colors.white }} key={c.id}>
						{c.title}
					</Text>
				))}
		</View>
	);
}

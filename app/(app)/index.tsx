/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { CourseItem } from '../../entities/course/ui/courseItem/courseItem';

export default function MyCourses() {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	return (
		<View style={styles.container}>
			{courses.length > 0 && courses.map((c) => <CourseItem key={c.id} {...c}></CourseItem>)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 15,
	},
});

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StudentCourseDescription } from '../../entities/course/model/course.model';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { CourseCard } from '../../entities/course/ui/courseCard/courseCard';

export default function MyCourses() {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
		return (
			<View style={styles.item}>
				<CourseCard {...item} />
			</View>
		);
	};

	return (
		// <ScrollView>
		// 	<View style={styles.wrapper} key="1843">
		// 		{courses.length > 0 && courses.map((c) => <CourseCard {...c} key={c.id} />)}
		// 	</View>
		// </ScrollView>
		<>
			{courses.length > 0 && (
				<FlatList
					data={courses}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderCourse}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 20,
	},
});

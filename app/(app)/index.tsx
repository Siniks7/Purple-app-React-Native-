/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Notificaitons from 'expo-notifications';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { StudentCourseDescription } from '../../entities/course/model/course.model';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { Button } from '../../shared/Button/Button';
import { Colors } from '../../shared/tokens';
import { CourseCard } from '../../widget/course/ui/courseCard/courseCard';

export default function MyCourses() {
	const { isLoading, courses } = useAtomValue(courseAtom);
	const loadCourse = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourse();
	}, []);

	const allowsNotification = async () => {
		const settings = await Notificaitons.getPermissionsAsync();
		return (
			settings.granted || settings.ios?.status == Notificaitons.IosAuthorizationStatus.PROVISIONAL
		);
	};

	const requestPermissions = async () => {
		return Notificaitons.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: true,
			},
		});
	};

	const scheduleNotification = async () => {
		const granted = await allowsNotification();
		if (!granted) {
			await requestPermissions();
		}
		Notificaitons.scheduleNotificationAsync({
			content: {
				title: 'Новый курс TypeScript',
				body: 'Начни учиться уже сейчас!',
				data: { alias: 'typescript' },
			},
			trigger: {
				seconds: 2,
			},
		});
	};

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
			{isLoading && (
				<ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
			)}
			<Button text="Напомнить" onPress={scheduleNotification} />
			{courses.length > 0 && (
				<FlatList
					refreshControl={
						<RefreshControl
							tintColor={Colors.primary}
							titleColor={Colors.primary}
							refreshing={isLoading}
							onRefresh={loadCourse}
						/>
					}
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
	activity: {
		marginTop: 30,
	},
});

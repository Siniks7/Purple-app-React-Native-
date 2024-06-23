/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../../shared/Button/Button';
import { Chip } from '../../../../shared/Chip/Chip';
import { Colors, Fonts } from '../../../../shared/tokens';
import { StudentCourseDescription } from '../../model/course.model';

export function CourseItem({
	id,
	image,
	title,
	courseOnDirection,
	tariffs,
	progress,
}: StudentCourseDescription) {
	return (
		<View key={id} style={styles.container}>
			{image.length && (
				<Image
					style={styles.logo}
					source={{
						uri: image,
					}}
				></Image>
			)}
			<Text style={styles.text}>{title}</Text>
			<View style={styles.chip}>
				{courseOnDirection.map((d) => (
					<Chip text={d.direction.name}></Chip>
				))}
			</View>
			<View style={styles.buttonWrapper}>
				<Button style={styles.button} text="Купить курс"></Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		height: 200,
	},
	text: {
		color: Colors.white,
		paddingLeft: 20,
		fontFamily: Fonts.regular,
		fontSize: Fonts.f20,
	},
	chip: {
		flexDirection: 'row',
		paddingLeft: 20,
	},
	container: {
		gap: 10,
	},
	button: {
		width: 200,
		height: 50,
	},
	buttonWrapper: {
		backgroundColor: Colors.blackLight,
		height: 100,
		paddingLeft: 20,
		paddingBottom: 5,
		justifyContent: 'center',
	},
});

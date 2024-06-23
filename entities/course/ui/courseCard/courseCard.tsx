import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../../shared/Button/Button';
import { Chip } from '../../../../shared/Chip/Chip';
import { Colors, Fonts, Radius } from '../../../../shared/tokens';
import { StudentCourseDescription } from '../../model/course.model';

export function CourseCard({ image, title, courseOnDirection }: StudentCourseDescription) {
	return (
		<View style={styles.card}>
			<Image
				source={{
					uri: image,
				}}
				style={styles.image}
				height={200}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.chips}>
					{courseOnDirection.length > 0 &&
						courseOnDirection.map((c) => <Chip text={c.direction.name} />)}
				</View>
			</View>
			<View style={styles.footer}>
				<Button text="Купить" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		flexDirection: 'column',
		borderRadius: Radius.r10,
		backgroundColor: Colors.blackLight,
		gap: 5,
	},
	image: {},
	title: { fontFamily: Fonts.regular, fontSize: Fonts.f20, color: Colors.white },
	chips: {
		flexDirection: 'row',
	},
	header: { gap: 5 },
	footer: {},
});

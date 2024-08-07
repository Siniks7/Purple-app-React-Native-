import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import { StudentCourseDescription } from '../../../../entities/course/model/course.model';
import { Button } from '../../../../shared/Button/Button';
import { Chip } from '../../../../shared/Chip/Chip';
import { Colors, Fonts, Gaps, Radius } from '../../../../shared/tokens';

export function CourseCard({
	id,
	image,
	shortTitle,
	courseOnDirection,
	alias,
	tariffs,
}: StudentCourseDescription) {
	return (
		<View style={styles.card} key={id}>
			<Image
				source={{
					uri: image,
				}}
				style={styles.image}
				height={200}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>{shortTitle}</Text>
				<View style={styles.chips}>
					{courseOnDirection.length > 0 &&
						courseOnDirection.map((c) => <Chip text={c.direction.name} />)}
				</View>
				{tariffs && (
					<MaskedView
						maskElement={<Text style={styles.tariff}>Тариф &laquo;{tariffs[0].name}&raquo;</Text>}
					>
						<LinearGradient
							colors={['#D77BE5', '#6C38CC']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						>
							<Text style={{ ...styles.tariff, ...styles.tariffWithOpacity }}>
								Тариф &laquo;{tariffs[0].name}&raquo;
							</Text>
						</LinearGradient>
					</MaskedView>
				)}
			</View>
			<View style={styles.footer}>
				<Button
					text="Купить"
					onPress={() => Linking.openURL(`https://purpleschool.ru/course/${alias}`)}
				/>
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
	image: {
		borderRadius: 10,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	title: {
		fontSize: Fonts.f21,
		color: Colors.white,
		fontFamily: Fonts.semibold,
		marginBottom: 12,
	},
	chips: {
		flexDirection: 'row',
		gap: Gaps.g10,
	},
	header: {
		paddingHorizontal: 24,
		paddingVertical: 18,
	},
	footer: {
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		paddingVertical: 20,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	tariff: {
		marginTop: 10,
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
	},
	tariffWithOpacity: {
		opacity: 0,
	},
});

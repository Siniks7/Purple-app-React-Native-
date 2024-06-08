import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomLink } from '../../../../shared/CustomLink/CustomLink';
import { Colors } from '../../../../shared/tokens';

export function CustomDrawer(props: DrawerContentComponentProps) {
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<View>
				<Text>Текст</Text>
			</View>
			<View>
				<CustomLink text="Выход" href={'/login'} />
				<Image
					style={styles.logo}
					source={require('../../../../assets/logo.png')}
					resizeMode="contain"
				/>
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.black,
	},
	logo: {
		width: 220,
	},
});

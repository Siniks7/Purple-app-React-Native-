import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useSetAtom } from 'jotai';
import { Image, StyleSheet, Text, View } from 'react-native';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';
import { CustomLink } from '../../../../shared/CustomLink/CustomLink';
import { Colors } from '../../../../shared/tokens';
import { CloseDrawer } from '../CloseDrawer/CloseDrawer';

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom);
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />
				<Text>Текст</Text>
			</View>
			<View style={styles.footer}>
				<CustomLink text="Выход" onPress={() => logout()} href={'/login'} />
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
		width: 160,
	},
	content: {
		flex: 1,
	},
	footer: {
		gap: 50,
		alignItems: 'center',
		marginBottom: 40,
	},
});

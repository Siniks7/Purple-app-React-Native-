import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';
import { loadProfileAtom } from '../../../../entities/user/model/user.state';
import { UserMenu } from '../../../../entities/user/ui/UserMenu/UserMenu';
import { CustomLink } from '../../../../shared/CustomLink/CustomLink';
import { Colors } from '../../../../shared/tokens';
import { CloseDrawer } from '../CloseDrawer/CloseDrawer';

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom);
	const [profile, loadProfile] = useAtom(loadProfileAtom);

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<CloseDrawer {...props.navigation} />
			<View style={styles.content}>
				<UserMenu user={profile.profile} />
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
		alignItems: 'center',
		marginTop: 20,
	},
	footer: {
		gap: 50,
		alignItems: 'center',
		marginBottom: 40,
	},
});

import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CoursesIcon from '../../../../assets/menu/courses';
import ProfileIcon from '../../../../assets/menu/profile';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';
import { loadProfileAtom } from '../../../../entities/user/model/user.state';
import { MenuItem } from '../../../../entities/user/ui/MenuItem/MenuItem';
import { UserMenu } from '../../../../entities/user/ui/UserMenu/UserMenu';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { CustomLink } from '../../../../shared/CustomLink/CustomLink';
import { Colors } from '../../../../shared/tokens';

const MENU = [
	{ text: 'Курсы', icon: <CoursesIcon />, path: 'index' },
	{ text: 'Профиль', icon: <ProfileIcon />, path: 'profile' },
];

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
				{MENU.map((menu) => (
					<MenuItem key={menu.path} {...menu} drawer={{ ...props }} />
				))}
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
		marginTop: 20,
	},
	footer: {
		gap: 50,
		alignItems: 'center',
		marginBottom: 40,
	},
});

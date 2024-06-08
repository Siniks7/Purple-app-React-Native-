import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { Pressable, StyleSheet, View } from 'react-native';
import CloseIcon from '../../../../assets/icons/close';

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View style={styles.button}>
				<CloseIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
});

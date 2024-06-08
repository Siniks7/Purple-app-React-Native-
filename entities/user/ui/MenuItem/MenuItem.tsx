import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { ReactNode, useState } from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../../shared/tokens';

interface MenuItemProps {
	navigation: DrawerNavigationHelpers;
	icon: ReactNode;
	text: string;
	path: string;
}

export function MenuItem({
	navigation,
	icon,
	text,
	path,
	...props
}: MenuItemProps & PressableProps) {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<Pressable
			{...props}
			onPress={() => navigation.navigate(path)}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
		>
			<View
				style={{ ...styles.item, backgroundColor: clicked ? Colors.violetDark : Colors.blackLight }}
			>
				{icon}
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	item: {
		alignItems: 'center',
		height: 60,
		flexDirection: 'row',
		gap: 10,
		width: 278,
		paddingLeft: 10,
	},
	text: {
		color: Colors.white,
	},
});

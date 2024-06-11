import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);

	return (
		<View style={styles.container}>
			<Avatar image={image} />
			<ImageUploader onUpload={setImage} onError={(e) => console.log(e)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g20,
		alignItems: 'center',
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});

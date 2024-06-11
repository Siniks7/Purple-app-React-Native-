/* eslint-disable prettier/prettier */
import {
	MediaTypeOptions,
	PermissionStatus,
	launchCameraAsync,
	useCameraPermissions
} from 'expo-image-picker';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import UploadIcon from '../../assets/icons/upload';
import { Colors, Fonts, Gaps, Radius } from '../tokens';

interface ImageUploaderProps {
	onUpload: (uri: string) => void;
}

export function CameraUploader({ onUpload }: ImageUploaderProps) {
	const [cameraPermissions, requestCameraPermission] = useCameraPermissions();

	const varifyCameraPermissions = async () => {
		if (cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestCameraPermission();
			return res.granted;
		}
		if (cameraPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('Недостаточно прав для доступа к камере');
			return false;
		}
		return true;
	};

	const captureAvatar = async () => {
		const isPermissionGranted = await varifyCameraPermissions();
		if (!isPermissionGranted) {
			return;
		}
		const result = await launchCameraAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		if (!result.assets) {
			return;
		}
		onUpload(result.assets[0].uri);
	};

	return (
		<Pressable onPress={captureAvatar}>
			<View style={styles.container}>
				<UploadIcon />
				<Text style={styles.text}>Загрузить снимок экрана</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g8,
		backgroundColor: Colors.violetDark,
		borderRadius: Radius.r10,
		paddingHorizontal: 20,
		paddingVertical: 17,
		alignItems: 'center',
	},
	text: {
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
		color: Colors.white,
	},
});

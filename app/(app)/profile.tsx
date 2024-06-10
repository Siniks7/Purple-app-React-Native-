import {
	MediaTypeOptions,
	PermissionStatus,
	launchCameraAsync,
	useCameraPermissions,
} from 'expo-image-picker';
import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button } from '../../shared/Button/Button';

export default function Profile() {
	const [image, setImage] = useState(null);
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

	const pickAvatar = async () => {
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
		console.log(result);
	};

	return (
		<View>
			<Button text="Выбрать изображение" onPress={pickAvatar} />
		</View>
	);
}

import * as Notificaitons from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const router = useRouter();

export function Notificaiton() {
	Notificaitons.setNotificationHandler({
		handleNotification: async () => ({
			shouldPlaySound: true,
			shouldSetBadge: true,
			shouldShowAlert: true,
		}),
	});

	useEffect(() => {
		const subRecieved = Notificaitons.addNotificationReceivedListener((notification) => {
			console.log(notification.request.content.data);
		});
		const subResponseReceived = Notificaitons.addNotificationResponseReceivedListener(
			(notification) => {
				const alias = notification.notification.request.content.data.alias;
				const path = `/(app)/course/${alias}`;
				console.log(path);
				router.push(path);
				// router.replace('/restore');
				// return <Redirect href={path} />;
				// router.replace(`/(app)/course/${alias}`);
			},
		);
		return () => {
			subRecieved.remove();
			subResponseReceived.remove();
		};
	}, []);

	return <></>;
}

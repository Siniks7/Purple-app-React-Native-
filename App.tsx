import { Button, Image, StyleSheet, Text, View } from 'react-native';
import EyeClosedIcon from './assets/icons/eye-closed';
import EyeOpenedIcon from './assets/icons/eye-opened';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      padding: 55,
      backgroundColor: Colors.black
    },
    content: {
      alignItems: 'center',
      gap: Gaps.g50
    },
    form: {
      alignSelf: 'stretch',
      gap: Gaps.g16
    },
    input: {
      backgroundColor: '#2E2D3D'
    },
    logo: {
      width: 220
    }
  });

  return (
    <View style={styles.container}>
    <View style={styles.content}>
    <Image
					style={styles.logo}
					source={require('./assets/logo.png')}
					resizeMode='contain'
				/>
				<View style={styles.form}>
        <Input placeholder='Email' />
					<Input placeholder='Пароль' />
					<Button title='Войти' />
				</View>
				<Text>Восстановить пароль</Text>
        <EyeClosedIcon />
				<EyeOpenedIcon />
        </View>
        </View>
  );
}



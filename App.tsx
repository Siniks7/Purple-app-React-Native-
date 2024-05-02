import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      padding: 55,
      backgroundColor: '#16171D'
    },
    content: {
      alignItems: 'center',
      gap: 50
    },
    form: {
      alignSelf: 'stretch',
      gap: 16
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
					<TextInput style={styles.input} />
					<TextInput style={styles.input} />
					<Button title='Войти' />
				</View>
				<Text>Восстановить пароль</Text>
        </View>
        </View>
  );
}



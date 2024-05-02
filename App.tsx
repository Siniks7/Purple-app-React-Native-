import { Button, Dimensions, Image, StyleSheet, TextInput, View } from 'react-native';

export default function App() {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'black',
      height: height,
      width: width,   
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      minWidth: 350,
      gap: 10
    },
    textStyle: { color: 'blue', fontSize: 24, borderWidth: 1, borderColor: 'red' },
    myInput: { backgroundColor: 'grey', height: 50, color: 'white', borderRadius: 10, paddingLeft: 20},
    myButton1: { backgroundColor: 'grey', height: 50 },
    myButton2: { backgroundColor: 'grey', height: 50 }
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
                <Image></Image>
          <TextInput placeholder='Email' style={styles.myInput}></TextInput>
          <TextInput  placeholder='Пароль' style={styles.myInput}></TextInput>
          <Button title='Войти'></Button>
          <Button title='Восстановить пароль'></Button>
            </View >
            </View>
  );
}



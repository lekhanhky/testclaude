import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const handleButtonPress = () => {
    Alert.alert('Thông báo', text || 'Bạn chưa nhập nội dung!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo React Native App</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung..."
        value={text}
        onChangeText={setText}
      />

      <Button
        title="Hiển thị thông báo"
        onPress={handleButtonPress}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

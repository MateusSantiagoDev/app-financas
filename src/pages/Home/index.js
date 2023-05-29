import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Page Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

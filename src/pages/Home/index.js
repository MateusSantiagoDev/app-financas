import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Balance } from '../../components/balance'; 

export function Home() {
  return (
    <View style={styles.container}>
      <Header name="jose rafael"/>
      <Balance saldo="9.250,90" gastos="-527,00"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

import { StyleSheet, Text, View, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { Balance } from "../../components/balance";
import { Moviments } from "../../components/Moviments";
import { Actions } from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0, // despesas
  },
  {
    id: 2,
    label: "PIX cliente X",
    value: "2.500,00",
    date: "22/09/2022",
    type: 1, // receita / entradas
  },
  {
    id: 3,
    label: "Salario",
    value: "7.200,00",
    date: "25/09/2022",
    type: 1, // receita / entradas
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Header name="jose rafael" />
      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />
      
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";

export function Balance({ saldo, gastos }) {
  return (
    <MotiView
    style={styles.container}
    from={{ // reixo e onde começa
      rotateX: '-100deg',
      opacity: 0,
    }}
    animate={{ // eixo e onde termina
      rotateX: '0deg',
      opacity: 1,
    }}
    transition={{ // tipo e duração
      type: 'timing',
      delay: 300,
      duration: 900,
    }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginEnd: 14,
    marginStart: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {

  },
  itemTitle: {
    fontSize: 20,
    color: "#DADADA",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentSymbol: {
    color: "#DADADA",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71"
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c"
  },
});

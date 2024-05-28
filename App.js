import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState("0");
  const [salida, setSalida] = useState("");
  const [tipoCambio, setTipoCambio] = useState("");
  return (
    <View style={styles.container}>
      <Text>Convertidor</Text>
      <Text>tipo de cambio actual: {tipoCambio}</Text>
      <Text>{salida}</Text>
      <TextInput
        style={styles.input}
        value={dolar}
        onChangeText={(txt) => {
          setDolar(txt);
        }}
      />
      <Button
        title='Pesos MXN'
        onPress={() => {
          let pesosMXN = dolar * 0.060;
          let moneda = " Pesos MXN";
          setTipoCambio(0.060);
          setSalida(pesosMXN + moneda);
        }}
      />
      <Button
        title='Pesos COP'
        onPress={() => {
          let pesosCOP = dolar * 3869.99;
          setTipoCambio(3869.99);
          setSalida(pesosCOP + " Pesos COP");
        }}
      />
      <Button
        title='Euros'
        onPress={() => {
          let euros = dolar * 0.92;
          setTipoCambio(0.92);
          setSalida(euros + " Euros");
        }}
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
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    paddingTop: 5,
    paddingHorizontal: 10
  }
});

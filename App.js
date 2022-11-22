
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {

const [objeto,setObjeto] = useState('')
const [nome, setNome] = useState('')
const [idade,setIdade] = useState('')
const [auxIdade, setAuxIdade] = useState('')
const [auxMarca, setMarca] = useState('')
useEffect(() => trocarValores(),[nome])

function trocarValores(){
  setNome(objeto)
  setIdade(auxIdade)
  setMarca(auxMarca)
}

  return (
    <View style={styles.container}>
      <Text>Valores com state e effect</Text>
      <TextInput
      placeholder="Digite o nome do objeto: "
      value={objeto} 
      onChangeText={ (texto) => setObjeto(texto) } 
      />
      <TextInput placeholder='Digite sua idade: ' 
      value={ auxIdade } 
      onChangeText={ (texto) => setAuxIdade(texto) }
      />
      <TextInput placeholder="Digite o nome da marca: "
      value={ auxMarca } 
      onChangeText={ (texto) => setMarca(texto) } 
      />

      <Button title='Enviar' onPress={() => trocarValores (objeto)}/>
      <Text>{ nome }</Text>
      <Text>{ idade }</Text>
      <Text>{ auxMarca }</Text>
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
});

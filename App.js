import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
// import { useState } from 'react';
// Componente definido através do uso de uma função
/* 
export default function App() {
  const [outputText, setOutputText] = useState('Texto inicial');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Alterar Texto" 
      onPress={() => {setOutputText("Novo texto")}}/>
    </View>
  );
}
 */
// Componente definido através do uso de uma classe
/* 
export default class App extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      outputText: "Novo Texto"
    }
  }
  render (){
    return (
      <View style={styles.container}>
        <Text>{this.state.outputText}</Text>
        <StatusBar style="auto" />
        <Button 
        title="Alterar texto"
        onPress={() => {this.setState({outputText:"Texto inicial"})}}
        />
      </View>
    );
  }
}
 */
// Variável definida para ser um contador

export default class App extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      contador: 0
    }
  }
  render (){
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <StatusBar style="auto" />
        <Button 
        title="Alterar texto"
        onPress={() => {this.setState({contador: this.state.contador + 1})}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

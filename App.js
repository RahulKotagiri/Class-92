import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './LocalDb';


export default class Translation extends React.Component {

  constructor(){
    super();
    this.state = {
      translatingWord: "",
      translatedWord: "",
      wordMeaning: ""
    }
  }

  translating = () =>{
    //console.log(db[this.state.translatingWord].word)
    this.setState({
      translatedWord: db[this.state.translatingWord].word,
      wordMeaning: db[this.state.translatingWord].meaning
    })
  }



  render(){  
    return (
    <View >
      <View style = {{backgroundColor: "#3684F8"}}>
        <Text style = {{fontSize: 50, marginLeft: 800, color: "#FFFFFF"}}>
          Translator App
        </Text>
      </View>

      <View style = {styles.imageAlign}>
        <Image source = {require("./pictures/talking[1].png")} style = {styles.imageIcon}>

        </Image>
      </View>
      
      <View style = {{alignItems: "center"}}>
      <TextInput placeholder = "Word being translated"
        style = {styles.translatingWord}
        onChangeText = {(text)=>{
          this.setState({
            translatingWord: text
          })            
        }}
      >
      </TextInput>
      </View>

      <View style = {{alignItems: "center"}}>
        <TouchableOpacity style = {styles.translateButton}
          onPress = {this.translating}>
          <Text style = {styles.translateButtonText}>
            Translate
          </Text>
        </TouchableOpacity>
      </View>

        <View style = {{alignItems: "center"}}>
        <Text style = {styles.translatedWord}>
          Translated word is: {this.state.translatedWord}
        </Text>
        </View>

        <View style = {{alignItems: "center"}}>
        <Text style = {styles.translatedWord2}>
          The meaning is: {this.state.wordMeaning}
        </Text>
        </View>
      

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
  translatingWord: {
    marginTop: 200,
    fontSize: 25,
    color: "#3684F8",
    width: 270,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  translatedWord: {
    //width: 95,
    marginTop: 100,
    fontSize: 25,
    color: "#3684F8",
    // borderWidth: 2,
    // borderRadius: 50
  },
  translatedWord2: {
    //width: 85,
    marginTop: 5,
    fontSize: 18,
    color: "#c203fc",
    // borderWidth: 2,
    // borderRadius: 50
  },
  translateButton: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 30,
    marginleft: 500,
    backgroundColor: "#24b6ff"
  },
  translateButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fcfcfc"
  },
  imageIcon: {
    width: 250,
    height: 150,
    alignItems: "center",
  },
  imageAlign: {
    alignItems: "center",
    marginTop: 25
  }
});
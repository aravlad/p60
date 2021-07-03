import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';


export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>

        <TouchableOpacity
         var class_ref = await db.ref("/").on("value", data =>{
           var all_students = []
           var class_a = data.val().class_A
           for (var i in class.a ){
             all_students.push(class.a[i])
           }
           all_students.sort(function(a,b)){
             return a.roll_no - b.roll_no
           }
             this.setState({all_students:all_students})
         })
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },

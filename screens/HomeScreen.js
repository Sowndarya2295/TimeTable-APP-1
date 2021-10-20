import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image 
                    source={require("../assets/calendar.png")}
                    style={styles.ttLogo}/>
                <Text style={styles.titleText}>Timetable App</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
   ttLogo:{
    width:100,
    height:100,
    resizeMode:"contain"
   },
titleText:{
    fontWeight:"bold",
    color:"red",
    fontSize:20,
    fontFamily:"Bubblegum-Sans",
    textAlign:"center"
}
   
})


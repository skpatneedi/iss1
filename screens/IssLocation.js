import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, StatusBar, SafeAreaView, Platform} from 'react-native';

export default class IssLocationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style ={styles.safeArea}/>
                <ImageBackground source = {require('../assets/meteor_bg1.png')} style = {styles.backgroundImage}>
                    <View style = {styles.titlecontainer}>                
                    <Text style = {styles.titleText}>ISS Location Screen!</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    safeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
        
    },
    titlecontainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    }
})
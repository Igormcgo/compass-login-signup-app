import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import { Colors } from "../constants/styles";


function Rectangle () :JSX.Element {
    return(
        <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
        </View>
    )
}

function HomeScreen () :JSX.Element {
    const rectangles: number[] = [1, 2, 3, 4]; 

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>HOME</Text>
            <ScrollView>
                {rectangles.map( (item) => <Rectangle key={item} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop :40,
        paddingHorizontal : 15
    },
    text : {
        color: Colors.primary,
        fontSize:22,
        marginBottom: 60
    },
    rectangleContainer : {
        flexDirection : 'row',
        marginTop : 15,
        justifyContent: 'space-between',
    },
    rectangle : {
        width: 170,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10
    }   
});
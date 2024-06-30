import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import PlanetBack from '../components/PlanetBack';
import Saturn from '../assets/Saturn.png';
import Screen from '../components/Screen';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
    return (
      <NavigationContainer>
        <SaturnBack />
      </NavigationContainer>
    );
  }

function SaturnBack({ navigation }){
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.pointsContainer}>
                    <Text style={styles.pointsText}>{'1800'}</Text>
                </View>
                <TouchableOpacity onPress={() => {navigation.goBack()} } style={styles.backArrowContainer}>
                    <Text style={styles.backArrow}>{'<'}</Text>
                </TouchableOpacity>
                <PlanetBack 
                    navigation={navigation}
                    planetPicture={Saturn}
                    points={1000}
                    event={"VOLUNTEER"}
                    planetName={"Saturn"}
                    price_reward={"STEM•E GIVER BADGE & 20% OFF"}
                    navigateTo={"SaturnFront"}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    pointsContainer: {
        position:'absolute',
        backgroundColor:'#b0bec5',
        height:25,
        width:102,
        right:10,
        top:16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsText: {
        color: '#ffffff', 
        fontSize: 20,
        fontFamily: 'Roboto', 
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    backArrowContainer: {
        position:'absolute',
        width:75,
        height:35,
        left:13,
        padding:0,
        top:17,
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 1
    },
    backArrow: {
        color:'#ffffff',
        fontSize:30,
        fontFamily: 'Roboto', 
        fontWeight:'700',
        textAlign: 'center',
    }, 
});

export default SaturnBack;
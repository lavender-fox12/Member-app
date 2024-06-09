import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import PlanetFront from '../components/PlanetFront';
import Mercury from '../assets/Mercury.png'
import Screen from '../components/Screen';

function MercuryFront({ navigation }){
    return (
        <Screen>
            <View style={styles.container}>
                <PlanetFront 
                    navigation={navigation}
                    planetPicture={Mercury}
                    points={400}
                    planetName={"Mercury"}
                    navigateTo={"MercuryBack"}
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
});

export default MercuryFront;

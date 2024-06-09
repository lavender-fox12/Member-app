import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import PlanetBack from '../components/PlanetBack';
import Mercury from '../assets/Mercury.png';
import Screen from '../components/Screen';


function MercuryBack({ navigation }){
    return (
        <Screen>
            <View style={styles.container}>
                <Text>Hi</Text>
                <PlanetBack 
                    navigation={navigation}
                    planetPicture={Mercury}
                    points={400}
                    planetName={"Mercury"}
                    navigateTo={"MercuryFront"}
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

export default MercuryBack;
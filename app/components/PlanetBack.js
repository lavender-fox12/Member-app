import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

function PlanetFront({ navigation, planetPicture, points, event, price_reward, navigateTo }){
    return (
        <View style={styles.container}>
            <View style={styles.square}>
                <View style={styles.sqaureLeft}>
                    <Text style={styles.pointTitle}>Minimum Points</Text>
                    <Text style={styles.point}>{points} PTS</Text>
                    <Text style={styles.eventTitle}>Required Event</Text>
                    <Text style={styles.event}>{event}</Text>
                    <Text style={styles.rewardTitle}>Prize/Reward</Text>
                    <Text style={styles.reward}>{price_reward}</Text>
                </View>
                <View style={styles.sqaureCenter}>
                    <TouchableOpacity style={styles.learnMore} onPress={() => navigation.navigate(navigateTo)}>
                        <Text style={styles.learnMoreText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={planetPicture}
                style={styles.planet}
            />
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth, // Set fixed width to occupy entire screen
        height: windowHeight, // Set fixed height to occupy entire screen
        
    },
    planet:{
        height: 230,  // Adjust as needed
        width: 230,
        top: '5%', // Adjust as needed
        position: 'absolute', 
        resizeMode: 'cover',
    },
    square: {
        width: '75%',  // Width of the square
        height: '60%', // Height of the square
        backgroundColor: 'rgba(176, 190, 197, 0.5)',  // Background color of the square
        borderRadius: 30,  // Rounded edges (you can adjust this value for more or less rounding)
        justifyContent: 'center',
    },
    sqaureLeft: {
        top: '8%',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    sqaureCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '10%',
    },
    pointTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        top: '5%',
        padding: 5,
        fontSize: 20,
    },
    point: {
        textAlign: 'left',
        padding: 5,
        fontSize: 20,
    },
    eventTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        top: '5%',
        padding: 5,
        fontSize: 20,
    },
    event: {
        textAlign: 'left',
        padding: 5,
        fontSize: 20,
    },
    rewardTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        top: '5%',
        padding: 5,
        fontSize: 20,
    },
    reward: {
        textAlign: 'left',
        padding: 5,
        fontSize: 20,
    },
    learnMore: {
        backgroundColor: '#0d47a1', // Blue background color
        paddingVertical: 8, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 20,
    },
    learnMoreText: {
        color: '#ffffff', // Text color (white)
        fontSize: 18, // Text size
        fontFamily: 'Roboto', // Font family
        fontWeight: 'bold', // Font weight
    },
});

export default PlanetFront;

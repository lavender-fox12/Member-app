import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Icons from 'react-native-vector-icons/Octicons';
import Screen from '../components/Screen';
import CustomButton from '../components/customButton';



function CalendarScreen ({ navigation }) {
    const handleHomeIcon = () => {
        navigation.navigate("Dashboard");
    }
    const handleChallengesIcon = () => {
        navigation.navigate("Challenges");
    }
    const handleCalendarIcon = () => {
        navigation.navigate("Calendar");
    }
    const handleSocialIcon = () => {
        navigation.navigate("Socials")
    }
    return(
        <Screen>
             <Text style={styles.text}> {"Calendar Screen"} </Text>
             <View style={styles.navigationFooter}>
                <Icons onPress={handleHomeIcon} style={styles.icons} name="home" size={30} color={"#fff"}/>
                <Icons onPress={handleCalendarIcon}style={styles.icons} name="calendar" size={30} color={"#fff"}/>
                <Icons onPress={handleChallengesIcon} style={styles.icons} name="list-ordered" size={30} color={"#fff"}/>
                <Icons onPress={handleSocialIcon} style={styles.icons} name="people" size={30} color={"#fff"}/>
            </View>
        </Screen>
    )
}

export default CalendarScreen;

const styles = StyleSheet.create({ // Change this to normal after 
    text: {
        fontSize: 200, // should be 14
        color: 'white',
        marginTop: -4,
        marginBottom: 10,
        marginRight: 'auto'
    },
    navigationFooter: {
        flexDirection: 'row',
        margin: 20,
    },
    icons: {
        marginLeft: 20,
        marginRight: 20,
    }
});
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import CustomButton from '../components/customButton';
import Logo from '../assets/stemeLogo.png';
import Screen from '../components/Screen';
import SubmitButton from '../components/submitButton';
import { auth } from '../navigation/firebase'

import * as Yup from 'yup';


function HomeScreen({ navigation }) {
    const handleSignOut = (email) => {
        auth.signOut().then(() => navigation.navigate("SignIn"))
    }
    return(
        <SafeAreaView>
            <Text>Email: {auth.currentUser?.email}</Text>
            <CustomButton text="Sign Out" onPress={handleSignOut} type="PRIMARY"/>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({});
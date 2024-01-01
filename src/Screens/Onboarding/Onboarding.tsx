import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding from 'react-native-onboarding-swiper';
import Ionicons from "@expo/vector-icons/Ionicons";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export interface OnboardingProps { }

type CreateOnboardingNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.ONBOARDING>;
const Dots = ({ selected }: any) => {
    let backgroundColor;
    backgroundColor = selected ? 'black' : 'grey';
    return (
        <View
            style={{
                width: 12,
                height: 12,
                borderRadius: 10,
                marginHorizontal: 5,
                backgroundColor
            }}
        />
    )
}

const Next = ({ ...props }) => {
    return (
        <Pressable style={styles.button} {...props}>
            <Text style={styles.text}>Next</Text>

        </Pressable>
    )
}
const Skip = ({ ...props }) => {
    return (
        <TouchableOpacity {...props}>
            <Text style={{ fontSize: 16, marginHorizontal: 20, fontStyle: 'italic', textDecorationLine: 'underline' }}>Skip</Text>
        </TouchableOpacity>
    )
}

export const OnboardingScreens = (props: OnboardingProps) => {
    const navigation = useNavigation<CreateOnboardingNavigatorProps>();
    return (
        <Onboarding
            //To handle the navigation to the Homepage if Skip is clicked
            onSkip={() => navigation.replace(RootScreens.WELCOME)}
            // To handle the navigation to the Homepage if Done is clicked. 
            DotComponent={Dots}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            bottomBarColor='white'
            imageContainerStyles={styles.container}
            showDone={false}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../../assets/Onboarding_1.png')} />,
                    title: 'Dishes recommended based on your ingredients',
                    titleStyles: styles.title,
                    subTitleStyles: styles.fixToText,
                    subtitle: 'You can get suggested dishes just from taking a picture of all the ingredients.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../../assets/Onboarding_2.png')} />,
                    title: 'Get your meal planned ahead',
                    titleStyles: styles.title,
                    subTitleStyles: styles.fixToText,
                    subtitle: 'Plan which dishes to cook for a day, a week or a month with our meal planning tool',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../../assets/Onboarding_3.png')} />,
                    title: 'Create Your Own Recipe',
                    titleStyles: styles.title,
                    subtitle: ((
                        <>
                            <Text style={styles.doneSubtitle}>You can add it to your shopping list and meal plan, or share the link with friends</Text>
                            <Pressable style={styles.getStarted} onPress={() => navigation.navigate(RootScreens.WELCOME)}>
                                <Text style={styles.text}>GET STARTED</Text>
                            </Pressable>
                        </>
                    )),
                },

            ]}
        />
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: -40,
        fontWeight: 'bold',
        fontSize: 32

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    doneSubtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginLeft: 27,
        marginRight: 27,
        marginBottom: 20,
        fontSize: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 36,
        marginRight: 16,
        borderRadius: 25,
        backgroundColor: '#3C7363',
    },
    getStarted: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 268,
        height: 60,
        marginRight: 16,
        borderRadius: 100,
        marginBottom: 20,
        backgroundColor: '#3C7363',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
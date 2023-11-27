import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HStack, Spinner, Heading, Button } from 'native-base';
import { User } from '@/Services';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';
import daysData from './days.json';

export interface IHomeProps {
    data: User | undefined;
    isLoading: boolean;
}

export const MealPlanning = (props: IHomeProps) => {
    // const { data, isLoading } = props;

    const [days, setDays] = useState([]);
    useEffect(() => {
        // setDays(daysData);
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.headerContainer}>
                <View style={styles.iconsWrap}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="person-circle-sharp" size={40} color="black" />
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="bell" size={32} color="black" />
                    </View>
                </View>
                <View style={styles.bookmarkCartContainer}>
                    <TouchableHighlight
                        style={styles.bookmarkWrap}
                        underlayColor="#CFCFCF"
                        onPress={() => console.log('a')}
                    >
                        <View>
                            <View style={styles.cartContainer}>
                                <View style={{ marginTop: 4 }}>
                                    <FontAwesome5
                                        name="bookmark"
                                        size={16}
                                        color="black"
                                        iconStyle={{ backgroundColor: 'black' }}
                                    />
                                </View>
                                <Text style={styles.bookmarkText}>0</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.cartWrap}
                        underlayColor="#2A5D4E"
                        onPress={() => console.log('a')}
                    >
                        <View>
                            <View style={styles.cartContainer}>
                                <View style={{ marginTop: 4 }}>
                                    <FontAwesome5
                                        name="shopping-cart"
                                        size={16}
                                        color="white"
                                        iconStyle={{ backgroundColor: 'black' }}
                                    />
                                </View>
                                <Text style={styles.cartText}>0</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styles.mealHeader}>
                <View style={styles.mealHeaderIcon}>
                    <Ionicons name="chevron-back-outline" size={25} color="#3d7363" />
                    <Text style={styles.mealHeaderTitle}>This Week</Text>
                    <Ionicons name="chevron-forward-outline" size={25} color="#3d7363" />
                </View>
            </View>

            <View style={styles.mealSubHeader}>
                <Text style={styles.mealSubHeaderTitle}>Ready to plan this week?</Text>
                <View style={styles.mealSubHeaderDays}>
                    {daysData.map((day) => {
                        return <Text style={styles.mealSubHeaderDay}>{day.shortName}</Text>;
                    })}
                </View>
                <Button style={styles.mealSubHeaderButton1}>START MY PLAN</Button>
            </View>

            <View style={styles.mealMenu}>
                {daysData.map((day, index) => {
                    return (
                        <View style={styles.mealItem}>
                            <Text style={styles.mealText}>{day.name}</Text>
                            <Button style={styles.mealButton2}>+ ADD</Button>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

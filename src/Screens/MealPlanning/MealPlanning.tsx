import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HStack, Spinner, Heading, Button, ScrollView } from 'native-base';
import { User } from '@/Services';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';
import daysData from './days.json';
import { RootScreens } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMealsByWeek } from '@/API/meals';
import { getCurrentUserId } from '@/API/auth';

export interface IHomeProps {
    data: User | undefined;
    isLoading: boolean;
}

export const MealPlanning = (props: { onNavigate: (string: RootScreens) => void }) => {
    const [opens, setOpens] = useState(Array.from({ length: daysData.length }, () => false));
    const [open, setOpen] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [data, setData] = useState([]);

    const handleToggleMenu = (index: number) => {
        let newToggles = opens;
        newToggles[index] = !newToggles[index];
        setOpens(newToggles);
        setOpen(!open);
    };

    const checkDay = (time: string, day: string) => {
        let date = new Date(time);
        if (
            (date.getDay() === 0 && day === 'Sunday') ||
            (date.getDay() === 1 && day === 'Monday') ||
            (date.getDay() === 2 && day === 'Tuesday') ||
            (date.getDay() === 3 && day === 'Wednesday') ||
            (date.getDay() === 4 && day === 'Thursday') ||
            (date.getDay() === 5 && day === 'Friday') ||
            (date.getDay() === 6 && day === 'Saturday')
        )
            return true;
        else return false;
    };

    useEffect(() => {
        const checkUser = async () => {
            await AsyncStorage.setItem('currentMealId', '');

            let userId = await getCurrentUserId();

            if (userId) {
                let currentTime = new Date();

                const response = await getMealsByWeek(userId, currentTime.toISOString());

                console.log('Response of getMealsByWeek: ' + JSON.stringify(response.data));
                setData(response.data);
            }
        };
        checkUser();
    }, []);

    const getMeal: any = (day: string, meals: any) => {
        for (let i = 0; i < meals.length; i++) {
            let mealDate = new Date(meals[i].time);
            if (
                (mealDate.getDay() === 0 && day === 'Sunday') ||
                (mealDate.getDay() === 1 && day === 'Monday') ||
                (mealDate.getDay() === 2 && day === 'Tuesday') ||
                (mealDate.getDay() === 3 && day === 'Wednesday') ||
                (mealDate.getDay() === 4 && day === 'Thursday') ||
                (mealDate.getDay() === 5 && day === 'Friday') ||
                (mealDate.getDay() === 6 && day === 'Saturday')
            ) {
                console.log('Meals: ', meals[i]);

                return meals[i];
            }
        }
        return null;
    };

    const handleNavigateAddRecipeForSearch = async (day: string) => {
        const meal = getMeal(day, data);
        if (meal !== null) {
            await AsyncStorage.setItem('currentMealId', meal.meal.id);
            // console.log(meal.meal.id);
        }
        props.onNavigate(RootScreens.ADDRECIPEFROMSEARCH);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                            {daysData.map((day, index) => {
                                return (
                                    <View style={styles.mealSubHeaderDayContainer}>
                                        <Text key={index} style={styles.mealSubHeaderDay}>
                                            {day.shortName}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                        <Button style={styles.mealSubHeaderButton1}>
                            <Text style={styles.mealSubHeaderButton1Text}>START MY PLAN</Text>
                        </Button>
                    </View>

                    <View style={styles.mealPlanningContainer}>
                        {daysData.map((day, index) => {
                            return (
                                <View key={index} style={styles.mealItemContainer}>
                                    <View style={styles.mealItem}>
                                        <Text style={styles.mealText}>{day.name}</Text>
                                        <View style={styles.mealDropdown}>
                                            <Button style={styles.mealButton2} onPress={() => handleToggleMenu(index)}>
                                                <Text style={styles.mealButton2Text}>+ ADD</Text>
                                            </Button>
                                            <View style={opens[index] ? styles.mealDropdownMenu : styles.hide}>
                                                <Button style={styles.mealDropdownBtn}>
                                                    <View style={styles.mealDropdownItem}>
                                                        <Ionicons name={'bookmark'} />
                                                        <Text style={styles.mealDropdownText}>Add Saved Recipe</Text>
                                                    </View>
                                                </Button>
                                                <Button
                                                    style={styles.mealDropdownBtn}
                                                    onPress={() => {
                                                        handleNavigateAddRecipeForSearch(day.name);
                                                    }}
                                                >
                                                    <View style={styles.mealDropdownItem}>
                                                        <Ionicons name={'search-outline'} />
                                                        <Text style={styles.mealDropdownText}>
                                                            Add Recipe From Search
                                                        </Text>
                                                    </View>
                                                </Button>
                                                <Button style={styles.mealDropdownBtn}>
                                                    <View style={styles.mealDropdownItem}>
                                                        <Ionicons name={'search-outline'} />
                                                        <Text style={styles.mealDropdownText}>
                                                            Add Recipe From Search
                                                        </Text>
                                                    </View>
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                    {getMeal(day.name, data) !== null && (
                                        <View style={styles.mealMenu}>
                                            <ScrollView horizontal={true} style={styles.dishScroll}>
                                                {getMeal(day.name, data).recipes.map((recipe: any) => (
                                                    <View style={styles.dishContainer}>
                                                        <View style={styles.dishImageContainer}>
                                                            <Image
                                                                style={styles.dishImage}
                                                                source={{
                                                                    uri: recipe.image,
                                                                }}
                                                            />
                                                            <Text style={styles.dishImageText}>
                                                                30min - $4.92 / serving
                                                            </Text>
                                                        </View>
                                                        <View style={styles.dishInformationContainer}>
                                                            <View style={styles.dishInformationVotes}>
                                                                <Ionicons name="star" style={styles.dishIconStar} />
                                                                <Ionicons name="star" style={styles.dishIconStar} />
                                                                <Ionicons name="star" style={styles.dishIconStar} />
                                                                <Ionicons name="star" style={styles.dishIconStar} />
                                                                <Ionicons name="star" style={styles.dishIconStar} />
                                                            </View>
                                                            <Text style={styles.dishName}>{recipe.name}</Text>
                                                        </View>
                                                    </View>
                                                ))}
                                            </ScrollView>
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

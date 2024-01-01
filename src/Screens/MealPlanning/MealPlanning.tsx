import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HStack, Spinner, Heading, Button, ScrollView } from 'native-base';
import { User } from '@/Services';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { styles } from './styles';
import daysData from './days.json';
import { RootScreens } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMealPlanning, getMealsByWeek } from '@/API/meals';
import { getCurrentUserId } from '@/API/auth';

export const MealPlanning = (props: {
    onNavigate: (string: RootScreens) => void;
    onReplace: (string: RootScreens) => void;
}) => {
    const [data, setData] = useState([]);
    const [times, setTimes] = useState<string[]>([]);
    const [nowDate, setNowDate] = useState<string>('2023-12-30');

    useEffect(() => {
        const handleData = async () => {
            // await AsyncStorage.removeItem('currentMealId');

            let userId = await getCurrentUserId();

            if (userId) {
                let currentTime = new Date(nowDate);

                const response = await getMealsByWeek(userId, currentTime.toISOString());

                setData(response.data);
            }
        };
        const intervalId = setInterval(async () => {
            handleData();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [nowDate]);

    const getTime: (dayIndex: number) => any = (dayIndex: number) => {
        let currentDate = new Date(nowDate);

        if (currentDate.getDay() === dayIndex) {
            return currentDate.toISOString();
        } else if (currentDate.getDay() === 0) {
            currentDate.setDate(currentDate.getDate() - (7 - dayIndex));
        } else if (dayIndex === 0) {
            currentDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()));
        } else if (currentDate.getDay() < dayIndex) {
            currentDate.setDate(currentDate.getDate() + (dayIndex - currentDate.getDay()));
        } else if (currentDate.getDay() > dayIndex) {
            currentDate.setDate(currentDate.getDate() - (-dayIndex + currentDate.getDay()));
        }

        return currentDate.toISOString();
    };

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
                return meals[i];
            }
        }
        return null;
    };

    const handleNavigateAddRecipeForSearch = async (day: string, dayIndex: number) => {
        console.log('day: ', day);
        console.log('date: ', getTime(dayIndex));
        await AsyncStorage.setItem('mealTime', getTime(dayIndex));

        const meal = getMeal(day, data);
        console.log('Check meal at navigation: ', meal);

        if (meal !== null) {
            await AsyncStorage.setItem('currentMealId', meal.id);
        } else {
            await AsyncStorage.removeItem('currentMealId');
        }
        const checkMeal = await AsyncStorage.getItem('currentMealId');
        console.log('checkMeal: ', checkMeal);
        props.onNavigate(RootScreens.ADDRECIPEFROMSEARCH);
    };

    const handleCreatePlanning = async () => {
        let userId = (await getCurrentUserId()) || '';

        const response = await createMealPlanning(userId, times);
        console.log(response);
    };

    const handleChooseTime = (dayIndex: number) => {
        let time: string = getTime(dayIndex).split('T')[0];

        let index = times.indexOf(time);

        if (index === -1) {
            setTimes((prev) => [...prev, time]);
        } else {
            setTimes((prev) => prev.filter((t) => t !== time));
        }
    };

    const checkTime = (dayIndex: number) => {
        let time: string = getTime(dayIndex).split('T')[0];

        if (times.indexOf(time) === -1) {
            return false;
        } else return true;
    };

    const handlePrevWeek = () => {
        let prevWeek = new Date(nowDate);
        prevWeek.setDate(prevWeek.getDate() - 7);
        setNowDate(prevWeek.toISOString());
    };

    const handleNextWeek = () => {
        let nextWeek = new Date(nowDate);
        nextWeek.setDate(nextWeek.getDate() + 7);
        setNowDate(nextWeek.toISOString());
    };

    const getStartTime: (time: string) => any = (time: string) => {
        const thisTime = new Date(time);

        if (thisTime.getDay() === 0) {
            thisTime.setDate(thisTime.getDate() - 6);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 1) return time;
        else if (thisTime.getDay() === 2) {
            thisTime.setDate(thisTime.getDate() - 1);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 3) {
            thisTime.setDate(thisTime.getDate() - 2);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 4) {
            thisTime.setDate(thisTime.getDate() - 3);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 5) {
            thisTime.setDate(thisTime.getDate() - 4);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 6) {
            thisTime.setDate(thisTime.getDate() - 5);
            return thisTime.toISOString();
        }
    };

    const getEndTime: (time: string) => any = (time: string) => {
        const thisTime = new Date(time);

        if (thisTime.getDay() === 0) {
            return time;
        } else if (thisTime.getDay() === 1) {
            thisTime.setDate(thisTime.getDate() + 6);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 2) {
            thisTime.setDate(thisTime.getDate() + 5);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 3) {
            thisTime.setDate(thisTime.getDate() + 4);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 4) {
            thisTime.setDate(thisTime.getDate() + 3);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 5) {
            thisTime.setDate(thisTime.getDate() + 2);
            return thisTime.toISOString();
        } else if (thisTime.getDay() === 6) {
            thisTime.setDate(thisTime.getDate() + 1);
            return thisTime.toISOString();
        }
    };

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const handleNameOfWeek = () => {
        const thisDate = new Date();
        let startDate = new Date(getStartTime(thisDate.toISOString()));
        let endDate = new Date(getEndTime(thisDate.toISOString()));
        const currentDate = new Date(nowDate);
        console.log('--------------');

        if (currentDate >= startDate && currentDate <= endDate) return 'This Week';
        else if (currentDate < startDate) {
            startDate.setDate(startDate.getDate() - 7);
            endDate.setDate(endDate.getDate() - 7);
            if (currentDate >= startDate && currentDate <= endDate) return 'Last Week';
            else {
                startDate = new Date(getStartTime(nowDate));
                endDate = new Date(getEndTime(nowDate));
                return `${monthNames[startDate.getMonth()]} ${startDate.getDate()} - ${
                    monthNames[endDate.getMonth()]
                } ${endDate.getDate()}`;
            }
        } else if (currentDate > endDate) {
            startDate.setDate(startDate.getDate() + 7);
            endDate.setDate(endDate.getDate() + 7);
            if (currentDate >= startDate && currentDate <= endDate) return 'Next Week';
            else {
                startDate = new Date(getStartTime(nowDate));
                endDate = new Date(getEndTime(nowDate));
                console.log('startDate: ', startDate.getMonth());
                console.log('endDate: ', endDate.toISOString());

                return `${monthNames[startDate.getMonth()]} ${startDate.getDate()} - ${
                    monthNames[endDate.getMonth()]
                } ${endDate.getDate()}`;
            }
        }
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
                            <TouchableOpacity onPress={handlePrevWeek}>
                                <Ionicons name="chevron-back-outline" size={25} color="#3d7363" />
                            </TouchableOpacity>
                            <Text style={styles.mealHeaderTitle}>{handleNameOfWeek()}</Text>
                            <TouchableOpacity onPress={handleNextWeek}>
                                <Ionicons name="chevron-forward-outline" size={25} color="#3d7363" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {data.length === 0 && (
                        <View style={styles.mealSubHeader}>
                            <Text style={styles.mealSubHeaderTitle}>Ready to plan this week?</Text>
                            <View style={styles.mealSubHeaderDays}>
                                {daysData.map((day, index) => {
                                    return (
                                        <TouchableOpacity
                                            style={
                                                checkTime(day.id)
                                                    ? styles.mealSubHeaderDayContainerActive
                                                    : styles.mealSubHeaderDayContainer
                                            }
                                            onPress={() => handleChooseTime(day.id)}
                                        >
                                            <Text
                                                key={day.id}
                                                style={
                                                    checkTime(day.id)
                                                        ? styles.mealSubHeaderDayActive
                                                        : styles.mealSubHeaderDay
                                                }
                                            >
                                                {day.shortName}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <Button style={styles.mealSubHeaderButton1} onPress={handleCreatePlanning}>
                                <Text style={styles.mealSubHeaderButton1Text}>START MY PLAN</Text>
                            </Button>
                        </View>
                    )}

                    <View style={styles.mealPlanningContainer}>
                        {daysData.map((day, index) => {
                            return (
                                <View key={index} style={styles.mealItemContainer}>
                                    <View style={styles.mealItem}>
                                        <Text style={styles.mealText}>{day.name}</Text>
                                        <View style={styles.mealDropdown}>
                                            <Button
                                                style={styles.mealButton2}
                                                onPress={() => {
                                                    handleNavigateAddRecipeForSearch(day.name, day.id);
                                                }}
                                            >
                                                <Text style={styles.mealButton2Text}>+ ADD</Text>
                                            </Button>
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

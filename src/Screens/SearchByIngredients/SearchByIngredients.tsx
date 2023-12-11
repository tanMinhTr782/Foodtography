import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { SearchBar } from '@/Components/SearchBar/SearchBar';
import { ScrollView } from 'native-base';
import AntDesign from "@expo/vector-icons/AntDesign";
import { ingredient } from './data/data';

export const SearchByIngredients = (props: { onNavigate: (string: RootScreens) => void }) => {
    return (
        <View style={styles.searchByIngredientsContainer}>
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableHighlight
                        underlayColor="#3C736320"
                        onPress={() => props.onNavigate(RootScreens.SEARCH)}
                    >
                        <View style={{ flexDirection: "row", gap: 12, marginBottom: 10 }}>
                            <AntDesign name="close" size={32} color="gray" />
                        </View>
                    </TouchableHighlight>
                    <SearchBar></SearchBar>
                    <View>
                        <Text style={styles.text}>Selected Ingredients</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                ingredient.map((data, index) => {
                                    return data.selected == 1 && (
                                        <View style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            width: 80,
                                            marginTop: 15
                                        }}>
                                            <View style={styles.itemImageContainer}>
                                                <Image
                                                    style={styles.ingredientsImage}
                                                    source={require('../../../assets/tomato.jpg')}
                                                />
                                            </View>
                                            <Text style={styles.itemText}>{data.ingredientName}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.text}>Suggested for you</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.ingredientContainer}>
                            {
                                ingredient.map((data, index) => {
                                    return data.selected == 0 && (
                                        <View style={styles.itemContainer}>
                                            <View style={styles.itemImageContainer}>
                                                <Image
                                                    style={styles.ingredientsImage}
                                                    source={require('../../../assets/tomato.jpg')}
                                                />
                                            </View>
                                            <Text style={styles.itemText}>{data.ingredientName}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    <TouchableHighlight
                        underlayColor="#3C736320"
                        onPress={() => props.onNavigate(RootScreens.SEARCH)}
                    >
                        <Text style={styles.onSearchText}>SEARCH WITH {0} INGREDIENT</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </View>
    );
};

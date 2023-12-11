import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { SearchBar } from '@/Components/SearchBar/SearchBar';
import { ScrollView } from 'native-base';
import { ingredient, meal, popular } from './data/data'

export const Search = (props: { onNavigate: (string: RootScreens) => void }) => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchBar></SearchBar>
                    <View style={styles.ingredientContainer}>
                        <View style={{
                            display: 'flex', flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            marginTop: 20, paddingRight: 15
                        }}>
                            <Text style={styles.title}>Search by Ingredients</Text>
                            <TouchableHighlight
                                underlayColor="#3C736320"
                                onPress={() => props.onNavigate(RootScreens.SEARCHBYINGREDIENTS)}
                            >
                                <View style={{ flexDirection: "row", gap: 12 }}>
                                    <Text style={styles.buttonViewAll}>VIEW ALL</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                ingredient.map((data, index) => {
                                    return (
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
                        </ScrollView>
                    </View>
                    <View style={styles.mealContainer}>
                        <Text style={styles.title}>Search by Meal</Text>
                        <View style={styles.mealItemsContainer}>
                            {meal.map((data, id) => {
                                return (
                                    <View style={styles.mealItemContainer}>
                                        <Image
                                            style={styles.mealImage}
                                            source={require('../../../assets/FoodBackground.jpg')}
                                        />
                                        <Text style={styles.mealText}>{data.type}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Most popular Categories</Text>
                        <View style={styles.mealItemsContainer}>
                            {popular.map((data, id) => {
                                return (
                                    <View style={styles.mealItemContainer}>
                                        <Image
                                            style={styles.mealImage}
                                            source={require('../../../assets/FoodBackground.jpg')}
                                        />
                                        <Text style={styles.mealText}>{data.type}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Enhance Your Cooking Skills</Text>
                        <View style={styles.cardContainer}>
                            <View style={styles.cardItemContainer}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../../../assets/cooking.jpg')}
                                />
                                <Text style={styles.cardText}>Technique Videos</Text>
                            </View>
                            <View style={[ styles.cardItemContainer, styles.cardItemLastChild ]}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../../../assets/cooking2.jpg')}
                                />
                                <Text style={styles.cardText}>Ingredient Guides</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

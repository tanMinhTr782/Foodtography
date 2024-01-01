import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { SearchBarContainer } from '@/Components/SearchBar';
import { ScrollView } from 'native-base';
import { ingredient, meal, popular } from './data/data'
import { Colors } from '@/Theme/Variables';

export const Search = (props: {
    onNavigate: (string: RootScreens) => void,
    onNavigateFilter: (string: RootScreens, type: any, count: number, ingredients: string[]) => void,
    onNavigateEnhance: (string: RootScreens, title: string) => void
    onNavigateWSearch: (string: RootScreens, dataSearch: any) => void
}) => {
    return (
        <SafeAreaView style={styles.searchContainer}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchBarContainer icon="search1" process={(dataSearch: any) => {
                            return props.onNavigateWSearch(RootScreens.SEARCHRESULT,dataSearch);
                        }}
                        clear={() => {
                            return;
                        }}
                    />
                    <View style={styles.ingredientContainer}>
                        <View style={{
                            display: 'flex', flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            marginTop: 20, paddingRight: 15
                        }}>
                            <Text style={styles.title}>Search by Ingredients</Text>
                            <TouchableHighlight
                                underlayColor="#CTCTCT"
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
                                        <TouchableHighlight
                                            underlayColor="#CTCTCT"
                                            onPress={() => props.onNavigate(RootScreens.SEARCHBYINGREDIENTS)}
                                            key={'ingredient-' + index}
                                        >
                                            <View style={styles.itemContainer} >
                                                <View style={styles.itemImageContainer}>
                                                    <Image
                                                        style={styles.ingredientsImage}
                                                        source={require('../../../assets/tomato.jpg')}
                                                    />
                                                </View>
                                                <Text style={styles.itemText}>{data.ingredientName}</Text>
                                            </View>
                                        </TouchableHighlight>
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
                                    <TouchableHighlight
                                        underlayColor="#CTCTCT"
                                        onPress={() => props.onNavigateFilter(RootScreens.SEARCHRESULT, data.type, 1, [])}
                                        key={'meal-' + id}
                                        style={styles.mealItemContainer}
                                    >
                                        <View>
                                            <Image
                                                style={styles.mealImage}    
                                                source={require('../../../assets/FoodBackground.jpg')}
                                            />
                                            <Text style={styles.mealText}>{data.type}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Most popular Categories</Text>
                        <View style={styles.mealItemsContainer}>
                            {popular.map((data, id) => {
                                return (
                                    <TouchableHighlight
                                        underlayColor="#CTCTCT"
                                        onPress={() => props.onNavigateFilter(RootScreens.SEARCHRESULT, data.type, 1, [])}
                                        key={'popular-' + id}
                                        style={styles.mealItemContainer}
                                    >
                                        <View>
                                            <Image
                                                style={styles.mealImage}
                                                source={require('../../../assets/FoodBackground2.jpg')}
                                            />
                                            <Text style={[styles.mealText, { color: Colors.GREENDARK }]}>{data.type}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Enhance Your Cooking Skills</Text>
                        <View style={styles.cardContainer}>
                            <TouchableHighlight
                                underlayColor="#CTCTCT"
                                onPress={() => props.onNavigateEnhance(RootScreens.ENHANCESKILL, "Essential Skills")}
                                style={styles.cardItemContainer}
                            >
                                <View>
                                    <Image
                                        style={styles.cardImage}
                                        source={require('../../../assets/cooking.jpg')}
                                    />
                                    <Text style={styles.cardText}>Technique Videos</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="#CTCTCT"
                                onPress={() => props.onNavigateEnhance(RootScreens.ENHANCESKILL, "Ingredient Guides")}
                                style={[styles.cardItemContainer, styles.cardItemLastChild]}
                            >
                                <View>
                                    <Image
                                        style={styles.cardImage}
                                        source={require('../../../assets/cooking2.jpg')}
                                    />
                                    <Text style={styles.cardText}>Ingredient Guides</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

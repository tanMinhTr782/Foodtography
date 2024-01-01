import { styles } from './styles';
import { RootScreens } from '..';
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import { Center, ScrollView, Skeleton, VStack } from 'native-base';
import { SearchRecipeDetailContainer } from '@/Components/SearchRecipeDetail'
import { Colors } from '@/Theme/Variables';
import { StatusBar } from 'expo-status-bar';
import { SearchBarContainer } from '@/Components/SearchBar'
import { getRecipesByIngredients } from '@/API/spoonacular';

export const SearchResult = (props: {
    onNavigate: (string: RootScreens) => void, type: any, count: number, ingredients: string[],
    goBack: () => void, dataSearch: any
}) => {
    const [type] = useState(props.type);
    const [data, setData] = useState([]);
    const [previousData, setPreviousData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const handleSearch = (newDataSearch: any) => {
        const newArray = data.filter((item: any) => {
            if (checkSubstring(item.title, newDataSearch)) {
                return item;
            }
        });
        setData(newArray);
        setLoading(true);
    };

    const handleClear = () => {
        setData(previousData);
    }

    const checkSubstring = (str1: string, str2: string) => {
        let mainIndex = 0;
        let subIndex = 0;

        while (mainIndex < str1.length && subIndex < str2.length) {
            if (str1[mainIndex].toLowerCase() === str2[subIndex].toLowerCase()) {
                subIndex++;
            }
            mainIndex++;
        }

        if (subIndex === str2.length) {
            return true;
        } else {
            return false;
        }
    };

    console.log(props.ingredients);

    const fetchData = async () => {
        try {
            if (props.dataSearch) {
                let recipes = await getRecipesByIngredients(["beef", "chicken", "soy", "salt", "sugar", "fish", "egg"], 100);
                if (recipes) {
                    const newArray = recipes.filter((item: any) => {
                        if (checkSubstring(item.title, props.dataSearch)) {
                            return item;
                        }
                    });
                    setData(newArray);
                    setPreviousData(newArray);
                    setLoading(true);
                };
            } else {
                let recipes;
                switch (type) {
                    case "Breakfast":
                        recipes = await getRecipesByIngredients(["egg", "sandwich", "tomato", "salt"], 20);
                        break;
                    case "Brunch":
                        recipes = await getRecipesByIngredients(["yogurt", "chia seeds", "tomato", "quinoa"], 20);
                        break;
                    case "Lunch":
                        recipes = await getRecipesByIngredients(["chicken", "salad", "quinoa", "milk"], 20);
                        break;
                    case "Snack":
                        recipes = await getRecipesByIngredients(["raspberries", "chestnut", "almond", "oil"], 20);
                        break;
                    case "Dinner":
                        recipes = await getRecipesByIngredients(["beff", "egg", "onion", "rice", "oil"], 20);
                        break;
                    case "Dessert":
                        recipes = await getRecipesByIngredients(["butter", "strawberry", "banana", "chocolate", "milk"], 20);
                        break;
                    case "BBQ":
                        recipes = await getRecipesByIngredients(["beef", "soy", "chili pepper", "olive", "salt"], 20);
                        break;
                    case "Healthy":
                        recipes = await getRecipesByIngredients(["banana", "tomato", "quinoa", "barley", "olive"], 20);
                        break;
                    case "Soup":
                        recipes = await getRecipesByIngredients(["beef broth", "beef", "carrot", "salt", "pepper"], 20);
                        break;
                    case "Salad":
                        recipes = await getRecipesByIngredients(["salad romaine", "cucumber", "tomato", "almond", "yogurt souce"], 20);
                        break;
                    case "SearchByIngredients":
                        recipes = await getRecipesByIngredients(props.ingredients, 20);
                        break;
                }

                if (recipes) {
                    setData(recipes);
                    setPreviousData(recipes);
                    setLoading(true);
                }
            }
        } catch (error: any) {
            console.log('Error fetching data:', error.message);
            throw error;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.searchResultContainer}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <SearchBarContainer icon="back" goBack={() => {
                    return props.goBack();
                }}
                    process={(newDataSearch: any) => {
                        setLoading(false);
                        return handleSearch(newDataSearch);
                    }}
                    clear={() => {
                        return handleClear();
                    }}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
                    <View style={styles.classificationBar}>
                        {
                            props.type === "SearchByIngredients" || props.type === "Scan" ? (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={[styles.classificationBox, { marginRight: 10 }]}>
                                        <Text style={[styles.classificationText, { color: Colors.GREENSUPERDARK }]}>Filter</Text>
                                    </View>
                                    <View style={[styles.classificationBox, styles.selected]}>
                                        <Text style={[styles.classificationText, { color: Colors.WHITE }]}>Ingredient - {props.count}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={[styles.classificationBox, styles.selected, { marginRight: 10 }]}>
                                        <Text style={[styles.classificationText, { color: Colors.WHITE }]} >Filter - {props.count}</Text>
                                    </View>
                                    <View style={styles.classificationBox}>
                                        <Text style={[styles.classificationText, { color: Colors.GREENSUPERDARK }]}>Ingredient</Text>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                    {
                        props.type === "Scan" && (

                            <View style={{ height: 250, marginBottom: 10, marginTop: 10 }}>
                                <Image
                                    style={styles.scanImage}
                                    source={require('../../../assets/cooking.jpg')}
                                />
                            </View>
                        )
                    }
                    {
                        props.type === "SearchByIngredients" && (
                            <View style={styles.ingredientContainer}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', marginRight: 5, marginTop: 5 }}>Ingredients:</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        props.ingredients.map((data: any, id: number) => {
                                            if (id != props.ingredients.length - 1) {
                                                return (
                                                    <Text style={{ fontSize: 18, fontWeight: 'normal' }} key={'ingredient-' + id}>{data}, </Text>
                                                )
                                            } else {
                                                return (
                                                    <Text style={{ fontSize: 18, fontWeight: 'normal' }} key={'ingredient-' + id}>{data}.</Text>
                                                )
                                            }
                                        })
                                    }
                                </ScrollView>
                            </View>
                        )
                    }
                    {
                        props.type === "SearchByIngredients" && (
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 5 }}>Suggested Recipes</Text>
                        )
                    }
                    <View style={styles.recipeDetailWrapper}>
                        {
                            isLoading ? data.length !== 0 ? (
                                data.map((item: any, id: number) => {
                                    return (
                                        <SearchRecipeDetailContainer favorite={0} star={item.likes < 6 ? item.likes : 5} name={item.title ? item.title : "Not found"}
                                            image={item.image} key={"Recipe-Detail-" + id}
                                        />
                                    )
                                })
                            ) : (
                                <Text style={{ fontSize: 16, color: 'red' }}>No dishes were found that matched your request!!</Text>
                            ) : (
                                <Center w="100%" h="100%">
                                    <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                                        borderColor: "coolGray.500"
                                    }} _light={{
                                        borderColor: "coolGray.200"
                                    }}>
                                        <Skeleton h="40" />
                                        <Skeleton.Text px="4" />
                                        <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
                                    </VStack>
                                </Center>
                            )
                        }
                    </View>
                    <View style={{ marginBottom: 60 }}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

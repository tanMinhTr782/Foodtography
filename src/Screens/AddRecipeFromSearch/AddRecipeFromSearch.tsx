import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'native-base';
import { SearchBar } from '@/Components/SearchBar/SearchBar';
import data from './data.json';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRecipes } from '@/API/recipes';
import { getCurrentUserId } from '@/API/auth';
import { addNewMealRecipe } from '@/API/meals';

export const AddRecipeFromSearch = (props: { onNavigate: (string: RootScreens) => void }) => {
    const [mealId, setMealId] = useState('');
    const [recipes, setRecipes] = useState([
        {
            id: 'f9851b03-8d74-472e-8e2f-3e105c178673',
            name: 'Fish with tomato sauce',
            image: 'https://th.bing.com/th/id/R.86ff7ea27cab940f2b915e12278959e4?rik=WCkHdnJA2yDuUA&pid=ImgRaw&r=0',
            instructions: 'Bước 1: Nấu này. Bước 2: Nấu kia',
            authorNote: 'Món này nên ăn hết trong 1 bữa, để tủ lạnh mất ngon',
            isPublic: false,
            authorId: '43aa2a10-85f0-4307-a855-075a4eecce38',
            created_at: '2023-12-26T02:42:53.759Z',
            updated_at: '2023-12-26T02:42:53.759Z',
        },
    ]);

    useEffect(() => {
        const handleData = async () => {
            const checkMealId = await AsyncStorage.getItem('currentMealId');
            console.log('MealId: ', checkMealId);
            if (checkMealId) setMealId(checkMealId);

            const response = await getRecipes();
            console.log(response);
            setRecipes(response);
        };
        handleData();
    }, []);

    const handleAddNewRecipe = async (recipeId: string) => {
        const userId = await getCurrentUserId();
        console.log('RecipeId: ', recipeId);

        const response = await addNewMealRecipe(userId, mealId, recipeId);
        console.log(response);
        if (response.statusCode === 200) {
            props.onNavigate(RootScreens.MEALPLANNING);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <View style={styles.iconsWrap}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="person-circle-sharp" size={40} color="black" />
                    </View>
                </View>
                <View style={styles.bookmarkCartContainer}></View>
            </View>

            <View style={styles.topContainer}>
                <View style={styles.flexBetween}>
                    <View style={styles.col8}>
                        <View>
                            <Text style={styles.title}>Add Recipe from Search</Text>
                        </View>
                        <View style={styles.subTitleView}>
                            <Text style={styles.subTitle}>Recipes are based on your meal plan preferences</Text>
                        </View>
                    </View>
                    <View style={styles.col2}>
                        <View style={styles.closeContainer}>
                            <Button
                                style={styles.closeButton}
                                onPress={() => {
                                    props.onNavigate(RootScreens.MEALPLANNING);
                                }}
                            >
                                <View>
                                    <Ionicons name="close-circle-outline" style={styles.closeItem} />
                                </View>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <SearchBar></SearchBar>
            </View>

            <View style={styles.py5}>
                <View style={styles.row}>
                    {recipes.map((recipe, index) => {
                        return (
                            <View style={styles.col5}>
                                <TouchableOpacity
                                    style={styles.btnClear}
                                    onPress={() => {
                                        handleAddNewRecipe(recipe.id);
                                    }}
                                >
                                    <View style={styles.dishContainer}>
                                        <View style={styles.dishImageContainer}>
                                            <Image
                                                style={styles.dishImage}
                                                source={{
                                                    uri: recipe.image,
                                                }}
                                            />
                                            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.dishImageText}>
                                                30min - $4.92 / servingaaaaaaaaa
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
                                            <Text style={styles.dishName} ellipsizeMode="tail" numberOfLines={2}>
                                                {recipe.name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

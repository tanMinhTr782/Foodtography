import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import dataIngredients from './ingredients.json';
import dataRecipes from './recipeDataset.json';
import { ScrollView } from 'native-base';
import { getCurrentUserId } from '@/API/auth';
import { getRecipesByAuthorId } from '@/API/recipes';

export const MyPantry = (props: {
    onNavigate: (string: RootScreens) => void;
    onGoBack: () => void;
    onReplace: (string: RootScreens) => void;
}) => {
    const [recipes, setRecipes] = useState([
        {
            name: 'Fish with tomato sauce',
            image: 'https://th.bing.com/th/id/R.86ff7ea27cab940f2b915e12278959e4?rik=WCkHdnJA2yDuUA&pid=ImgRaw&r=0',
            ingredients: ['58502902-8d5d-4d1b-8777-d1bcdda35ae1', '81c5b12e-4041-4b6f-b4aa-16a08b487524'],
            quantities: ['2', '3'],
            instructions: 'Bước 1: Nấu này. Bước 2: Nấu kia',
            authorNote: 'Món này nên ăn hết trong 1 bữa, để tủ lạnh mất ngon',
            isPublic: false,
            authorId: '6b0a5886-7d72-4cef-a98e-9bc44473b11c',
        },
    ]);
    useEffect(() => {
        const fetchData = async () => {
            const userId = await getCurrentUserId();
            if (userId) {
                const response = await getRecipesByAuthorId(userId);
                setRecipes(response);
            } else {
                setRecipes([]);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.py3}>
                    <Text style={styles.subTitle}>
                        Add ingredients you have at home to find recipes you can make now.
                    </Text>
                </View>
                <View style={styles.choosesContainer}>
                    <TouchableOpacity style={styles.choosesItemActive}>
                        <Ionicons name="fast-food-outline" style={styles.choosesIconActive} />
                        <Text style={styles.choosesTitleActive}>My Recipes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    {recipes.map((recipe, index) => (
                        <View style={styles.col5}>
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
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

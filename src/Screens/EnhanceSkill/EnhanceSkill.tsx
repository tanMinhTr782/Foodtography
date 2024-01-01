import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { Center, ScrollView, Skeleton, VStack } from 'native-base';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SearchRecipeDetailContainer } from '@/Components/SearchRecipeDetail'
import { getRecipes } from '@/API/recipes';
import { getIngredients } from '@/API/ingredients';

export const EnhanceSkill = (props: {
    onNavigate: (string: RootScreens, type: string, data: any) => void,
    goBack: () => void, title: any
}) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            if (props.title === "Essential Skills") {
                let recipes = await getRecipes();
                if (recipes) {
                    console.log(recipes);
                    setData(recipes);
                    setLoading(true);
                };
            } else {
                let ingredients = await getIngredients();
                if (ingredients) {
                    console.log(ingredients);
                    setData(ingredients);
                    setLoading(true);
                };
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
        <SafeAreaView style={styles.searchContainer}>
            <View style={styles.container}>
                <MaterialIcons name="arrow-back-ios" size={28} onPress={() => props.goBack()} />
                <Text style={styles.title}>{props.title}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        props.title === "Essential Skills" ? (
                            <View style={styles.detailWrapper}>
                                {
                                    isLoading ? data.length !== 0 ? (
                                        data.map((data: any, id: number) => {
                                            return (
                                                <SearchRecipeDetailContainer specialMode={1} favorite={0} noneStar={data ? data.isPublic === false ? 1 : 0 : 0} star={0} name={data ? data.name ? data.name : "Failed to load" : "Failed to load"}
                                                    image={data ? data.image ? data.image : "https://icons.veryicon.com/png/o/business/new-vision-2/picture-loading-failed-1.png" : "https://icons.veryicon.com/png/o/business/new-vision-2/picture-loading-failed-1.png"}
                                                    whereToNav={
                                                        data ? data.isPublic === true ? () => {
                                                            return props.onNavigate(RootScreens.ENHANCEDETAIL, "Essential Skills", data)
                                                        } : () => { return; } : () => { return; }
                                                    } key={"Essential-Skills-" + id} />
                                            )
                                        })
                                    ) : (
                                        <Text style={{ fontSize: 16, color: 'red' }}>No ingredient guides were found that matched your request!!</Text>
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
                        ) : (
                            <View style={styles.detailWrapper}>
                                {
                                    isLoading ? data.length !== 0 ? (
                                        data.map((data: any, id: number) => {
                                            return (
                                                <SearchRecipeDetailContainer specialMode={2} favorite={1} noneStar={1} star={0} name={data ? data.name ? data.name : "Failed to load" : "Failed to load"}
                                                    image={data ? data.image ? data.image : "https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg" : "https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg"}
                                                    whereToNav={() => {
                                                        return props.onNavigate(RootScreens.ENHANCEDETAIL, "Ingredient Guides", data)
                                                    }} key={"Ingredient-Guides-" + id} />
                                            )
                                        })
                                    ) : (
                                        <Text style={{ fontSize: 16, color: 'red' }}>No ingredient guides were found that matched your request!!</Text>
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
                        )
                    }
                    <View style={{ marginBottom: 80 }}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

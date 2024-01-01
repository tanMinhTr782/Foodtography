import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { SearchBarContainer } from '@/Components/SearchBar';
import { Center, ScrollView, Skeleton, VStack } from 'native-base';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from 'expo-status-bar';
import { getIngredients } from '@/API/ingredients';
interface Item {
    id: string;
    name: string;
    image: string;
    description: string;
    cookingTips: string;
    unit: string;
    create_at: Date;
    update_at: Date;
    selected: number;
}

export const SearchByIngredients = (props: {
    onNavigate: (string: RootScreens, type: any, count: number, ingredients: string[]) => void,
    goBack: () => void,
    previousData: Item
}) => {
    const [selected, setSelected] = useState(Object.keys(props.previousData).length !== 0 ? 1 : 0);
    const [ingredientsToPush, setIngredientsToPush] = useState<string[]>([props.previousData.name]);
    const [data, setData] = useState<Item[]>([]);
    const [filteredData, setFilteredData] = useState<Item[]>([]);
    const [selectedData, setSelectedData] = useState<Item[]>(Object.keys(props.previousData).length !== 0 ? [props.previousData] : []);
    const [isLoading, setLoading] = useState(true);

    const handleSearch = (dataSearch: any) => {
        filterArray(dataSearch);
    };

    const handleClear = () => {
        setFilteredData(data);
    };

    const handleData = (id: number) => {
        let newData = [...filteredData];
        newData[id].selected = 1;
        setFilteredData(newData);

        setSelectedData(() => {
            const newIngredients = [...selectedData, newData[id]];
            handleIngredientsToPush(newIngredients);
            return newIngredients;
        });

        setSelected(selected + 1);
    };

    const handleIngredientsToPush = (newIngredients: any) => {
        const newIngredientsToPush: string[] = newIngredients.map((item: any) => item.name);
        setIngredientsToPush(newIngredientsToPush);
    };
        
    const handleReleaseData = (id: string) => {
        let newData = [...filteredData];
        const itemToUpdate = newData.find(item => item.id === id);
        if (itemToUpdate) {
            itemToUpdate.selected = 0;
            setFilteredData(newData);
        };

        setSelectedData(() => {
            const newIngredients = selectedData.filter((item: any) => item.id !== id);
            handleIngredientsToPush(newIngredients);
            return newIngredients;
        });
        setSelected(selected - 1);
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
    }

    const filterArray = (subData: any) => {
        const newArray = data.filter((item: any) => {
            if (checkSubstring(item.name, subData)) {
                return item;
            }
        });
        setFilteredData(newArray);
    };

    console.log(props.previousData);

    const fetchData = async () => {
        try {
            let ingredients = await getIngredients();
            if (ingredients) {
                const updatedDataArray = ingredients.map((item: any) => (
                    (item.name !== props.previousData.name) ? {
                        ...item,
                        selected: 0,
                    } : {
                        ...item,
                        selected: 1,
                    }
                ));
                setData(updatedDataArray);
                setFilteredData(updatedDataArray);
                setLoading(false);
            };        
        } catch (error: any) {
            console.log('Error fetching data:', error.message);
            throw error;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.searchByIngredientsContainer}>
            <StatusBar style="auto" />
            {
                isLoading ? (
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
                ) : (
                        <View style={styles.container}>
                            <MaterialIcons name="arrow-back-ios" size={32} onPress={() => props.goBack()} style={{ flexDirection: "row", gap: 12, marginBottom: 10 }} />
                            <SearchBarContainer icon="search1" goBack={() => {
                                return;
                            }} process={(dataSearch: any) => {
                                return handleSearch(dataSearch);
                            }}
                                clear={() => {
                                    return handleClear();
                                }}
                            />

                            <View>
                                <View>
                                    <Text style={styles.text}>Selected Ingredients</Text>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            selectedData.map((data: any, index: number) => {
                                                return (
                                                    <TouchableHighlight
                                                        underlayColor="#3C736320"
                                                        style={styles.itemContainer}
                                                        key={'ingredient-' + index}
                                                        onPress={() => {
                                                            return handleReleaseData(data.id);
                                                        }}
                                                    >
                                                        <View>
                                                            <View style={styles.itemImageContainer}>
                                                                <Image
                                                                    style={styles.ingredientsImage}
                                                                    source={{ uri: data.image }}
                                                                />
                                                                <AntDesign name="closecircle" size={20} style={{ position: 'absolute', top: 0, right: 10, opacity: 0.7 }} />
                                                            </View>
                                                            <Text style={styles.itemText}>{data.name}</Text>
                                                        </View>
                                                    </TouchableHighlight>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                                <View>
                                    <Text style={styles.text}>Suggested for you</Text>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false} style={{ height: (Dimensions.get('window').height - 400), marginBottom: 10 }}>
                                    <View style={styles.ingredientContainer}>
                                        {
                                            filteredData.map((data: any, index: number) => {
                                                return data.selected == 0 ? (
                                                    <TouchableHighlight
                                                        underlayColor="#3C736320"
                                                        style={styles.itemContainer}
                                                        key={'ingredient-' + index}
                                                        onPress={() => {
                                                            return handleData(index);
                                                        }}
                                                    >
                                                        <View>
                                                            <View style={styles.itemImageContainer}>
                                                                <Image
                                                                    style={styles.ingredientsImage}
                                                                    source={{ uri: data.image }}
                                                                />
                                                            </View>
                                                            <Text style={styles.itemText}>{data.name}</Text>
                                                        </View>
                                                    </TouchableHighlight>
                                                ) : (
                                                        <View style={styles.itemContainer} key={'ingredient-' + index}>
                                                            <View style={[styles.itemImageContainer, { opacity:0.3 }]}>
                                                                <Image
                                                                    style={styles.ingredientsImage}
                                                                    source={{ uri: data.image }}
                                                                />
                                                            </View>
                                                            <Text style={styles.itemText}>{data.name}</Text>
                                                        </View>    
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                                {
                                    selected == 0 ? (
                                        <TouchableHighlight
                                            underlayColor="#3C736320"
                                            style={styles.textWrapper0}
                                        >
                                            <View >
                                                <Text style={styles.onSearchText}>SEARCH WITH {selected} INGREDIENT</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ) : (
                                        <TouchableHighlight
                                                underlayColor="#3C736320"
                                                onPress={() => props.onNavigate(RootScreens.SEARCHRESULT, "SearchByIngredients", ingredientsToPush.length, ingredientsToPush)}
                                            style={styles.textWrapper1}
                                        >
                                            <Text style={styles.onSearchText}>SEARCH WITH {selected} INGREDIENT</Text>
                                        </TouchableHighlight>
                                    )
                                }
                            </View>
                        </View>
                )
            }
        </SafeAreaView>
    );
};

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { createRecipe } from '@/API/recipes';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from '@expo/vector-icons/Ionicons';
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export interface CreateRecipeProps {}

type CreateRecipeNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.CREATERECIPES>;

export const CreateRecipe = (props: CreateRecipeProps) => {
    const [authorId, setAuthorId] = useState<string>('');
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [ingredients, setIngredients] = useState<{ name: String; quantity: String; id: String; unit: String }[]>([]);
    const [instructions, setInstructions] = useState('');
    const [notes, setNotes] = useState('');
    const [sharingOption, setSharingOption] = useState('Private');

    const showAlert = () =>
        Alert.alert('Alert', 'Create recipe successfully!!', [
            {
                text: 'OK',
                onPress: () => navigation.goBack(),
                style: 'cancel',
            },
        ]);

    const removeIngredient = (id: String) => {
        setIngredients(ingredients.filter((item) => item.id !== id));
    };

    const handleSave = (value: any) => {
        setIngredients([...ingredients, value]);
    };

    const handleCreate = async () => {
        let ingredientsList = ingredients.map((item) => {
            return item.id;
        });
        let quantitiesList = ingredients.map((item) => {
            return item.quantity;
        });
        const body = {
            name: recipeTitle,
            image: recipeImage,
            instructions: instructions,
            authorNote: notes,
            isPublic: sharingOption === 'Public',
            ingredients: ingredientsList,
            quantities: quantitiesList,
            authorId: authorId,
        };
        createRecipe(body).then((res) => {
            showAlert();
        });
    };

    const getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            setAuthorId(user.substring(user.indexOf('id') + 5, user.indexOf(',', user.indexOf('id') + 5) - 1));
        }
    };

    React.useEffect(() => {
        getUser();
    }, []);

    const navigation = useNavigation<CreateRecipeNavigatorProps>();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.createRecipeContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={35} color="#3C7363" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Create recipe</Text>
                </View>
                <View>
                    <Text style={styles.addRecipeTitle}>Recipe title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Add recipe title"
                        value={recipeTitle}
                        onChangeText={(value) => setRecipeTitle(value)}
                    />
                </View>

                <View>
                    <Text style={{ marginBottom: 10 }}>
                        <Text style={styles.addRecipeTitle}>Recipe image</Text>
                        <Text style={styles.optionalText}> (Optional)</Text>
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Add recipe title"
                        value={recipeImage}
                        onChangeText={(value) => setRecipeImage(value)}
                    />
                </View>

                <View>
                    <Text style={styles.addRecipeTitle}>Ingredients</Text>
                    {ingredients.map((ingredient, index) => (
                        <View key={index} style={styles.ingredientContainer}>
                            <Text style={{ flex: 1 }}>
                                <Text style={styles.ingredientIndex}>{index + 1}. </Text>
                                <Text style={styles.ingredientName}>{ingredient.name}</Text>
                            </Text>
                            <View style={styles.countTrashContainer}>
                                <Text style={styles.ingredientCount}>{ingredient.quantity}</Text>
                                <Text style={styles.ingredientCount}>{ingredient.unit}</Text>
                                <Pressable onPress={() => removeIngredient(ingredient.id)}>
                                    <Ionicons name="trash-outline" size={24} />
                                </Pressable>
                            </View>
                        </View>
                    ))}
                    <TouchableHighlight
                        style={styles.ingredientContainer}
                        underlayColor="#3C736310"
                        onPress={() =>
                            navigation.navigate(RootScreens.ADDINGREDIENTS, {
                                handleSave: (value: any) => handleSave(value),
                            })
                        }
                    >
                        <Text style={styles.addIngredientText}>+ Add more ingredients</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <Text style={styles.addRecipeTitle}>Cooking instructions</Text>
                    <TextInput
                        style={styles.cookingInstructionsInput}
                        placeholder="Add cooking instructions"
                        multiline={true}
                        numberOfLines={4}
                        value={instructions}
                        onChangeText={(value) => setInstructions(value)}
                    />
                </View>

                <View>
                    <Text style={styles.addRecipeTitle}>Author's notes</Text>
                    <TextInput
                        style={styles.authorNotesInput}
                        placeholder="Add cooking instructions"
                        multiline={true}
                        numberOfLines={2}
                        value={notes}
                        onChangeText={(value) => setNotes(value)}
                    />
                </View>

                <View>
                    <Text style={styles.sharingOptionsTitle}>Sharing options</Text>
                    <Pressable style={styles.optionContainer} onPress={() => setSharingOption('Private')}>
                        {sharingOption === 'Private' ? (
                            <View style={styles.checkmarkCover}>
                                <Ionicons name="checkmark" color="white" size={20} />
                            </View>
                        ) : (
                            <View style={styles.circle}></View>
                        )}
                        <Text style={styles.optionText}>Private</Text>
                    </Pressable>

                    <Pressable style={styles.optionContainer} onPress={() => setSharingOption('Public')}>
                        {sharingOption === 'Private' ? (
                            <View style={styles.circle}></View>
                        ) : (
                            <View style={styles.checkmarkCover}>
                                <Ionicons name="checkmark" color="white" size={20} />
                            </View>
                        )}
                        <Text style={styles.optionText}>Public</Text>
                    </Pressable>
                </View>

                <TouchableHighlight onPress={() => handleCreate()} style={styles.doneBtn} underlayColor="#3C7363AA">
                    <Text style={styles.doneText}>DONE</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    createRecipeContainer: {
        backgroundColor: 'white',
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 21,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingLeft: 18,
    },
    addRecipeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ingredientContainer: {
        width: '100%',
        height: 48,
        borderRadius: 10,
        backgroundColor: '#3C736320',
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 18,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addIngredientText: {
        color: '#707070aa',
        fontSize: 18,
    },
    countTrashContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ingredientIndex: {
        fontSize: 18,
        marginRight: 6,
    },
    ingredientName: {
        fontSize: 18,
    },
    ingredientCount: {
        fontSize: 18,
    },
    optionalText: {
        fontSize: 22,
        color: '#949494',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 48,
        borderRadius: 10,
        backgroundColor: '#3C736320',
        paddingLeft: 12,
        fontSize: 18,
        marginBottom: 14,
    },
    cookingInstructionsInput: {
        width: '100%',
        height: 124,
        borderRadius: 10,
        backgroundColor: '#3C736320',
        paddingLeft: 12,
        paddingTop: 8,
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 14,
        textAlignVertical: 'top',
    },
    authorNotesInput: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        backgroundColor: '#3C736320',
        paddingLeft: 12,
        paddingTop: 8,
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 14,
        textAlignVertical: 'top',
    },
    sharingOptionsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 15,
        borderWidth: 1,
        marginRight: 4,
    },
    checkmarkCover: {
        width: 24,
        height: 24,
        borderRadius: 15,
        borderWidth: 1,
        marginRight: 4,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 2,
    },
    doneBtn: {
        backgroundColor: '#3C7363',
        width: '100%',
        height: 47,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    doneText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

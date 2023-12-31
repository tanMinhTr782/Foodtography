import React, { useState } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export interface AddIngredientsProps { }

// type CreateRecipeNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens>;

export const AddIngredients = (props: AddIngredientsProps) => {
    const [recipeTitle, setRecipeTitle] = useState('')
    const [recipeImage, setRecipeImage] = useState('')
    const [ingredients, setIngredients] = useState<{ name: String, count: String }[]>([])
    const [instructions, setInstructions] = useState('')
    const [notes, setNotes] = useState('')
    const [sharingOption, setSharingOption] = useState("Private");
    // const [ingredients, setIngredients] = useState([
    //   {
    //     name: "Onion",
    //     count: "50",
    //   },
    //   {
    //     name: "Salt",
    //     count: "2",
    //   },
    // ]);

    const removeIngredient = (name: String) => {
        setIngredients(ingredients.filter((item) => item.name !== name));
    };
    // const navigation = useNavigation<CreateRecipeNavigatorProps>();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.createRecipeContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                    // onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={35} color="#3C7363" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Add ingredients</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    createRecipeContainer: {
        backgroundColor: "white",
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 21,
    },
    title: {
        fontSize: 27,
        fontWeight: "bold",
        marginBottom: 20,
        paddingLeft: 18,
    },
});

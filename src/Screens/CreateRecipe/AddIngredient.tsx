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
    LogBox
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getIngredients } from "@/API/ingredients";

import Ionicons from "@expo/vector-icons/Ionicons";
export interface AddIngredientsProps { }
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
export const AddIngredients = (props: any) => {
    const { handleSave } = props
    const [data, setData] = useState([])
    const [ingredientName, setIngredientName] = useState<String>('')
    const [unit, setUnit] = useState<String>('')
    const [quantity, setQuantity] = useState('')
    const [id, setId] = useState<String>('')
    const [ingredients, setIngredients] = useState<{ name: String, count: String }[]>([])
    const [recommendList, setRecommendList] = useState<String[]>([])
    const [showFullScreen, setShowFullScreen] = useState(false)
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

    const getIngredientsList = () => {
        getIngredients().then(res => {
            setData(res)
        })
    }

    React.useEffect(() => {
        getIngredientsList()
    }, [])

    React.useEffect(() => {

        if (ingredientName === '')
            setRecommendList([])
        else setRecommendList(data.filter(item => item.name.toUpperCase().includes(ingredientName.toUpperCase())))
    }, [ingredientName])
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.addIngredientsContainer}>
                <Pressable
                    style={showFullScreen ? styles.fullScreen : { display: 'none' }}
                    onPress={() => { setShowFullScreen(false); setRecommendList([]) }}>
                </Pressable>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={35} color="#3C7363" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Add ingredients</Text>
                    </View>
                    <Pressable style={styles.saveBtn} onPress={() => {
                        handleSave({
                            name: ingredientName,
                            quantity: quantity,
                            unit: unit,
                            id: id
                        }); navigation.goBack()
                    }}>
                        <Text style={{ fontStyle: 'italic' }}>SAVE</Text>
                    </Pressable>
                </View>

                <View style={styles.addIngredient}>
                    <TextInput
                        style={recommendList.length > 0 ? styles.addIngredientInput2 : styles.addIngredientInput}
                        placeholder="Search ingredient"
                        value={ingredientName}
                        onChangeText={(value) => setIngredientName(value)}
                        onEndEditing={() => setShowFullScreen(true)}
                    />
                    {
                        recommendList.length > 0 && (
                            <ScrollView style={styles.ingredientContainer}>
                                {
                                    recommendList.map((item, key) => (
                                        <TouchableHighlight
                                            onPress={() => {
                                                setIngredientName(item.name);
                                                setRecommendList([]);
                                                setUnit(item.unit);
                                                setId(item.id)
                                            }}
                                            style={styles.recommendItem}
                                            key={key}
                                            underlayColor="#3C736320"

                                        >
                                            <Text>{item.name}</Text>
                                        </TouchableHighlight>
                                        // <View style={styles.recommendItem} key={key}>
                                        //     <Text>{item}</Text>
                                        // </View>
                                    ))
                                }
                            </ScrollView>
                        )
                    }

                </View>

                <View style={styles.addQuantity}>
                    <TextInput
                        style={styles.addIngredientInput}
                        placeholder="Enter quantity"
                        value={quantity}
                        onChangeText={(value) => setQuantity(value)}
                    />
                    <View style={styles.line}></View>
                    <View style={styles.unitWrap}>
                        <Text style={{ fontSize: 18 }}>{unit ? unit : "-- --"}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    addIngredientsContainer: {
        backgroundColor: "white",
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 21,
        minHeight: '100%',
        position: 'relative'
    },
    title: {
        fontSize: 27,
        fontWeight: "bold",
        marginBottom: 20,
        paddingLeft: 18,
    },
    addIngredient: {
        position: 'relative'
    },
    addQuantity: {
        position: 'relative'
    },
    addIngredientInput: {
        width: "100%",
        height: 48,
        borderRadius: 10,
        backgroundColor: "#3C736320",
        paddingLeft: 12,
        fontSize: 18,
        marginBottom: 14,
    },
    addIngredientInput2: {
        width: "100%",
        height: 48,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#3C736320",
        paddingLeft: 12,
        fontSize: 18,
        marginBottom: 14,
    },
    line: {
        height: 48,
        width: 1,
        backgroundColor: '#BCBCBC',
        position: 'absolute',
        left: '50%'
    },
    unitWrap: {
        height: 48,
        width: '50%',
        position: 'absolute',
        left: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    ingredientContainer: {
        maxHeight: 200,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: 48,
        zIndex: 100000000,
        borderWidth: 1,
        borderColor: '#3C736320',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    recommendItem: {
        height: 40,
        justifyContent: 'center',
        paddingLeft: 12,
        borderBottomColor: '#3C736320',
        borderBottomWidth: 1
    },
    fullScreen: {
        width: '120%',
        height: '120%',
        position: 'absolute'
    },
    saveBtn: {
        height: 35,
        justifyContent: 'flex-end',
        marginRight: 10,
    }
});

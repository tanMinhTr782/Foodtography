import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { User } from "@/Services";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type CreateRecipeNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.CREATERECIPES>;
type CreateSettingsNavigatorProps = NativeStackNavigationProp<RootStackParamList, RootScreens.SETTINGS>;

export interface IHomeProps {
    data: User | undefined;
    isLoading: boolean;

}

export const Home = (props: IHomeProps) => {
    const { data, isLoading } = props;
    const navigation1 = useNavigation<CreateRecipeNavigatorProps>();
    const navigation2 = useNavigation<CreateSettingsNavigatorProps>();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <Icon name="user-circle" size={30} style={styles.userIcon} /> */}
            <View style={styles.headerContainer}>
                <View style={styles.iconsWrap}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            onPress={() => navigation2.navigate(RootScreens.SETTINGS)}
                        >
                            <Ionicons name="person-circle-sharp" size={40} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            onPress={() => navigation1.navigate(RootScreens.CREATERECIPES)}
                        >
                            <Ionicons name="create" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bookmarkCartContainer}>
                    {/* <TouchableHighlight
                        style={styles.bookmarkWrap}
                        underlayColor="#CFCFCF"
                        onPress={() => console.log("a")}
                    >
                        <View>
                            <View style={styles.cartContainer}>
                                <View style={{ marginTop: 4 }}>
                                    <FontAwesome5
                                        name="bookmark"
                                        size={16}
                                        color="black"
                                        iconStyle={{ backgroundColor: "black" }}
                                    />
                                </View>
                                <Text style={styles.bookmarkText}>0</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.cartWrap}
                        underlayColor="#2A5D4E"
                        onPress={() => console.log("a")}
                    >
                        <View>
                            <View style={styles.cartContainer}>
                                <View style={{ marginTop: 4 }}>
                                    <FontAwesome5
                                        name="shopping-cart"
                                        size={16}
                                        color="white"
                                        iconStyle={{ backgroundColor: "black" }}
                                    />
                                </View>
                                <Text style={styles.cartText}>0</Text>
                            </View>
                        </View>
                    </TouchableHighlight> */}
                </View>
            </View>

            <Text style={styles.title}>Daily Inspriation</Text>

            <ScrollView style={styles.dailyInspiationCard}>
                <View style={styles.imageContainer}></View>
                <View style={styles.contentContainer}>
                    <View style={styles.rateContainer}>
                        <FontAwesome name="star" size={24} color="#E4D200" />
                        <FontAwesome name="star" size={24} color="#E4D200" />
                        <FontAwesome name="star" size={24} color="#E4D200" />
                        <FontAwesome name="star" size={24} color="#E4D200" />
                        <FontAwesome name="star-half-o" size={24} color="#E4D200" />
                    </View>
                    <Text style={styles.recipeName}>Vietnamese Crab Noodle Soup</Text>
                    <View style={styles.authorNameContainer}>
                        <View>
                            <Ionicons name="person-circle-sharp" size={28} color="black" />
                        </View>
                        <Text style={styles.authorName}>Tran Minh Tan</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor="#3C736320"
                        style={styles.addIngredientsBtn}
                        onPress={() => navigation1.navigate(RootScreens.SEARCH)}
                    >
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            <View>
                                <FontAwesome5 name="search" size={16} color="black" />
                            </View>
                            <Text style={styles.addIngredientsText}>SEARCH FOR MORE</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 18,
        paddingTop: 0,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconsWrap: {
        flexDirection: "row",
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 23,
    },
    bookmarkCartContainer: {
        flexDirection: "row",
    },
    bookmarkWrap: {
        width: 65,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    cartWrap: {
        width: 65,
        height: 40,
        backgroundColor: "#3C7363",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    cartContainer: {
        flexDirection: "row",
    },
    bookmarkText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginLeft: 6,
    },
    cartText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 4,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 30,
        marginBottom: 19,
        marginTop: 32,
    },
    dailyInspiationCard: {
        width: "100%",
        height: 560,
        // #3C736336
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 10,
        shadowColor: "#3C7363AA",
        shadowOffset: { width: -5, height: 8 },
        shadowOpacity: 100,
        shadowRadius: 10,
    },
    imageContainer: {
        width: "100%",
        height: 350,
        backgroundColor: "gray",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    contentContainer: {
        width: "100%",
        height: 210,
        backgroundColor: "#3C736318",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    recipeName: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    rateContainer: {
        flexDirection: "row",
        gap: 3,
        marginTop: 5,
    },
    authorNameContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    authorName: {
        color: "#3D7363",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 5,
    },
    addIngredientsBtn: {
        alignSelf: "center",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        width: "70%",
        height: 40,
        borderRadius: 10,
        gap: 10,
    },
    addIngredientsText: {
        fontSize: 13,
        fontWeight: "bold",
    },
});
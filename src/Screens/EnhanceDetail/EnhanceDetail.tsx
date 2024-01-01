import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { ScrollView } from 'native-base';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from '@/Theme/Variables';

export const EnhanceDetail = (props: { onNavigate: (string: RootScreens) => void, goBack: () => void, type: string, data: any}) => {
    const [title, setTitle] = useState(props.data.name);
    return (
        <SafeAreaView style={styles.searchContainer}>
            {
                props.type === "Essential Skills" && (
                    <View style={styles.container}>
                        <MaterialIcons name="arrow-back-ios" size={28} onPress={() => props.goBack()} />
                        <Text style={styles.title}>{"How to Make " + title}</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ height: 300, marginBottom: 10, marginTop: 5 }}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: props.data.image }}
                                />
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Description</Text>
                                <Text style={styles.simpleText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Instruction</Text>
                                {
                                    props.data.instructions.split("Step").slice(1).map((data: any, id: any) => {
                                        return (
                                            <Text style={styles.simpleText} key={"Instructions-" + data + "-" + id}>Step{data}</Text>
                                        )
                                    })
                                }
                            </View>
                            <View>
                                <Text style={[styles.simpleText, { color: 'red', marginTop: 10, }]}>
                                    * {props.data.authorNote}
                                </Text>
                            </View>
                            <View style={{ marginBottom: 80 }}></View>
                        </ScrollView>
                    </View>
                ) 
            }
            {
                props.type === "Ingredient Guides" && (
                    <View style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ height: 440, marginBottom: 10, position: 'relative' }}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: props.data.image }}
                                />
                                <MaterialIcons name="arrow-back-ios" size={32} onPress={() => props.goBack()} style={{ position: 'absolute', top: 20, left: 20, opacity: 0.8 }} color="white" />
                                <View style={styles.titleWrapper}>
                                    <Text style={{ fontSize: 14, color: Colors.GREENSUPERDARK, fontWeight: 'bold', paddingBottom: 5, fontStyle: 'italic' }}>WIKI</Text>
                                    <Text style={{ fontSize: 18, color: Colors.GREENSUPERDARK, fontWeight: 'bold' }}>{props.data.name}</Text>
                                </View>
                            </View>
                            <View style={[styles.informationWrapper, { marginTop: 30 }]}>
                                <Text style={{ fontSize: 18, color: Colors.GREENSUPERDARK, fontWeight: 'bold', marginBottom: 10 }}>{props.data.name}</Text>
                                <Text style={styles.simpleText}>
                                    {props.data.description}
                                </Text>
                            </View>
                            <View style={styles.informationWrapper}>
                                <Text style={{ fontSize: 18, color: Colors.GREENSUPERDARK, fontWeight: 'bold', marginBottom: 10 }}>Cooking Tips</Text>
                                <Text style={styles.simpleText}>
                                    {props.data.description}
                                </Text>
                            </View>
                            <View style={{ marginBottom: 0 }}></View>
                        </ScrollView>
                    </View>
                )
            }
        </SafeAreaView>
    );
};

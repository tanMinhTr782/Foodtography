import React from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

export const SearchRecipeDetail = (props: {
    specialMode: number, favorite: boolean, star: number, name: string, image: string,whereToNav: any, noneStar: number}) => {
    const renderStarArray = Array.from({ length: props.star }, (_, index) => index);
    const renderUnStarArray = Array.from({ length: (5 - props.star) }, (_, index) => index);
    return (
        <TouchableHighlight
            underlayColor="#CTCTCT"
            onPress={() => props.whereToNav()}
            style={styles.cardItemContainer}
            key={"Recipe-Detail-2-" + props.name}
        >
            <View>
                <Image
                    style={styles.cardImage}
                    source={{ uri: props.image }}
                />
                {
                    props.specialMode !== 1 ? (
                        props.favorite ? (
                            <TouchableHighlight
                                style={styles.favorite}
                                underlayColor="#CFCFCF"
                                onPress={() => console.log('a')}
                            >
                                <FontAwesome5
                                    name="bookmark"
                                    size={18}
                                    color="white"
                                    iconStyle={{ backgroundColor: 'white' }}
                                />
                            </TouchableHighlight>
                        ) : (
                            <TouchableHighlight
                                style={styles.unFavorite}
                                underlayColor="#CFCFCF"
                                onPress={() => console.log('a')}
                            >
                                <FontAwesome5
                                    name="bookmark"
                                    size={18}
                                    color="white"
                                    iconStyle={{ backgroundColor: 'white' }}
                                />
                            </TouchableHighlight>
                        )
                    ) : (
                        <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            { 
                                props.noneStar === 1 && (
                                    <View style={styles.premium}>
                                        <Text style={styles.premiumText} >PREMIUM</Text>
                                    </View>
                                )
                            }
                            <Feather name="play-circle" size={72} style={styles.playButton} />
                        </View>
                    )
                }
                <View style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                    {
                        props.specialMode === 0 && (
                            <View style={styles.dishVotes}>
                                {
                                    renderStarArray.map((index) => (
                                        <Ionicons name="star" style={styles.dishIconStar} />
                                    ))
                                }
                                {
                                    renderUnStarArray.map((index) => (
                                        <Ionicons name="star" style={styles.dishIconUnStar} />
                                    ))
                                }
                            </View>
                        )
                    }
                    <Text style={styles.dishName}>
                        {props.name}
                    </Text>
                </View>
            </View>  
        </TouchableHighlight>
    );
};

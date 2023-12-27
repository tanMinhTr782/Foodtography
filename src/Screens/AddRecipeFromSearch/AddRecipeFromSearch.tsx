import { Image, ScrollView, Text, View } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'native-base';
import { SearchBar } from '@/Components/SearchBar/SearchBar';
import data from './data.json';

export const AddRecipeFromSearch = (props: { onNavigate: (string: RootScreens) => void }) => {
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
                    {data.map((recipe, index) => {
                        return (
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
                                        <Text style={styles.dishName}>{recipe.name}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { RootScreens } from '..';
import { styles } from './styles';
import { SearchBar } from '@/Components/SearchBar/SearchBar';
import { ScrollView } from 'native-base';

export const SearchByIngredients = (props: { onNavigate: (string: RootScreens) => void }) => {
    return (
        <View style={styles.searchByIngredientsContainer}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchBar></SearchBar>
                    
                </ScrollView>
            </View>
        </View>
    );
};

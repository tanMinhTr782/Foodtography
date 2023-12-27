import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from './styles';
import { Box, Divider, Heading, Icon, Input, VStack } from 'native-base';
import AntDesign from '@expo/vector-icons/AntDesign';

export const SearchBar = () => {
    return (
        <VStack w="100%" space={5} alignSelf="center">
            <Input
                placeholder="Search Recipes"
                width="100%"
                borderRadius="4"
                py="3"
                px="1"
                fontSize="14"
                borderBottomLeftRadius="20"
                borderBottomRightRadius="20"
                borderTopLeftRadius="20"
                borderTopRightRadius="20"
                InputLeftElement={<Icon m="2" ml="3" size="4" color="gray.400" as={<AntDesign name="search1" />} />}
                InputRightElement={<Icon m="2" mr="3" size="4" color="gray.400" as={<AntDesign name="close" />} />}
            />
        </VStack>
    );
};

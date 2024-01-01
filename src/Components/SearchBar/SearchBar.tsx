import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Icon, Input, VStack } from 'native-base';
import AntDesign from '@expo/vector-icons/AntDesign';

export const SearchBar = (props: { icon: any, goBack: () => void, process: any, clear: any }) => {
    const [searchText, setSearchText] = useState('');
    const [icon, setIcon] = useState(props.icon);

    const handlePress = () => {
        if (icon === "search1") {
            props.process(searchText);
        } else {
            props.goBack();
        }   
    };

    const handleClear = () => {
        // Your logic to clear the search text
        props.clear();
        setSearchText('');
    };

    const handleSearch = () => {
        // Your logic when the search button is pressed
        console.log('Searching for:', searchText);
        // You can perform further actions, such as filtering or fetching data based on the search text
    };

    useEffect(() => {
        if (searchText.length !== 0) {
            setIcon('search1');
        } else {
            setIcon(props.icon);
            props.clear();
        }
    }, [searchText]);

    return (
        <VStack w="100%" space={5} alignSelf="center">
            <Input placeholder="Search Recipes" width="100%" borderRadius="4" py="2.5" px="1" fontSize="16"
                borderBottomLeftRadius="20" borderBottomRightRadius="20" borderTopLeftRadius="20" borderTopRightRadius="20"
                InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<AntDesign name={icon} onPress={handlePress} />} />}
                InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<AntDesign name="close" onPress={handleClear} />} />}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
        </VStack>
    );
};

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import { styles } from './styles';
import { Button, Input } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootScreens } from '..';
import { login } from '@/API/auth';

export const Login = (props: { onNavigate: (string: RootScreens) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await login({ email, password });

        // if (response.statusCode === 200) {
        props.onNavigate(RootScreens.MAIN);
        // }
        // console.log(response);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View>
                    <Button style={styles.backButton} onPress={() => props.onNavigate(RootScreens.WELCOME)}>
                        <View>
                            <Ionicons name="arrow-back-circle-outline" style={styles.backItem} />
                        </View>
                    </Button>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subTitle}>Welcome back ! You’re just tap away from something delicious</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.formControl}>
                    <View style={styles.formField}>
                        <Input
                            type="text"
                            style={styles.formInput}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="person" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input
                            type="password"
                            style={styles.formInput}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="lock-closed" style={styles.formIcon} />
                        </View>
                    </View>
                    <Button style={styles.submitButton} onPress={handleLogin}>
                        <Text style={styles.submitButtonText}>LOGIN</Text>
                    </Button>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomInnerContainer}>
                    <Button style={styles.linkButton} onPress={() => {}}>
                        <Text style={styles.linkButtonText}>Forgot your password ? </Text>
                    </Button>
                    <View style={styles.pdY5}>
                        <Text style={styles.grayText}>------------- or connect with -------------</Text>
                    </View>
                    <Button style={styles.googleButton} onPress={() => {}}>
                        <View style={styles.googleButtonContainer}>
                            <Ionicons name="logo-google" style={styles.googleIcon} />
                            <Text style={styles.googleText}>Google </Text>
                        </View>
                    </Button>
                    <View style={styles.flexCenter}>
                        <Text style={styles.boldText}>Don’t have an account ?</Text>
                        <Button
                            style={styles.linkButton}
                            onPress={() => {
                                props.onNavigate(RootScreens.SIGNUP);
                            }}
                        >
                            <Text style={styles.linkButtonGText}>Sign up</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
};

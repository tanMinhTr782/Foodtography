import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { Button, Input } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootScreens } from '..';
import { signup } from '@/API/auth';

export const Signup = (props: { onNavigate: (string: RootScreens) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        const response = await signup({ email, password, name, avatar });
        console.log(response);

        if (response.statusCode === '200') {
            props.onNavigate(RootScreens.MAIN);
        } else {
            setError('Username already exists');
        }
        // console.log(response);
    };

    // const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View>
                    <Button style={styles.backButton} onPress={() => props.onNavigate(RootScreens.WELCOME)}>
                        <View>
                            <Ionicons name="arrow-back-circle-outline" style={styles.backItem} />
                        </View>
                    </Button>
                    <Text style={styles.title}>Signup</Text>
                    <Text style={styles.subTitle}>Create an account here, sign up with your email address</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.formControl}>
                    {error && (
                        <View style={styles.errorView}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )}
                    <View style={styles.formField}>
                        <Input
                            type="text"
                            style={styles.formInput}
                            placeholder="Your Name"
                            value={name}
                            onChangeText={setName}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="person" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input
                            type="text"
                            style={styles.formInput}
                            placeholder="Email address"
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
                    <View style={styles.formField}>
                        <Input
                            type="password"
                            style={styles.formInput}
                            placeholder="Confirm Password"
                            value={avatar}
                            onChangeText={setAvatar}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="lock-closed" style={styles.formIcon} />
                        </View>
                    </View>
                    <Button style={styles.submitButton} onPress={handleSignup}>
                        <Text style={styles.submitButtonText}>SIGN UP</Text>
                    </Button>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomInnerContainer}>
                    <View style={styles.flexCenter}>
                        <Text style={styles.boldText}>Already have an account ?</Text>
                        <Button
                            style={styles.linkButton}
                            onPress={() => {
                                props.onNavigate(RootScreens.LOGIN);
                            }}
                        >
                            <Text style={styles.linkButtonGText}>Login</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
};

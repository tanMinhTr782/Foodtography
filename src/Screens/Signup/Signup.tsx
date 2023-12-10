import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { Button, Input } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootScreens } from '..';

export const Signup = (props: { onNavigate: (string: RootScreens) => void }) => {
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
                    <View style={styles.formField}>
                        <Input type="text" style={styles.formInput} placeholder="Your Name" />
                        <View style={styles.formLabel}>
                            <Ionicons name="person" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input type="text" style={styles.formInput} placeholder="Email address" />
                        <View style={styles.formLabel}>
                            <Ionicons name="person" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input type="password" style={styles.formInput} placeholder="Password" />
                        <View style={styles.formLabel}>
                            <Ionicons name="lock-closed" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input type="text" style={styles.formInput} placeholder="Confirm Password" />
                        <View style={styles.formLabel}>
                            <Ionicons name="lock-closed" style={styles.formIcon} />
                        </View>
                    </View>
                    <Button style={styles.submitButton} onPress={() => props.onNavigate(RootScreens.MAIN)}>
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

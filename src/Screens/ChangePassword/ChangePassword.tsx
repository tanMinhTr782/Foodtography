import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import { styles } from './styles';
import { Button, Input } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootScreens } from '..';
import { changePassword, getCurrentUserId } from '@/API/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChangePassword = (props: { onNavigate: (string: RootScreens) => void }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = async () => {
        if (password !== confirmPassword) {
            setError('Password and ConfirmPassword is not the same');
        } else {
            const userId = await getCurrentUserId();
            if (userId) {
                const response = await changePassword({ oldPassword, password }, userId);
                if (response.statusCode === 200) {
                    // await AsyncStorage.setItem('accessToken', response.data.accessToken);
                    await AsyncStorage.setItem('user', JSON.stringify(response.data));
                    props.onNavigate(RootScreens.MAIN);
                } else if (response.statusCode === 401) {
                    setError('Wrong old password');
                } else if (response.statusCode === 402) {
                    setError('New password is so weak');
                }
                console.log(response);
            }
        }
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
                    <Text style={styles.title}>Change Password</Text>
                    <Text style={styles.subTitle}>Please enter a new password</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.formControl}>
                    {error && (
                        <View style={styles.errorField}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )}
                    <View style={styles.formField}>
                        <Input
                            type="text"
                            style={styles.formInput}
                            placeholder="Old Password"
                            value={oldPassword}
                            onChangeText={setOldPassword}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="person" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input
                            type="text"
                            style={styles.formInput}
                            placeholder="New Password"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="lock-closed" style={styles.formIcon} />
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Input
                            type="text"
                            style={styles.formInput}
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <View style={styles.formLabel}>
                            <Ionicons name="lock-closed" style={styles.formIcon} />
                        </View>
                    </View>
                    <Button style={styles.submitButton} onPress={handleChangePassword}>
                        <Text style={styles.submitButtonText}>Set Password</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

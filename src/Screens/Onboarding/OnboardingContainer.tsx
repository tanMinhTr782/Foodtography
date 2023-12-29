import { OnboardingScreens } from "./Onboarding";
import React from "react";
import { RootScreens } from '..';
import { RootStackParamList } from '@/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CreateOnboardingNavigatorProps = NativeStackScreenProps<RootStackParamList, RootScreens.ONBOARDING>;

export const OnboardingContainer = ({ navigation }: any) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <OnboardingScreens />;
};
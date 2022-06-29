import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";

export default function Perso({ navigation }: { navigation: any }) {
    const {color}=useTheme();
    return (
        <SafeAreaView style={{flex: 1, marginTop:20}}>
            <Text>
                Page Perso
            </Text>

            <Text onPress={() => { navigation.navigate("Home") }}>
                Aller sur la page Home
            </Text>
        </SafeAreaView>
    )
}